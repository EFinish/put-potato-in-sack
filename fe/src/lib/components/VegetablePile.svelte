<script lang="ts">
	import type { Potato } from '$lib/models/potato';
	export let potatoes: Potato[] = [];

	import potatoImage from "$lib/assets/images/potato.png"
</script>

<h1>Vegetable Pile!</h1>

{#each potatoes as potato (potato.id)}
	<div>
		<img alt="a potato" src={potatoImage} >
		<div>{potato.name}</div>
		<div>{potato.weight}</div>
	</div>
{/each}
