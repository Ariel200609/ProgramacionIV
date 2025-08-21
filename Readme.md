# Programación IV - Proyecto Inicial con TypeScript

Este proyecto es el punto de partida para la materia **Programación IV**. El objetivo es aprender los conceptos básicos de TypeScript y aplicarlos en la construcción de estructuras de datos simples, como una pila (Stack) enlazada.

## Estructura del Proyecto

La estructura del proyecto es la siguiente (ver también `image.png`):

```
ProgramacionIV/
│
├── src/
│   ├── index.ts                # Archivo principal de ejecución
│   ├── persona.ts              # Clase Persona de ejemplo
│   └── stack/
│       ├── linkedStack.ts      # Implementación de la pila enlazada
│       ├── node.ts             # Nodo para la pila enlazada
│       └── stack.interface.ts  # Interfaz Stack
│
├── SetupYconvenciones/
│   └── ramos.ts                # Guía básica de TypeScript y convenciones
│
├── image.png                   # Imagen con la estructura visual del proyecto
└── README.md                   # Este archivo
```

## Objetivos de la Clase

- Comprender la sintaxis y tipos básicos de TypeScript.
- Implementar clases, interfaces y estructuras de datos.
- Aprender buenas prácticas y convenciones de TypeScript.
- Ejecutar y probar código TypeScript en un entorno real.

## ¿Cómo ejecutar el proyecto?

1. Instala [Node.js](https://nodejs.org/) y [TypeScript](https://www.typescriptlang.org/).
2. Compila los archivos TypeScript:
   ```
   tsc
   ```
3. Ejecuta el archivo principal:
   ```
   node dist/src/index.js
   ```
   *(Asegúrate de que la configuración de tu proyecto compile los archivos en la carpeta `dist`)*

## Archivos principales

- **ramos.ts**: Guía básica con ejemplos de sintaxis y tipos en TypeScript.
- **linkedStack.ts**: Implementación de una pila enlazada usando clases y nodos.
- **index.ts**: Ejemplo de uso de las clases y estructuras implementadas.

## Aprendizajes clave

- Tipos básicos, arrays, tuplas, enums, interfaces y clases en TypeScript.
- Implementación de una estructura de datos (Stack) usando nodos enlazados.
- Manejo de errores y buenas prácticas de programación.

---

¡Bienvenido/a a Programación IV!  
Este proyecto te servirá como base para aprender y practicar TypeScript desde