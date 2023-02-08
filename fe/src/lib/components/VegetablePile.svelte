<script lang="ts">
	import type { Potato } from '$lib/models/potato';
	export let potatoes: Potato[] = [];

    let src = `${process.env.PUBLIC_URL}/potato.png`
</script>

<h1>Vegetable Pile!</h1>

{#each potatoes as potato (potato.id)}
	<div>
		<img alt="a potato" {src} >
		<div>{potato.name}</div>
		<div>{potato.weight}</div>
	</div>
{/each}
