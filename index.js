import http from "http";
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("ZAKBOT is running");
});
server.listen(process.env.PORT || 10000, () => {
  console.log("Port listening on", process.env.PORT || 10000);
7cf98ded2e3109d99740797afb990e1b139c21dc
});
