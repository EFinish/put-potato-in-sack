<script lang="ts">
	import type { Sack } from '$lib/models/sack';
	export let sack: Sack;

	import sackImage from "$lib/assets/images/sack.png"
</script>

<div class="sack">
    <img alt="a potato" src={sackImage} >
    <div>{sack.name}</div>
</div>

<style>
	img {
		height: 20em;
	}
	.sack {
		padding: 2em;
	}
</style>
