var http=require("http");
console.log("Inicio");
var host="127.0.0.1";
var port=1337;
var server=http.createServer(function(request,response){
	console.log("Petición recibida: "+request.url);
	response.writeHead(200,{"Content-type":"text/plain"});
	response.end("Hola mundo");
});
server.listen(port,host,function(){
	console.log("Escuchando "+host+":"+port)
});