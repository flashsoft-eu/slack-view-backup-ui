<script lang="ts">
	import TeamPane from '../TeamPane.svelte';
    import type { LoadData } from '$lib/types/types';
 
	export let data: {
		data: LoadData | null;
	} = {
		data: null
	};
 
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />   
</svelte:head>
 
 {#key  data.data?.team?.id}
    {#if data.data?.team}
    <TeamPane data={data} />
    {:else}
        <h1 class="text-2xl font-bold">Loading...</h1>
    {/if}
    
 {/key}


<style>
</style>
