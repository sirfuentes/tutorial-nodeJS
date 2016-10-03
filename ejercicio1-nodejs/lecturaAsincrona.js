var fs=require("fs");
console.log("Comienza la ejecución");

fs.readFile("sample.txt",function(error,data){
	console.log("lectura asíncrona-contenidos del archivo: "+data);
});
console.log("estamos en ello");