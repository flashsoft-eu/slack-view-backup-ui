<script lang="ts">
import { getUser } from '$lib/utils/relations';

import type { LoadData } from '$lib/types/types';
    
export let data: {
        data: LoadData | null
    } = {
        data: null
    }

    export let first_im = false
    export let first_mpim = false 
    export let first_channel = false
    
 
 
// console.log(data.data?.firstChannel);
console.log(getUser(data.data?.users?.[0]?.id as string, data.data?.users as any));

</script>


<ul class="menu w-60 rounded-box menu-custom">
    {#if data.data?.channels?.length}
    {#each data.data?.channels as item}
        <li>
       <a href="{`/channel/${item.id}`}" class="block p-4 hover:bg-gray-700 hover:text-white">
       <span class="block mt-4 text-[1rem]">
       {#if !item?.is_im && !item?.is_mpim }
       {#if !first_channel && (() => {first_channel = true; return true})()}
       <span class="block opacity-60 text-[0.8rem] -mt-1 ml-2">Channels:</span>
       <li class="-ml-12 block"></li>
       {/if}
        <i><b>#</b></i>{item.name}
        {:else if item?.is_im}
        {#if !first_im}
        <span class="block opacity-60 text-[0.8rem] -mt-1 ml-2">Direct Messages:</span>
        <li class="-ml-12 block"></li>
        {(() => {first_im = true})()}
        {/if}
        {@const user = getUser(item.user, data.data?.users)}
        DM: {user?.name} <img src={user?.profile?.image_24} alt="user avatar" class="inline-block w-4 h-4 rounded-full" /> 
        {:else if item?.is_mpim}
        {#if !first_mpim}
        <span class="block opacity-60 text-[0.8rem] -mt-1 ml-2">Groups:</span>
        <li class="-ml-12 block"></li>
        {(() => {first_mpim = true; console.log(item)})()}
        {/if}
        {item.purpose.value}
        
        {/if}
        </span>
            <span class="block opacity-60 text-[0.8rem] -mt-1 ml-2">id: {item.id}</span>
        </a>
        </li>
    {/each}
    {:else}
    <li>No channels found</li>
    <li>Be sure data folder is not empty</li>
    {/if} 
</ul>

<style lang="scss">
    .menu-custom {

        :where(.menu li:empty) {
    background-color: hsl(var(--bc)/.1);
    margin: 0.5rem -1rem;
    height: 1px;
}

        height: 100vh;
    overflow-y: scroll;
    display: block;
    min-width: 12rem;
    background-color: #0e0d12c7;
        scrollbar-width: thin;
        &::-webkit-scrollbar {
            width: 4px;
        }
        &::-webkit-scrollbar-track {
        background: #2e2e2e;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
        background: #888;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
        background: #555;
        }
    }
</style>