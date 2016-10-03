var fs=require("fs");
console.log("Inicio");
var contenido=fs.readFileSync("config2.json");
console.log("Contenidos "+contenido);

var config=JSON.parse(contenido);
console.log("config",config);
console.log("username=",config.username);