const UserService = require('../../../application/services/UserService');

class UserController {
    //creacion de servicio que lista los usuarios
    static async fetchUsers(req, res) {
        try {
            const users = await UserService.fetchUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    //creacion de servicio que busca un usuario en especifico.
    static async getUserById(req, res) {
        try {
            const user = await UserService.getUserById(req.params.id);
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = UserController;