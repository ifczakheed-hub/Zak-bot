import http from "http";
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("ZAKBOT is running");
});
server.listen(process.env.PORT || 10000, () => {
  console.log("Port listening on", process.env.PORT || 10000);
});
