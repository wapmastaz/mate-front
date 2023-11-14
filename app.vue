<script setup>
	import '@/assets/css/main.css';
	const route = useRoute();
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
	.swiper-button-prev:after,
	.swiper-button-next:after {
		font-size: 30px !important;
		color: #111;
	}
	.page-enter-active,
	.page-leave-active {
		transition: all 0.4s;
	}
	.page-enter-from,
	.page-leave-to {
		opacity: 0;
		filter: blur(1rem);
	}

	/* ... */
	.rotate-enter-active,
	.rotate-leave-active {
		transition: all 0.6s;
	}
	.rotate-enter-from,
	.rotate-leave-to {
		opacity: 0;
		transform: rotate3d(1, 1, 1, 15deg);
	}

	/*
  Enter and leave animations can use different
  durations and timing functions.
*/
	.slide-fade-left-enter-active {
		transition: all 0.2s ease-out;
	}

	.slide-fade-left-leave-active {
		transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
	}

	.slide-fade-left-enter-from,
	.slide-fade-left-leave-to {
		transform: translateX(-20px);
		opacity: 0;
	}

	.slide-fade-right-enter-active {
		transition: all 0.2s ease-out;
	}

	.slide-fade-right-leave-active {
		transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
	}

	.slide-fade-right-enter-from,
	.slide-fade-right-leave-to {
		transform: translateY(20px);
		opacity: 0;
	}
</style>
