"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const server = new app_1.default(3000);
server.start(() => {
    console.log("on port 3000");
});
//# sourceMappingURL=index.js.map