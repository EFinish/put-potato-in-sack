<script lang="ts">
	import type { Potato } from '$lib/models/potato';
	export let potato: Potato;

	import potatoImage from "$lib/assets/images/potato.png"
</script>

<div class="potatocard">
    <img alt="a potato" src={potatoImage} >
    <div>{potato.name} - {potato.weight} kg</div>
</div>

<style>
	img {
		height: 10em;
	}
	.potatocard {
		padding: 2em;
	}
</style>
