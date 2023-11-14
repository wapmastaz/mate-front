<script setup>
import { computed } from 'vue'
const props = defineProps({
  product: {
  }
})

const price = computed(() => (props.product) ? props.product.price.toFixed(2) : 0)

</script>

<template>
	<div class="card card-compact border w-full bg-base-100 shadow-xl">
		<figure>
			<img
				src="/img/def.png"
				alt="Shoes"
				class="w-32"
			/>
		</figure>
		<div class="card-body">
			<h2 class="card-title">{{ props.product.name }}</h2>
			<p class="text-xl font-bold text-secondary">{{ props.product.price }}</p>
			<div class="card-actions justify-end">
				<button class="btn btn-primary">Buy Now</button>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
