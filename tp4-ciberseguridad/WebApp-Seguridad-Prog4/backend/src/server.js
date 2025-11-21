const express = require('express');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
const { connectWithRetry } = require('./config/database');
const { initializeFiles } = require('./utils/fileInit');
const { errorHandler, notFound } = require('./middleware/errorHandler');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// 1. Configuración Segura de Sesiones (CSRF & Cookies)
app.use(session({
  secret: 'vulnerable-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { 
      secure: false, // true en producción con HTTPS
      httpOnly: true,
      sameSite: 'strict' // Previene CSRF
  }
}));

// 2. ELIMINADO: Rate Limiter Global
// app.use(limiter); <-- Esto bloqueaba tus tests de fuerza bruta

app.use('/api', routes);
app.use(notFound);
app.use(errorHandler);

initializeFiles();
setTimeout(connectWithRetry, 5000);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}

module.exports = app;