const http = require("http");
const fs = require("fs");
const host = "localhost";
const port = 9000;
const categoryJson = fs.readFileSync("category.json", "utf8");
const requestListener = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end(categoryJson);
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`category Server is running on http://${host}:${port}`);
});
