import axios from 'axios';
import {useAuth} from '../stores/auth.js'



export const useApi = () => {
  
  const authStore = useAuth()
	const baseURL = 'http://mate-africa.test/api/v1/';

	return axios.create({
		baseURL,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			Accept: 'application/json',
		},
	});
};
