var http=require("http");
var fs=require("fs");
console.log("Inicio");
var host="127.0.0.1";
var port=1337;
var server=http.createServer(function(request,response){
	console.log("Petición recibida:"+request.url);
	fs.readFile("./public"+request.url,function(error,data){
		if(error){
			response.writeHead(404,{"Content-type":"text/plain"});
			response.end("Lo siento, página no encontrada");
		}
		else{
			response.writeHead(200,{"Content-type":"text/html"});
			response.end(data);
		}
	})
	//response.writeHead(200,{"Content-type":"text/plain"});
	//response.end("Hola mundo");
});
server.listen(port,host,function(){
	console.log("Escuchando "+host+":"+port)
});