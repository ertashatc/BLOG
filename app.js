const fs = require('fs');
const http=require('http');
const path = require('path');
const sql = require('mssql/msnodesqlv8');
const server = http.createServer(async function (req, res) { //http içerisindeki servera erişmiş oluyoruz.
  if(req.headers.accept.split(',')[0] == 'text/css') {
    console.log('TRUE');

    fs.readFile('genel.css', (err, data)=>{
        res.writeHeader(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
    });  
}
 
    res.writeHead(200,{'Content-Type':'text/html' });
    // Sunucu açık tüm requestler buraya geliyor
    if(req.url == "/") req.url = "/homepage.html"
     // Url yoksa anasayfadır

    console.log(`${__dirname}${req.url}`);
    let file=__dirname+"/public/"+req.url;
    if (fs.existsSync(`${__dirname}${req.url}`) || fs.existsSync(`${__dirname}${req.url}.html`)) {
        // İstenilen url var
        if (fs.existsSync(`${__dirname}${req.url}.html`)) {
            // İstenilen url bir sayfa
            fs.readFile(`${__dirname}${req.url}.html`,function(err,data){
                if(err) throw err;
                res.write(data);
                return res.end();
            })
        } else {
            // İstenilen url bir sayfa değil
            fs.readFile(`${__dirname}${req.url}`, function(err, data) {
                if(err) throw err;
                res.write(data);
                return res.end();
            })
        }
    } else return res.end(); // İstenilen url yok response yok
    
})
server.listen(8080,'localhost'); //8080 portu dinlenir.
    console.log('8080 portu dinleniyor');



