<script lang="ts">
	import type { Carrot } from '$lib/models/carrot';
	export let carrot: Carrot;

	import carrotImage from "$lib/assets/images/carrot.png"
</script>

<div class="carrotcard">
    <img alt="a carrot" src={carrotImage} >
    <div>{carrot.name} - {carrot.weight} kg</div>
</div>

<style>
	img {
		height: 10em;
	}
	.carrotcard {
		padding: 2em;
	}
</style>
