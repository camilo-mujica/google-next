# Descripción del proyecto

Este proyecto es una `prueba técnica`. Consiste en una replica de la página de inicio del buscador de Google (bajo ciertos parámetros y condiciones), así como también una réplica de la página de busqueda. Está elaborado utilizando Next.js + Redux Toolkit (+RTK Query) + Sass.

# Features

-   Fully responsive 📱
-   Historial de resultados en la barra de búsqueda (Redux + Localstorage) 📚
-   Sugerencias de búsqueda al escribir en la barra de búsqueda 🔍
-   Paginación de resultados en Desktop 🖥️
-   Scroll infinito en mobile 📲
-   Api endpoint con paginación para obtener los resultados (Faker.js) 🌐
-   Skeleton loader para las imágenes (detalle de resultados) ⚡️
-   Custom modal (Sass) 🖼️

## Tipo de arquitectura

La arquitectura de este proyecto se basa en slices verticales, donde cada slice representa una parte específica de la funcionalidad del proyecto. Cada slice tiene su propio estado global y es responsable de su propia lógica de negocio.

La estructura del proyecto se organiza en torno a una carpeta `src` en la raíz del proyecto, que contiene las siguientes subcarpetas:

-   `styles`: esta carpeta contiene los estilos de CSS del proyecto.

-   `pages`: esta carpeta contiene las páginas de Next.js, que se corresponden con las rutas de la aplicación.

-   `features`: esta carpeta contiene todos los slices o módulos propios del proyecto, relacionados con la lógica de negocio. Cada slice sigue un patrón de diseño similar, que incluye los siguientes elementos:

    -   `index.ts`: este archivo es la API pública del slice y se encarga de exportar todo lo necesario para el resto de la aplicación.

    -   `slice.ts`: este archivo define el estado global del slice y las acciones que pueden actualizarlo.

    -   `types.ts`: este archivo define los tipos utilizados por el slice.

    -   `constants.ts`: este archivo define las constantes utilizadas por el slice.

    -   `enums.ts`: este archivo define los enums utilizados por el slice.

    -   `components`: esta carpeta contiene los componentes relacionados con el slice.

    -   `hooks`: esta carpeta contiene los hooks personalizados relacionados con el slice.

    -   `screen`: este archivo es el punto de entrada del slice en la interfaz de usuario y se utiliza para renderizar los componentes correspondientes.

-   `app`: esta carpeta contiene el store de Redux, así como los hooks personalizados que adaptan el store al tipo de este proyecto (`useAppDispatch` y `useAppSelector`).

-   `common`: esta carpeta contiene un conjunto de subcarpetas relacionadas con el código reutilizado a lo largo de la aplicación y organizadas por tipo:

    -   `alerts`: esta carpeta contiene los componentes de alerta utilizados en toda la aplicación.

    -   `components`: esta carpeta contiene los componentes reutilizables que no están directamente relacionados con ningún slice en particular.

    -   `constants`: esta carpeta contiene las constantes reutilizables en toda la aplicación.

    -   `enums`: esta carpeta contiene los enums reutilizables en toda la aplicación.

    -   `helpers`: esta carpeta contiene los helpers y funciones de utilidad reutilizables en toda la aplicación.

    -   `hooks`: esta carpeta contiene los hooks personalizados reutilizables en toda la aplicación.

    -   `layout`: esta carpeta contiene los componentes de layout reutilizables en toda la aplicación.

    -   `types`: esta carpeta contiene los tipos reutilizables en toda la aplicación.

## Librerías utilizadas

Este proyecto utiliza las siguientes librerías:

-   `TypeScript`: es un lenguaje de programación de código abierto desarrollado y mantenido por Microsoft. Es un superset de JavaScript que agrega tipado estático y otras características a la sintaxis de JavaScript. [Documentación de TypeScript](https://www.typescriptlang.org/docs/)

-   `React`: es una biblioteca de JavaScript de código abierto utilizada para construir interfaces de usuario. Es mantenido por Facebook y se utiliza ampliamente en el desarrollo web. [Documentación de React](https://reactjs.org/docs/)

-   `Next.js`: es un framework de React de código abierto que se utiliza para construir aplicaciones web modernas en el lado del servidor y del cliente. Incluye características como el renderizado del lado del servidor, el enrutamiento automático y la generación estática. [Documentación de Next.js](https://nextjs.org/docs)

-   `Redux Toolkit`: es un conjunto de herramientas de Redux que simplifican el proceso de configuración de Redux para una aplicación y proporcionan patrones y recomendaciones para la estructura de la aplicación. [Documentación de Redux Toolkit](https://redux-toolkit.js.org/)

-   `RTK Query`: es un paquete adicional para Redux Toolkit que proporciona una forma unificada de manejar solicitudes HTTP y caché de datos en una aplicación Redux. [Documentación de RTK Query](https://redux-toolkit.js.org/rtk-query/overview)

-   `Eslint`: Herramienta para identificar y reportar patrones en el código JavaScript. [Documentación](https://eslint.org/)

-   `Prettier`: Herramienta para formatear automáticamente el código fuente. [Documentación](https://prettier.io/)

-   `Sass`: Preprocesador de CSS que extiende la sintaxis de CSS con características como variables, anidamiento, mixins, etc. [Documentación](https://sass-lang.com/)

-   `Jest`: Framework de pruebas unitarias para JavaScript. [Documentación](https://jestjs.io/)

-   `React Testing Library`: Librería para pruebas de componentes de React. [Documentación](https://testing-library.com/docs/react-testing-library/intro/)

-   `Nextjs Google Analytics` : Librería para integrar Google Analytics en Next.js. [Documentación](https://github.com/MauricioRobayo/nextjs-google-analytics)

## Módulos propios del proyecto (lógica de negocio)

### 🏠 _home_

Este módulo contiene el screen de la pagina inicial, sus estilos, componentes, etc.

### 📝 _results_

Este módulo contiene toda la lógica para la consulta resultados, paginación, componentes, visualización, etc.

### _search_

Exporta el componente de búsqueda y estado del historial de búsqueda.

## Protocolo de despliegue

Este proyecto puede ser desplegado en cualquier proveedor de servicios como Vercel, Netlify, AWS Amplify, entre otros. Sin embargo, se recomienda su despliegue en Vercel o Netlify ya que son las plataformas mejor optimizadas para Next.js. Este protocolo está orientado al despliegue en proveedores de servicio como Vercel o Netlify.

1.  Crear una cuenta en el proveedor de servicio de su elección y conectar su repositorio de GitHub o GitLab.

2.  Configurar las opciones de construcción del proyecto. En la mayoría de los casos, esto se hace de forma automática por el proveedor de servicio. Sin embargo, en algunos casos puede ser necesario agregar comandos de construcción personalizados.

3.  Desplegar el proyecto. En Vercel, esto se hace automáticamente después de hacer push a la rama `main` del repositorio. En Netlify, puede desplegar proyecto manualmente desde la sección "Deploys" del panel de control.

4.  Configurar el dominio o subdominio de preferencia.

## Configuración de variables de entorno

No cuenta con variables de entorno.

## Otros detalles pertinentes

### Desarrollo local

Para correr en local:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000/) en tu navegador para ver el resultado.

### Directorio _/public_

Contiene recursos públicos como imágenes, fuentes y archivos JSON.

### Archivos particulares

-   `next.config.js`: Este archivo es la configuración de Next.js, un framework de desarrollo web de React. En este archivo se pueden configurar plugins, redireccionamientos, la configuración del servidor y otros ajustes de configuración para la aplicación.

-   `tsconfig.json`: Este archivo es la configuración de TypeScript, que es un lenguaje de programación basado en JavaScript que agrega tipos estáticos opcionales y otras características a JavaScript. En este archivo se pueden configurar ajustes de compilación y otras opciones para el proyecto.

-   `.prettierrc.js`: Este archivo es la configuración de Prettier, que es una herramienta de formateo de código que ayuda a mantener el código limpio y legible. En este archivo se pueden configurar opciones de formateo para la aplicación.

-   `.eslintrc.json`: Este archivo es la configuración de ESLint, que es una herramienta de análisis estático de código para identificar y reportar patrones problemáticos encontrados en el código. En este archivo se pueden configurar reglas y ajustes de configuración de ESLint.

## Testing

Para correr las pruebas unitarias ejecutar el script `npm run test` o `npm run test:watch` para correrlas en modo watch.
