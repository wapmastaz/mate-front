<script setup>
	import { ref, onMounted } from 'vue';
	const api = useApi();
	const products = ref([]);
	const authStore = useAuth();
	const countries = ref([]);
	const isLoading = ref(false);

	definePageMeta({
		middleware: [
			function (to, from) {
				const authStore = useAuth();
				if (!authStore.isLoggedIn) {
					return navigateTo('/login');
				}
			},
			// Add in more middleware here
		],
	});

	onMounted(() => {
		getProducts();
		getCountries();
	});

	const getProducts = async () => {
		isLoading.value = true;
		const config = {
			headers: { Authorization: `Bearer ${authStore.token}` },
		};
		try {
			await api
				.get(`/product/all`, config)
				.then((res) => {
					isLoading.value = false;
					console.log(res);
					if (res.data) {
						products.value = res.data;
					}
				})
				.catch((err) => {
					console.log(err);
					isLoading.value = false;
				});
		} catch (error) {
			console.log(error);
		}
	};

	const getCountries = async () => {
		try {
			await api
				.get(`/country/all`)
				.then((res) => {
					console.log(res);
					if (res.data) {
						countries.value = res.data;
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (error) {
			console.log(error);
		}
	};

	const setCountry = (id) => {
		authStore
			.switchCountry({ id })
			.then((res) => {
				if (res.data.success) {
					getProducts();
				}
			})
			.catch((err) => console.log(err));
	};
</script>
<template>
	<section class="hero min-h-[70vh] bg-base-200">
		<div class="hero-content flex-col lg:flex-row-reverse">
			<img
				src="/img/hero-slider/1.jpg"
				class="max-w-sm rounded-lg shadow-2xl"
			/>
			<div>
				<h1 class="text-5xl font-bold">
					Sell your digital products to a global audience, fast!
				</h1>
				<p class="py-6">
					Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
					excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
					id nisi.
				</p>
				<button class="btn btn-primary">Get Started</button>
			</div>
		</div>
	</section>

	<section class="py-20">
		<div class="container">
			<div class="flex justify-between">
				<h2 class="mb-6 text-3xl text-secondary font-semibold">Products</h2>
				<div class="dropdown">
					<label
						tabindex="0"
						class="btn m-1"
						>Change Country</label
					>
					<ul
						tabindex="0"
						class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li
							v-for="country in countries"
							:key="country.id"
						>
							<a
								href="javascript:void(0)"
								@click="setCountry(country.id)"
								>{{ country.name }}</a
							>
						</li>
					</ul>
				</div>
			</div>

			<div v-if="isLoading">loading...</div>
			<div v-else>
				<div
					class="grid grid-cols-2 sm:grid-cols-5 gap-4"
					v-if="products"
				>
					<ProductCard
						v-for="product in products"
						:key="product.id"
						:product="product"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
