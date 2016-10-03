var fs=require("fs");
console.log("Inicio");

fs.writeFile("nuevoAsinc.txt","Hola mundo asinc",function(error){
	console.log("terminé de escribir el archivo asinc");
});
console.log("escribiendo el archivo");