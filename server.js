const http = require("http");
let users = [
    {id: 1, name: "xiaoming"},
    {id: 2, name: "xiaohong"},
    {id: 31, name: "xiaozhang"},
];

const server = http.createServer(function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url === "/api/users") {
        res.end(JSON.stringify(users));
    } else {
        res.end("Not Found");
    }
});

server.listen(8080, function() {
    console.log("server is start, listen port 8080");
});