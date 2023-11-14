<script setup>
	import { ref } from 'vue';

	const authStore = useAuth()

	const navItems = ref([
		{ name: 'Home', to: '/' },
		{ name: 'Products', to: '/products' },
	]);

	const openNav = ref(false);
	const api = useApi();

	onMounted(() => {

	});


</script>

<template>
	<header class="navbar bg-base-100">
		<div class="container mx-auto px-4">
			<div class="navbar-start">
				<nuxt-link to="/"> LOGO </nuxt-link>
			</div>
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal px-1">
					<li
						v-for="(navItem, i) in navItems"
						:key="i"
					>
						<nuxt-link
							class="rounded-none px-4 text-dark/90 text-sm font-semibold"
							:to="navItem.to"
							>{{ navItem.name }}</nuxt-link
						>
					</li>
					
				</ul>
			</div>
			<div class="navbar-end flex">
				<nuxt-link v-if="!authStore.isLoggedIn"
					to="/login"
					class="btn btn-sm btn-primary px-10 rounded-3xl capitalize h-10 hidden lg:inline-flex"
					>Login</nuxt-link
				>
				<button v-else
					class="btn btn-sm btn-secondary px-10 rounded-3xl capitalize h-10 hidden lg:inline-flex"
					>Logout</button>
				<div class="drawer flex justify-end sm:hidden">
					<!-- <input
						id="my-drawer-2"
						type="checkbox"
						class="drawer-toggle"
					/> -->
					<div class="drawer-content flex flex-col items-center justify-center">
						<!-- Page content here -->
						<label
							@click="openNav = !openNav"
							for="my-drawer-2"
							class="btn !p-2 bg-white drawer-button lg:hidden"
						>
							<Icon
								name="fa:bars"
								class="text-dark"
								size="1.8rem"
							/>
						</label>
					</div>
					<transition
						name="slide-fade-left"
						mode="out-in"
					>
						<div
							class="drawer-side"
							v-if="openNav"
						>
							<label
								for="my-drawer-2"
								aria-label="close sidebar"
								class="drawer-overlay"
							></label>
							<ul
								class="menu p-4 w-80 min-h-full bg-base-200 text-base-content"
							>
								<!-- Sidebar content here -->
								<li
									class="py-2"
									v-for="(navItem, i) in navItems"
									:key="i"
								>
									<nuxt-link
										class="rounded-none flex w-full px-4 text-dark/90 text-sm font-semibold"
										:to="navItem.to"
										>{{ navItem.name }}</nuxt-link
									>
								</li>
							</ul>
						</div>
					</transition>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped>
	.router-link-exact-active {
		border-bottom: 2px solid #6ba612;
	}

	.drawer-side > *:not(.drawer-overlay) {
		transition-property: color, background-color, border-color,
			text-decoration-color, fill, stroke, opacity, box-shadow, transform,
			filter, -webkit-backdrop-filter;
		transition-property: color, background-color, border-color,
			text-decoration-color, fill, stroke, opacity, box-shadow, transform,
			filter, backdrop-filter;
		transition-property: color, background-color, border-color,
			text-decoration-color, fill, stroke, opacity, box-shadow, transform,
			filter, backdrop-filter, -webkit-backdrop-filter;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
		transition-duration: 300ms;
		transform: translateX(0%);
	}

	.drawer-side > .drawer-overlay {
		background-color: hsl(0 0% 0%/0.4);
	}
</style>
