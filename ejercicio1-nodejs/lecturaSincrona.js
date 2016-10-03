var fs=require("fs");
console.log("Comienza la ejecución");

console.log("lectura síncrona");
var contenido=fs.readFileSync("sample.txt");//,function(error,data){
console.log("contenidos del archivo: "+contenido);
console.log("archivo leído");