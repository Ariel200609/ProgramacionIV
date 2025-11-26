const csrf = require('csurf');

// Crear protección CSRF
const csrfProtection = csrf({ cookie: false });

// Middleware para manejar errores CSRF y devolverlos con mensaje específico
const csrfErrorHandler = (err, req, res, next) => {
  if (err.code === 'EBADCSRFTOKEN') {
    // Devolver error CSRF con mensaje específico
    return res.status(403).json({ error: 'CSRF token validation failed' });
  }
  next(err);
};

module.exports = {
  csrfProtection,
  csrfErrorHandler
};
