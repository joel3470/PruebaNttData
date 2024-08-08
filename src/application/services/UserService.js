const axios = require('axios'); //para llamar api
const User = require('../../domain/models/User');

class UserService {
    //llamada al API que va generar el listado de personas
    static async fetchUsers() {
        try {
            const response = await axios.get('https://randomuser.me/api/?results=10');
            return response.data.results.map(user => User.fromApiResponse(user));
        } catch (error) {
            throw new Error('Error fetching users');
        }
    }


    static async getUserById(id) {
        try {
            const response = await axios.get(`https://randomuser.me/api/?seed=${id}&results=1`);
            return User.fromApiResponse(response.data.results[0]);
        } catch (error) {
            throw new Error('Error fetching user by ID');
        }
    }
}

module.exports = UserService;