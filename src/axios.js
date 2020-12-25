import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://tinder-backend-sk5.herokuapp.com',
});

export default instance;