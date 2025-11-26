const request = require('supertest');
const express = require('express');
const session = require('express-session');
const csrf = require('csurf');
const vulnerabilityRoutes = require('../../src/routes/vulnerabilities');

describe('Seguridad: CSRF (Cross-Site Request Forgery)', () => {
  let app;
  let agent;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use(session({
      secret: 'test-secret',
      resave: false,
      saveUninitialized: true
    }));
    
    // Middleware para simular usuario autenticado
    app.use((req, res, next) => {
      req.session.userId = 1;
      next();
    });
    
    app.use('/api', vulnerabilityRoutes);
    agent = request.agent(app);
  });

  test('❌ DEBE FALLAR: Las transferencias deben requerir token CSRF', async () => {
    // Intento de transferencia sin token CSRF
    const response = await agent
      .post('/api/transfer')
      .send({
        fromAccount: '1234567890',
        toAccount: '0987654321',
        amount: '1000'
      });

    // Debe rechazar la solicitud sin token CSRF válido
    expect(response.status).toBe(403);
  });

  test('❌ DEBE FALLAR: Debe validar el header Origin/Referer', async () => {
    // Obtener token CSRF válido
    const tokenResponse = await agent.get('/api/csrf-token');
    const csrfToken = tokenResponse.body.csrfToken;

    // Simular request desde origen malicioso
    const response = await agent
      .post('/api/transfer')
      .set('Origin', 'http://evil-site.com')
      .send({
        _csrf: csrfToken,
        fromAccount: '1234567890',
        toAccount: '0987654321',
        amount: '1000'
      });

    // Debe rechazar requests desde origenes no permitidos
    expect(response.status).toBe(403);
  });

  test('❌ DEBE FALLAR: Los tokens CSRF deben ser únicos por sesión', async () => {
    // Obtener token CSRF
    const tokenResponse = await agent.get('/api/csrf-token');
    expect(tokenResponse.status).toBe(200);
    expect(tokenResponse.body.csrfToken).toBeDefined();

    // El token debe ser único y no predecible
    const token1 = tokenResponse.body.csrfToken;
    
    // Obtener otro token en una nueva sesión
    const agent2 = request.agent(app);
    const tokenResponse2 = await agent2.get('/api/csrf-token');
    const token2 = tokenResponse2.body.csrfToken;

    expect(token1).not.toBe(token2);
    expect(token1.length).toBeGreaterThan(20); // Token suficientemente largo
  });

  test('✅ DEBE PERMITIR: Transferencia con token CSRF válido', async () => {
    // Obtener token CSRF válido
    const tokenResponse = await agent.get('/api/csrf-token');
    const csrfToken = tokenResponse.body.csrfToken;

    // Realizar transferencia con token CSRF válido
    const response = await agent
      .post('/api/transfer')
      .set('Origin', 'http://localhost:3000')
      .send({
        _csrf: csrfToken,
        fromAccount: '1234567890',
        toAccount: '0987654321',
        amount: '1000'
      });

    // Debe aceptar la solicitud con token válido
    expect([200, 201]).toContain(response.status);
  });
});