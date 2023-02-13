<script lang="ts">
	import type { Sack } from '$lib/models/sack';
	export let sacks: Sack[] = [];

	import SackCard from './SackCard.svelte';
</script>

<div>
	<h1>Sacks!</h1>

	<div class="sacktable">
		{#each sacks as sack (sack.id)}
			<SackCard {sack} />
		{/each}
	</div>
</div>

<style>
	.sacktable {
		display: flex;
		flex-wrap: wrap;
        text-align: center;
	}
</style>
