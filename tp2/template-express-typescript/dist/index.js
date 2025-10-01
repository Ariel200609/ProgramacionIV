"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = process.env.PORT || 3000;
const app = (0, app_1.makeApp)();
app.listen(PORT, () => {
    console.log(` API de pizzeria corriendo en el puerto: ${PORT}`);
});
//# sourceMappingURL=index.js.map