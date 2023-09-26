var http = require('http');
var url = require('url');
var fs = require('fs');
    function onRequest(request, response){  
        if(request.headers.accept.split(',')[0] == 'text/css') {
             console.log('TRUE');

             fs.readFile('genel.css', (err, data)=>{
                 response.writeHeader(200, {'Content-Type': 'text/css'});
                 response.write(data);
                 response.end();
             });  
        }

        else {
            console.log('FALSE');    

            fs.readFile('homepage.html', function(err, data){
                response.writeHead(200, {'Content_type': 'text/html'});
                response.write(data);
                response.end();
            });
        };
    };

    http.createServer(onRequest).listen(8888);
    console.log('[SERVER] - Started!');