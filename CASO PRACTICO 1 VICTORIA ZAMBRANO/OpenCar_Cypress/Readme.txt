#########################################################################################################
HERRAMIENTAS UTILIZADAS
#########################################################################################################
Node.js
Cypress
#########################################################################################################
INSTALACIÓN DE NODE.js
#########################################################################################################
Descargar el node.js e instalar
Ejecutar el comando node -v para ver la versión de node que se encuentra instalada en la pc 
#########################################################################################################
INSTALACIÓN DE CYPRESS
#########################################################################################################
1. Crear un repositorio en cualquier unidad de la PC para nuestro proyecto 
2. Abrir el Visual Code con la ruta de la carpeta
3. Abrir la terminal, ejecutar el comando: npm init // Para inicializar el nodejs
    Colocar los nombres del package, descripción del proyecto,autor, 
4. Ejecutar el comando npm install cypress -save-dev // Permite instalar cypress
5. Abrir cypress con el comando npx cypress open
6. Abrir Cypress, click en E2E Testing
7. Seleccionar el navegador de preferencia para ejecutar cypress
8. Click en Start E2E Testing in Navegador
9. Elegir ejemplos o crear desde cero los archivos de testing
10. Ir al visual code

###########################################################################################################
PRUEBAS EN CYPRESS
###########################################################################################################

En el carpera node_modules el archivo cypress.config.js podemos colocar la URL que se utiliza
para empezar las pruebas

Dentro de la carpeta e2e se puede crear una carpeta para agregar todos los archivos cypress 
que se requieran 

Se realizó un archivo de navegación, de agregar items, ver carrito de compras y checkout
##########################################################################################################
EJECUCIÓN DE PRUEBAS EN CYPRESS
###########################################################################################################
 
Para ejecutar los arhivos cypress, se debe ir al navegador donde se esta realizando la ejecución
de pruebas 
Seleccionar Specs 
Buscar la carpeta Cypress\e2e
Seleccionar en 3-opencar
Abrir los archivos de esa carpeta y se ejecutarán automaticamente al dar click
#############################################################################################################

