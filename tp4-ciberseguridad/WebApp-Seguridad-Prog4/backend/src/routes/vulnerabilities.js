const express = require('express');
const router = express.Router();
const { csrfProtection, csrfErrorHandler } = require('../middleware/csrfHandler');
const vulnerabilityController = require('../controllers/vulnerabilityController');
const { uploadMiddleware, uploadFile } = require('../controllers/uploadController');

// Middleware para validar Origin/Referer en solicitudes sensibles
const validateOrigin = (req, res, next) => {
  const allowedOrigins = ['http://localhost:3000', 'http://localhost:5000'];
  const origin = req.get('origin');
  const referer = req.get('referer');
  
  // Para POST/PUT/DELETE, validar Origin o Referer
  if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(req.method)) {
    if (origin && !allowedOrigins.includes(origin)) {
      return res.status(403).json({ error: 'Invalid origin' });
    }
    if (referer) {
      try {
        const refererUrl = new URL(referer);
        if (!allowedOrigins.includes(`${refererUrl.protocol}//${refererUrl.host}`)) {
          return res.status(403).json({ error: 'Invalid referer' });
        }
      } catch (e) {
        return res.status(403).json({ error: 'Invalid referer' });
      }
    }
  }
  next();
};

// Command Injection
router.post('/ping', vulnerabilityController.ping);

// CSRF - Endpoint para obtener token CSRF
router.get('/csrf-token', csrfProtection, vulnerabilityController.getCsrfToken);

// CSRF - Transferencia (protegida con token CSRF y validación de origen)
router.post('/transfer', validateOrigin, csrfProtection, vulnerabilityController.transfer, csrfErrorHandler);

// Local File Inclusion
router.get('/file', vulnerabilityController.readFile);

// File Upload
router.post('/upload', uploadMiddleware, uploadFile);

// Manejo de errores CSRF
router.use(csrfErrorHandler);

module.exports = router;
