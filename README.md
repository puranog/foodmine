## primeros pasos
1.installar lo necesario(en mi caso nodejs,vscode,git)


2.crear el proyecto angular
    1.crear el folder del proyecto
    2.install @angular/cli
    3.crear app del frontend


4.hacer el header
    1.generar el componente
    2.agregar el html
    3.agregar el css


5.lista de comidas
    1.crear el modelo de comida
    2.crar data.ts
        1.agregar sample food
    3.agreagr imagen a  assets
    4 crear componente comidas
    5.crear componente home


6.busqueda

    1.agregar metodo a food services
    2.agregar ruta de busqueda
    3.ver los resultado en home component
    4.generar el componente busqueda
        1.agregar a componente home
        2.agregar ts 
        3.agregarhtml
        4.agregar css
        
7.bar de etiquetas
  1. crear el modelo de etiqueta
  2.agregar samples etiquetas a data.ts
  3.food service
    1.agregar metodo de obtener todas las etiquetas
    2.agregar metodo para obtener todas las comidas por etiquetas
  4.agregar rutas de etiquetas
  5.mostrar los resultados de las etiquetas en el componente home
  6.generar el componente etiquetas

8.pagina de comida
  1.agregar metodo para food service
  2.generar food page component
    1.agregar ruta
    2.agregar ts 
    3.agregarhtml
    4.agregar css

9.pagina de carrito
  1.generar cardItem model
  2.generar card model
  3.generar card service
  4.agregar boton en pagona de comida
  5.generar card page component

10.No encontrada!
  1.generar el componente no encontrado
    1.agregar ts
    2.agregar html
    3.agregar css
  2.agregar a las paginas
    1.home page
    2.food pages
    3.card page

11.conectar al backend
  1.crear el backend folder
  2.npm init
  3.npm install typescript
  4.create tsconfing.js
  5.crear .gitignore
  6.copy data.ts a backend/src
  7.npm install express cors
  8.create server.ts//poner los metodos de foodservices para api con express
    1.intalar @types
    2.agregar apis
  9.npm install nodemon ts-node --save-dev
  10.agregar urs.ts al frontend
  11.agregar HttpClient module
  12.actualizar food service
12.Pagina de login
  1.generar componente
    1.agregar rutas
    2.agregar ts
    3.agregar html
      1.Importar reactive forms module
    4.agregar css
  2.agregar login api
    1.use json
    2.agregar jsonweb token
    3.testear usando postman
  3.generar user services
   1.generar user model
   2.agregar user subjet
   3.agregar login method
     1.agregar user URLS
     2.generar IuserLogin interface
     3.add ngx-toastr
        1.import module
        2.import BrowserAnimationModule
        3.agregar estilos en angular.json
     4.agregar header
    1.agredar metodo local storage
    2.agregar logout method
      1.agregar header
13.hacer componentes para la pagina login
  1.imput container
  2.input validation
  3.text input
  4.defaul button