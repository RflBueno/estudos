const http = require("http");

const routes = require("./routes");

const server = http.createServer((req, res) => {
    console.log(`Request method: ${req.method} | Endpoint: ${req.url}`);

    const route = routes.find((routeObj) => {
        return routeObj.endpoint === req.url && routeObj.method === req.method;
    });

    if (route) {
        route.handler(req, res);
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`Cannot ${req.method} ${req.url}`);
    }

    // if (req.url === "/users" && req.method === "GET") {
    //     // res.writeHead(200, { "Content-Type": "aplication/json" });
    //     // res.end(JSON.stringify(users));
    //     UserController.listUsers(req, res);
    // } else {
    //     res.writeHead(404, { "Content-Type": "text/html" });
    //     res.end(`Cannot ${req.method} ${req.url}`);
    // }
});

server.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
});
