# CodeSphere

## Descripción
CodeSphere es una red social diseñada para desarrolladores, centrada en fomentar la colaboración en proyectos y el intercambio de conocimientos. En codesphere, los usuarios pueden registrarse, crear y personalizar sus perfiles, y unirse o iniciar proyectos. La plataforma permite a los desarrolladores compartir publicaciones, discutir ideas y trabajar juntos para construir soluciones innovadoras.

## Instalación
Para descargar y poder trabajar es necesario clonar el repositorio, clonar tambien [backend](https://github.com/CodeSphereDevs/backend).
Crear el archivo .env con la variable que aparece en el archivo .env.example.
Y usar el comando **pnpm dev** para ejectuar en local 

## Estructura
Para contribuir es importante mantener la estructura interna del proyecto.
 ├─ node_modules
 ├─ public
 ├─ .env
 ├─ .env.example
 ├─ .gitignore
 ├─ index.html
 ├─ package.json
 ├─ README.md
 ├─ package-lock.json
 └─ src
     ├─ api
     ├─ assets
     ├─ compronents
     ├─ contexts
     ├─ pages
     ├─ sass
     ├─ App.jsx
     ├─ index.scss
     └─ main.jsx

* En **pages** van los componentes que corresponden a las diferentes rutas y otros componentes que se usaran unicamente dentro de esa ruta.
* En **components** van componentes que se usan en diferentes rutas
* En **assets** van imagenes y recursos
* En **api** van los metodos para realizar consultas al servidor
* En **sass** el archivo con las variables para los estilos

Cada componente va dentro de una carpeta propia con el correspondiente archivo con mismo nombre pero terminación **.scss** con sus estilos.