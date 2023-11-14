import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { useLocalStorage } from '@vueuse/core';
import { useApi } from '../composables/useApi';

export const useAuth = defineStore('authStore', () => {
	const user = ref({});
	const token = ref(null);
	const api = useApi();

	const isLoggedIn = computed(() => (token.value && user.value ? true : false));

	const setUser = (payload) => {
		user.value = payload;
	};

	const setToken = (payload) => {
		token.value = payload;
	};

	const getUser = async () => {
		// /api/processregistration
		try {
			await axios
				.get(`/getinfo?id=${user.value.id}&email=${user.value.email}`)
				.then((res) => {
					// console.log(res.data.data)
					setUser(res.data.data);
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (error) {
			console.log(error);
		}
	};

	const loginUser = async (payload) => {
		// /api/login
		const { username, password } = payload;
		try {
			let data = await api.post('/auth/login', {
				username,
				password,
			});
			return data;
		} catch (error) {
			return error;
		}
	};

	const switchCountry = async (payload) => {
		// /api/login
		const { id } = payload;
		const config = {
			headers: { Authorization: `Bearer ${token.value}` },
		};
		try {
			let data = await api.post(
				'/user/switch-country',
				{
					id,
				},
				config
			);
			return data;
		} catch (error) {
			return error;
		}
	};

	return {
		isLoggedIn,
		setUser,
		setToken,
		user,
		token,
		loginUser,
		getUser,
		switchCountry,
	};
});
