# Documentación del Frontend

## Requisitos

Para ejecutar este proyecto de Angular, asegúrate de tener instalado:

- **Node.js v22.14.0** o superior.
- **Angular CLI** (se recomienda la última versión).

Puedes verificar las versiones instaladas con:

```sh
node -v
ng version
```

Si no tienes Angular CLI, instálalo con:

```sh
npm install -g @angular/cli
```

## Instalación

Instala las dependencias:

```sh
npm install
```

## **¿Cómo hacer pruebas?**

Para completar cada uno de los requerimientos de la aplicación, sigue estos pasos:

### **1. Pantalla de Usuarios**

- La pantalla de usuarios es la primera pantalla del aplicativo.
- Con el botón **"Crear nuevo usuario"**, puedes registrar un nuevo usuario.
- Si ocurre un error, aparecerá un modal indicando el problema.
- Las validaciones están en el backend: el correo debe ser válido y único.

### **2. Pantalla de Transacciones**

- Si no se ha seleccionado un usuario e intentas acceder a **Transacciones** desde el menú lateral izquierdo, no podrás crear nuevas transacciones (retiro o depósito); solo podrás visualizar las existentes.
- Si seleccionas un usuario y accedes a sus transacciones, podrás crear un **retiro (Withdrawal)** o un **depósito (Deposit)**.
- Para permitir un **retiro**, primero debe aprobarse un **depósito**. De lo contrario, aparecerá la alerta **"Insufficient funds"**.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
├── README.md
├── angular.json
├── package.json
├── tsconfig.json
├── src
│   ├── app
│   │   ├── app.component.ts
│   │   ├── app.routes.ts
│   │   ├── core
│   │   │   └── layout
│   │   │       └── sidebar
│   │   ├── features
│   │   │   └── pages
│   │   │       ├── transactions
│   │   │       ├── users
│   │   ├── shared
│   │   │   ├── components
│   │   │   ├── models
│   ├── environments
│   ├── index.html
│   ├── main.ts
│   └── styles.css
```

### Explicación

- **`app/`**: Contiene los componentes principales del frontend.
- **`core/layout/`**: Maneja el diseño base (sidebar, header, etc.).
- **`features/pages/`**: Contiene las páginas principales como transacciones y usuarios.
- **`shared/`**: Componentes reutilizables, modelos y servicios.
- **`environments/`**: Configuraciones para diferentes entornos.
- **`index.html` y `main.ts`**: Punto de entrada de la aplicación.

## Ejecución del Proyecto

Para iniciar el servidor de desarrollo, ejecuta:

```sh
ng serve
```

Por defecto, la aplicación se ejecuta en `http://localhost:4200/`.
