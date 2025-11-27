// Mock de la base de datos para los tests
const mockDb = {
  query: jest.fn((query, params, callback) => {
    if (typeof params === 'function') {
      callback = params;
      params = [];
    }
    // Simular respuestas según la query
    if (query.includes('SELECT * FROM users')) {
      callback(null, [{
        id: 1,
        username: 'testuser',
        password: '$2a$10$YourHashedPasswordHere',
        email: 'test@example.com'
      }]);
    } else if (query.includes('SELECT COUNT(*)')) {
      callback(null, [{ count: 1 }]);
    } else if (query.includes('SELECT * FROM products')) {
      const testProducts = [
        { id: 1, name: 'Test Product', category: 'Test', price: 10, stock: 100 }
      ];
      
      // Filtrar por parametros si existen
      if (params && params.length > 0) {
        const filtered = testProducts.filter(product => {
          // Primer parametro es category si existe
          if (params[0] && query.includes('category = ?')) {
            return product.category === params[0];
          }
          return true;
        });
        callback(null, filtered);
      } else {
        callback(null, testProducts);
      }
    } else {
      callback(null, []);
    }
  }),
  connect: jest.fn((callback) => callback(null))
};

// Mock del módulo de database
jest.mock('../src/config/database', () => ({
  db: mockDb,
  connectWithRetry: jest.fn()
}));

// Variables de entorno para tests
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-secret';
process.env.DB_HOST = 'localhost';
process.env.DB_USER = 'test';
process.env.DB_PASSWORD = 'test';
process.env.DB_NAME = 'test_db';

// Limpiar mocks después de cada test
afterEach(() => {
  jest.clearAllMocks();
});
