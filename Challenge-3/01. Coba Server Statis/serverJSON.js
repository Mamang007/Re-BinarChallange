//Membuat Server JSON Statis

const http = require("http");

function onRequest(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  const data = {
    nama: "Mamang",
    usia: 24,
  };
  res.end(JSON.stringify(data));
}

http.createServer(onRequest).listen(3000);
console.log("Server JSON Statis listening on 3000..");
