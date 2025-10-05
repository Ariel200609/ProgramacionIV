# 🧪 API con TDD + TypeScript + Express + Zod + Vitest/Supertest

Este proyecto fue desarrollado aplicando la metodología **TDD (Test Driven Development)**.  
El objetivo fue practicar el ciclo **Rojo → Verde → Refactor**, construyendo una pequeña API con **TypeScript**, **Express**, **Zod** y pruebas con **Vitest + Supertest**.

---

## 🔄 Metodología TDD aplicada

### 🔴 1. Test Rojo
Primero se escribieron los **tests antes de implementar** la lógica.  
Se definió el comportamiento esperado de los endpoints y se ejecutaron los tests.  
Como aún no existía la implementación, los tests fallaron (estado **Rojo**), confirmando que los casos de prueba estaban correctamente definidos.

📌 **Resultado inicial:** ❌ Tests fallando (**Rojo**)

---

### 🟢 2. Implementación mínima (Verde)
Luego se escribió el **código mínimo necesario** para que los tests pasaran.  
Se implementaron los **endpoints básicos** y las **validaciones con Zod**, cumpliendo con los requerimientos definidos en los tests.

📌 **Resultado:** ✅ Tests pasando (**Verde**)

---

### ♻️ 3. Refactor
Con los tests en verde, se mejoró el código sin alterar su comportamiento.  
En esta etapa se realizaron tareas como:

- Separar la lógica en **controladores** y **servicios**.  
- Centralizar las **validaciones con Zod**.  
- Mejorar **nombres de variables** y el **manejo de errores**.  
- Agregar **tests de integración** y **casos borde** adicionales.  

Cada modificación fue verificada ejecutando nuevamente los tests, garantizando que todo siguiera funcionando correctamente.

📌 **Resultado final:** 🧩 Código limpio + Tests en verde

---

## ✅ Conclusión

El enfoque **TDD** permitió desarrollar una API con:

- Mayor **confianza** en cada cambio realizado.  
- **Validaciones robustas y tipadas** gracias a Zod + TypeScript.  
- **Código modular**, legible y fácil de mantener.  
- **Cobertura completa** de tests unitarios e integrados (Vitest + Supertest).

---

💡 **Resumen del proceso:**  
> Test Rojo → Implementación mínima Verde → Refactor → Repetir hasta alcanzar una API sólida y mantenible.
