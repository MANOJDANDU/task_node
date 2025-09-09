const axios = require('axios');
const { ERRORS } = require('../../helpers/constants');

class UserBA {
    async getTaskList(params) {
        try {
            const response = await axios.get(process.env.API_URL, { params }); 
            return response.data;
        } catch (error) {
            throw new Error(ERRORS.FETCH_TASKS);
        }
    }
}

module.exports = new UserBA();