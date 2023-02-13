<script lang="ts">
	import type { Carrot } from '$lib/models/carrot';
	import type { Potato } from '$lib/models/potato';
	import PotatoCard from './PotatoCard.svelte';
	import CarrotCard from './CarrotCard.svelte';

	export let potatoes: Potato[] = [];
	export let carrots: Carrot[] = [];
</script>

<div>
	<h1>Vegetable Pile!</h1>

	<div class="vegetable-table">
		{#each potatoes as potato (potato.id)}
			<PotatoCard {potato} />
		{/each}
	</div>
	<div class="vegetable-table">
		{#each carrots as carrot (carrot.id)}
			<CarrotCard {carrot} />
		{/each}
	</div>
</div>

<style>
	.vegetable-table {
		display: flex;
		flex-wrap: wrap;
		text-align: center;
	}
</style>
