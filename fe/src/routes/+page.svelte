<script lang="ts">
    import Sacks from '../lib/components/Sacks.svelte';
    import VegetablePile from '../lib/components/VegetablePile.svelte';

    import { potatoes, sacks, carrots } from '../store'; 
</script>

<div>
    <VegetablePile potatoes={$potatoes} carrots={$carrots} />
    <Sacks sacks={$sacks}/>
</div>

<style>
    div {
        display: flex;
    }
</style>