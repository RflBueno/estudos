const users = require("../mocks/users");

module.exports = {
    listUsers(request, response) {
        response.writeHead(200, { "Content-type": "application/json" });
        response.end(JSON.stringify(users));
    },
};
