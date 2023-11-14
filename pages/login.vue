<script setup>
	import { ref, onMounted } from 'vue';

	const authStore = useAuth();
	const snackbar = useSnackbar();
	const router = useRouter();

	const login = (credentials) => {
		const res = authStore.loginUser(credentials);
		console.log(credentials);
		res
			.then((res) => {
				console.log(res);
				if (res.data.success) {
					authStore.setUser(res.data.user);
					authStore.setToken(res.data.token);
					snackbar.add({
						type: 'success',
						text: 'Login successful',
					});
					router.push('/');
				} else {
					snackbar.add({
						type: 'error',
						text: res.data.errors[0].message,
					});
				}
			})
			.catch((err) => console.log(err));
	};
</script>
<template>
	<section class="py-20">
		<div class="container">
			<div class="max-w-3xl mx-auto">
				<div class="card border bg-base-100 shadow-xl">
					<div class="card-body">
						<h2 class="card-title mb-5">Login</h2>
						<FormKit
							type="form"
							submit-label="Login"
							@submit="login"
							method="post"
						>
							<FormKit
								label="Username/Email"
								type="text"
								validation="required|length:5"
								name="username"
							/>
							<FormKit
								label="Password"
								type="password"
								validation="required|length:5"
								name="password"
							/>
						</FormKit>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style>
	button,
	[type='button'],
	[type='reset'],
	[type='submit'] {
		-webkit-appearance: button;
		background-color: red;
		background-image: none;
	}
</style>
