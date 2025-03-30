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
