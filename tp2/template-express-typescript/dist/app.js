"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeApp = makeApp;
const express_1 = __importDefault(require("express"));
const order_routes_1 = __importDefault(require("./routes/order.routes"));
function makeApp() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    // Health check
    app.get('/health', (req, res) => {
        res.json({ status: 'ok' });
    });
    // Routes
    app.use('/orders', order_routes_1.default);
    app.use((req, res) => {
        res.status(404).json({ error: 'Route not found' });
    });
    return app;
}
//# sourceMappingURL=app.js.map