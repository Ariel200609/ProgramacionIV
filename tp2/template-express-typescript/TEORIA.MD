1. Explique el ciclo Rojo → Verde → Refactor y por qué es importante el tamaño de los
pasos.

    El ciclo de TDD comienza con Rojo: escribir un test que falla porque la funcionalidad aún no existe. Luego Verde: implementar el código mínimo para que el test pase. Finalmente Refactor: mejorar el código manteniendo los tests en verde.
    La importancia del tamaño de los pasos radica en que iteraciones pequeñas reducen errores, facilitan el debugging y mantienen un feedback rápido. Cuanto más chico sea el paso, más controlado y seguro es el avance.

2. Diferencie tests unitarios, de integración y E2E en APIs.
   
    - Unitarios: prueban funciones o reglas de negocio aisladas (ej. cálculo de precio de pizza).
	- Integración: validan cómo interactúan distintos módulos entre sí (ej. endpoint Express + servicio + validación Zod).
	- E2E (end-to-end): simulan el uso completo del sistema desde la perspectiva del usuario, atravesando varias capas (ej. cliente que hace un pedido y verifica que el estado cambió en la API).
3. ¿Qué es un doble de prueba? Defina mock, stub y spy y cuándo conviene cada uno.
    
    Un doble de prueba reemplaza un componente real en un test para controlar su comportamiento.
	- Mock: objeto simulado con expectativas predefinidas, usado para verificar interacciones.
	- Stub: devuelve respuestas fijas, útil cuando no importa la lógica real (ej. servicio externo).
	- Spy: registra llamadas a una función real, permitiendo verificar cómo fue usada sin alterar demasiado su comportamiento.
4. ¿Por qué es útil separar app de server? Muestre (en 8–10 líneas) un ejemplo mínimo
con makeApp() y un test de integración con Supertest.
    
    Separar la aplicación de Express (app) del servidor (server.listen) permite testear la lógica HTTP sin levantar un puerto real. Esto facilita los tests de integración con Supertest y mejora la modularidad.
    /*
        // app.ts
        import express from "express";
        export function makeApp() {
        const app = express();
        app.use(express.json());
        app.get("/ping", (req, res) => res.json({ ok: true }));
        return app;
        }

        // app.test.ts
        import request from "supertest";
        import { makeApp } from "./app";

        test("GET /ping responde ok", async () => {
        const app = makeApp();
        const res = await request(app).get("/ping");
        expect(res.body.ok).toBe(true);
        });
5. Zod: diferencia entre parse y safeParse. ¿Dónde usaría cada uno en una ruta
Express y por qué?

	- parse(): valida y si hay error lanza excepción → ideal cuando querés cortar el flujo de inmediato.
	- safeParse(): devuelve { success, data | error } sin lanzar excepción → útil cuando necesitás manejar el error de validación de manera controlada.
    En una ruta Express, conviene safeParse() para poder responder con un 422 y mensajes claros al cliente en caso de entrada inválida.

6. Dé dos ejemplos de reglas de dominio que deben probarse con tests unitarios (no
sólo validación de entrada).

    1.	El precio de una pizza se calcula como precio base por tamaño + toppings adicionales.
	2.	Una orden no puede ser cancelada si su estado es delivered.
    Estas reglas son de negocio y deben ser validadas con tests unitarios porque representan la lógica central, más allá de la validación de inputs.

7. ¿Qué malos olores suele haber en suites de tests? Dé 3 ejemplos (naming, duplicación,
asserts débiles, mocks frágiles, etc.).

	1.	Nombres poco claros: tests con nombres genéricos como test1() dificultan entender el objetivo.
	2.	Duplicación de código: setup repetido en muchos tests en vez de centralizarlo en helpers.
	3.	Asserts débiles: tests que solo verifican que no haya error, sin comprobar salidas ni estados relevantes.

8. ¿Cómo trazará criterios de aceptación ↔ tests? Incluya un mini ejemplo de tabla con
2 filas.

    Se utiliza una matriz de casos que vincula cada criterio de aceptación con los tests correspondientes. Ejemplo:

    | ID   | Descripción                      | Input            | Acción                 | Resultado esperado        | Test            |
    |------|----------------------------------|------------------|------------------------|---------------------------|-----------------|
    | CA1  | Crear order con toppings válidos | size=M, 2 items  | POST /orders           | 201 + objeto con precio   | test_orders.ts  |
    | ERR1 | Cancelar order entregado         | id=123 delivered | POST /orders/123/cancel| 409 Conflict              | test_cancel.ts  |

9. ¿Por qué no perseguir 100% de cobertura a toda costa? Mencione riesgos/limitaciones.

    Buscar 100% puede llevar a tests artificiales o redundantes que no agregan valor. Esto genera mantenimiento costoso, falsas seguridades y pérdida de tiempo. Lo importante es cubrir casos críticos de negocio y flujos de uso reales, no cada línea de código trivial.

10.  Defina y dé un ejemplo de helper/builder para tests.

    Un helper o builder es una función que crea objetos de prueba de forma simple y reutilizable. Evita duplicar datos de setup.
    
    function makeOrder(overrides = {}) {
    return {
        size: "M",
        toppings: ["cheese"],
        address: "Calle Falsa 123",
        ...overrides
    };
    }

    // uso en test
    const order = makeOrder({ size: "L" });