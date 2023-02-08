<script lang="ts">
    import Sacks from '../lib/components/Sacks.svelte';
    import VegetablePile from '../lib/components/VegetablePile.svelte';

    import { potatoes } from '../store'; 
</script>

<VegetablePile potatoes={$potatoes} />
<Sacks />

<div class="px-2 sm:px-4 py-2.5 w-full">
    <div class="mx-auto container">
        <slot />
    </div>
</div>
