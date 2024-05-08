<script lang="ts">
import { getUser } from '$lib/utils/relations';

import type { LoadData } from '$lib/types/types';
    
export let data: {
        data: LoadData | null
    } = {
        data: null
    }
   
    const channels = data.data?.channels.filter((channel) => !channel.is_im && !channel.is_mpim) as LoadData['channels']
    const ims = data.data?.channels.filter((channel) => channel.is_im) as LoadData['channels']
    const mpims = data.data?.channels.filter((channel) => channel.is_mpim) as LoadData['channels']
    
 
 
// console.log(data.data?.firstChannel);
console.log(getUser(data.data?.users?.[0]?.id as string, data.data?.users as any));

</script>


<!-- 
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
{item.purpose.value} -->


<ul class="menu w-60 rounded-box menu-custom">
    {#if channels?.length}
    <span class="block opacity-60 text-[0.8rem] -mt-1 ml-2">Channels:</span>
    <li class="-ml-12 block"></li>
    {#each channels as item}
        <li>
       <a href="{`/channel/${item.id}`}" class="block p-4 hover:bg-gray-700 hover:text-white">
       <span class="block mt-2 text-[1rem]">
       <i><b>#</b></i>{item.name}
        </span>
            <span class="block opacity-60 text-[0.8rem] -mt-1 ml-2">id: {item.id}</span>
        </a>
        </li>
    {/each}
    {/if}
    {#if ims?.length}
    <span class="block opacity-60 text-[0.8rem] mt-6 ml-2">Direct Messages:</span>
    <li class="-ml-12 block"></li>
    {#each ims as item}
    {@const user = getUser(item.user, data.data?.users || [])}

        <li>
       <a href="{`/channel/${item.id}`}" class="block p-4 hover:bg-gray-700 hover:text-white">
       <span class="block mt-2 text-[1rem]">
        DM: {user?.name} <img src={user?.profile?.image_24} alt="user avatar" class="inline-block w-4 h-4 rounded-full" /> 
        </span>
            <span class="block opacity-60 text-[0.8rem] -mt-1 ml-2">id: {item.id}</span>
        </a>
        </li>
    {/each}
    {/if}
    {#if mpims?.length}
    <span class="block opacity-60 text-[0.8rem] -mt-1 ml-2">Groups:</span>
    <li class="-ml-12 block"></li>
    {#each mpims as item}
        <li>
       <a href="{`/channel/${item.id}`}" class="block p-4 hover:bg-gray-700 hover:text-white">
       <span class="block mt-2 text-[1rem]">
        {item.purpose.value}
        </span>
            <span class="block opacity-60 text-[0.8rem] -mt-1 ml-2">id: {item.id}</span>
        </a>
        </li>
    {/each}
    {/if}


    {#if  !channels?.length && !mpims?.length && ims?.length}
    <li>No data found</li>
    <li>Check that <b>src/data</b> has the correct jsons files</li>
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
    overflow-x: hidden;
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