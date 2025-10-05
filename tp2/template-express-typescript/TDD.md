# API con TDD + TypeScript + Express + Zod + Vitest/Supertest

Este proyecto fue desarrollado aplicando la metodología **TDD (Test Driven Development)**.  
El objetivo fue practicar el ciclo **Rojo → Verde → Refactor**, construyendo una pequeña API con **TypeScript**, **Express**, **Zod** y pruebas con **Vitest + Supertest**.

---

## Metodología TDD aplicada

### 1. Test Rojo
Primero se escribieron los **tests antes de implementar** la lógica.  
Se definió el comportamiento esperado de los endpoints y se ejecutaron los tests.  
Como aún no existía la implementación, los tests fallaron (estado **Rojo**), confirmando que los casos de prueba estaban correctamente definidos.

**Resultado inicial:** Tests fallando (**Rojo**)

---

### 2. Implementación mínima (Verde)
Luego se escribió el **código mínimo necesario** para que los tests pasaran.  
Se implementaron los **endpoints básicos** y las **validaciones con Zod**, cumpliendo con los requerimientos definidos en los tests.

**Resultado:** Tests pasando (**Verde**)

---

### 3. Refactor
Con los tests en verde, se mejoró el código sin alterar su comportamiento.  
En esta etapa se realizaron tareas como:

- Separar la lógica en **controladores** y **servicios**.  
- Centralizar las **validaciones con Zod**.  
- Mejorar **nombres de variables** y el **manejo de errores**.  
- Agregar **tests de integración** y **casos borde** adicionales.  

Cada modificación fue verificada ejecutando nuevamente los tests, garantizando que todo siguiera funcionando correctamente.

**Resultado final:** Código limpio + Tests en verde

---

### Ciclo TDD aplicado

| Etapa | Commit | Descripción |
|-------|------------------|-------------|
| Test Rojo | `test(red): crea tests unitarios para createOrder y cancelOrder` | Se definieron los tests del servicio de órdenes (creación, cancelación y búsqueda) sin implementación aún. Los tests fallaron inicialmente confirmando los casos de prueba. |
| Verde | `feat(green): implementa funciones base en order.service.ts` | Se implementaron las funciones `createOrder`, `cancelOrder`, `getOrderById` y `getOrdersByStatus` para que los tests pasaran. |
| Refactor | `refactor: mejora nombres y agrega helper clearOrders para tests` | Se simplificó la lógica del servicio, se eliminó duplicación y se añadió `clearOrders()` para limpiar el estado entre tests. |
| Test Rojo | `test(red): agrega tests de integración para POST /orders y GET /orders/:id` | Se definieron los tests HTTP de creación y consulta de órdenes usando **Supertest**, antes de implementar las rutas. |
| Verde | `feat(green): implementa endpoints y validaciones con Zod` | Se creó el router `order.routes.ts`, agregando validaciones con **Zod** y manejo de errores 422, 404 y 409. |
| Refactor | `refactor: separa app y server en makeApp()` | Se extrajo `makeApp()` en `app.ts` para poder testear la API sin levantar puerto (necesario para Vitest + Supertest). |
| Test Rojo | `test(red): agrega casos borde de validación (dirección corta, toppings >5)` | Se añadieron tests para errores de validación en los endpoints. |
| Verde | `feat(green): completa manejo de errores en rutas` | Se ajustó la capa de rutas para devolver los códigos y mensajes correctos (422/409). |
| Refactor | `refactor: organiza imports y mejora estructura de carpetas` | Se limpió el proyecto, moviendo modelos a `models/` y validaciones al router. |

---

### Resultado final

Todos los tests unitarios y de integración pasaron en verde, logrando:
- **Validaciones robustas** con Zod.  
- **Reglas de negocio claras** en servicios.  
- **Endpoints estables** con cobertura total de casos de éxito y error.  
- **Separación limpia** entre app, server, servicios y rutas.

---
## Matriz de Casos ↔ Tests

| ID   | Descripción | Precondición | Input | Acción | Resultado esperado | Test |
|------|--------------|--------------|--------|---------|--------------------|------|
| CA1  | Crear orden válida (M + 2 toppings) | Ninguna | items=[{M,[queso,pepperoni]}], address="123 Calle, Ciudad" | POST /orders | 201, status=pending, totalPrice=19 | test integrado “crear 201” |
| ERR1 | Items vacío | Ninguna | items=[], address="123 Calle, Ciudad" | POST /orders | 422 con detalles de validación | test integrado 422 items |
| ERR2 | Address corto | Ninguna | items=[{M,[queso]}], address="Short" | POST /orders | 422 | test integrado 422 address |
| CA2  | Cancelar pendiente | Orden creada | id válido | POST /orders/:id/cancel | 200, status=cancelled | test integrado cancelar 200 |
| ERR3 | Cancelar entregada | Orden con delivered | id de orden entregada | POST /orders/:id/cancel | 409 | test integrado 409 delivered |
| CA3  | Obtener orden por id | Orden creada | id válido | GET /orders/:id | 200, retorna orden | test integrado get 200 |
| ERR4 | Orden inexistente | Ninguna | id inexistente | GET /orders/:id | 404 | test integrado 404 id |
| CA4  | Listar todas las órdenes | Al menos una orden creada | — | GET /orders | 200, lista con 1 o más órdenes | test integrado lista |
| CA5  | Filtrar órdenes por estado | Al menos una orden pendiente | status=pending | GET /orders?status=pending | 200, todas las órdenes con status=pending | test integrado filtro status |

## Conclusión

El enfoque **TDD** permitió desarrollar una API con:

- Mayor **confianza** en cada cambio realizado.  
- **Validaciones robustas y tipadas** gracias a Zod + TypeScript.  
- **Código modular**, legible y fácil de mantener.  
- **Cobertura completa** de tests unitarios e integrados (Vitest + Supertest).

---

## Guía de ejecución

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Ariel200609/ProgramacionIV.git
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor**
   ```bash
   npm run dev
   ```
   El servidor estará disponible en [http://localhost:3000](http://localhost:3000)

4. **Ejecutar los tests**
   ```bash
   npm test
   ```
   o con cobertura:
   ```bash
   npm run test:coverage
   ```

---

## Ejemplos de endpoints (curl)

### 1 Crear una orden
```bash
curl -X POST http://localhost:3000/orders   -H "Content-Type: application/json"   -d '{
        "items": [{"size": "M", "toppings": ["queso", "pepperoni"]}],
        "address": "123 Calle, Ciudad"
      }'
```

### 2 Obtener una orden por ID
```bash
curl http://localhost:3000/orders/<ID>
```

### 3 Cancelar una orden
```bash
curl -X POST http://localhost:3000/orders/<ID>/cancel
```

### 4 Listar órdenes (todas o por estado)
```bash
curl http://localhost:3000/orders
curl http://localhost:3000/orders?status=pending
```


**Resumen del proceso:**  
Test Rojo → Implementación mínima Verde → Refactor → Repetir hasta alcanzar una API sólida y mantenible.
