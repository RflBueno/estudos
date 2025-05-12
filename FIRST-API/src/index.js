const http = require('http');
const { URL } = require('url');
const bodyParser = require('./helpers/bodyParser');
const routes = require('./routes');

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://localhost:3000${req.url}`);

    console.log(`Request method: ${req.method} | Endpoint: ${parsedUrl.pathname}`);




    let { pathname } = parsedUrl;
    let id = null;

    const splitEndPoint = pathname.split('/').filter(Boolean);

    if (splitEndPoint.length > 1) {
        pathname = `/${splitEndPoint[0]}/:id`;
        id = splitEndPoint[1];
    }
    

    const route = routes.find((routeObj) => {
        return routeObj.endpoint === pathname && routeObj.method === req.method;
    });

    if (route) {
        req.query = Object.fromEntries(parsedUrl.searchParams);
        req.params = { id };

        res.send = (statusCode, body) => {
            res.writeHead(statusCode, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(body));
        }

        if(['POST', 'PUT', 'PATCH'].includes(req.method)) {
            bodyParser(req, () => route.handler(req, res));
        }else {
            route.handler(req, res);
        }
    }else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(JSON.stringify( `Cannot ${req.method} ${parsedUrl.pathname}` ));
    }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}
);