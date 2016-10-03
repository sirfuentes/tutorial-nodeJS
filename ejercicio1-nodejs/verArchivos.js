var fs=require("fs");
console.log("inicio");
var config=JSON.parse(fs.readFileSync("config2.json"));
console.log("Configuración inicial: ",config);
fs.watchFile("config.json",function(current,previous){
	console.log("Configuracion modificada");
	config=JSON.parse(fs.readFileSync("config2.json"));
	console.log("nuevo archivo",config);
})