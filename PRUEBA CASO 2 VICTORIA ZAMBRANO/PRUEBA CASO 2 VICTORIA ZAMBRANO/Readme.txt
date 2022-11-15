############################################################################################
HERRAMIENTAS UTILIZADAS
############################################################################################
POSTMAN
NEWMAN
NODE

############################################################################################
INSTALACION NEWMAN
############################################################################################
npm install -g newman

############################################################################################
TEST REALIZADOS
############################################################################################
Se realizo casos de uso para validar datos de ingreso, caracteres, formatos, mensajes

Utilizando la funcion Pre-request Script para configuraciones a nivel de body en el request
Se utilizo la funcion Tests para verificar los test realizados.

Estos se encuentran en cada peticion de la coleccion creada en postman.

############################################################################################
EJECUCION NEWMAN
############################################################################################

1. Ubicarse en el directorio raiz
2. Abrir un terminal powershell
3. Ejecutar el siguiente comando

newman run '.\Prueba QA Banco PichinchaV2.postman_collection.json' -r html

4. Se creara un archivo html con los resultados de la prueba

5. (Opcional) ejecutar el siguiente comando para visualizar los resultados en consola
newman run '.\Prueba QA Banco PichinchaV2.postman_collection.json'


############################################################################################
EJECUCION POSTMAN
############################################################################################

1. Abrir postman y ubicarse en el menu Collections
2. Junto al nombre del workspace actual dar clic el boton import y seleccionar la coleccion 
Prueba QA Banco PichinchaV2.postman_collection.json
3. Una vez importado ubicarse en la carpeta de la coleccion llamada Prueba QA Banco Pichincha
4. Buscar en las opciones de la carpeta el boton Run y presionar clic
5. Seleccionar como ejecutara la coleccion, el numero de iteraciones, el retardo y dar clic en ejecutar
6. se visualizara un reporte con todas las ejecuciones realizadas de los casos de prueba programados.




