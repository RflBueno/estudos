const { error } = require('console');
let users = require('../mocks/users');

module.exports = {
    listUsers(req, res) {
        // console.log(req.query);
        const{ order } = req.query;

        const sourtedUsers = users.sort((a, b) => {
            if(order === 'desc') {
                return a.id < b.id ? 1 : -1;
            }
            return a.id > b.id ? 1 : -1;
        }
        );
        res.send(200, sourtedUsers);
    },

    getUserById(req, res) {
        const { id } = req.params;
        const user = users.find((user) => user.id === Number(id));

        if (!user) {
            return res.send(400, { error: 'User not found' });
        }

        res.send(200, user);
    },

    createUser(req, res) {
        const { body } = req;
        const lastUserId = users[users.length - 1].id;
        const newUser = {
            id: lastUserId + 1,
            name: body.name,
        };
        users.push(newUser);

        res.send(200, { newUser });
    },

    updateUser(req, res) {
        let { id } = req.params;
        const { name } = req.body;

        id = Number(id);
        const userExists = users.find((user) => user.id === id);


        if (!userExists) {
            return res.send(400, { error: 'User not found' });
        }


        users = users.map((user) => {
            if (user.id === id) {
                return { ...user, name };
            }
            return user;
        });

        res.send(200, { id, name });
    },

    deleteUser(req, res) {
        let { id } = req.params;

        id = Number(id);

        users = users.filter((user) => user.id !== id);

        res.send(200, { deleted: true });
    },
};