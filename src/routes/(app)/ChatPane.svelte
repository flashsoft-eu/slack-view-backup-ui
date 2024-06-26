<script lang="ts">
    import { getUser } from '$lib/utils/relations';
    import type { LoadData } from '$lib/types/types';
    import { page as SvelteKitPage } from '$app/stores';  
    import IntersectionObserver from './components/util/IntersectionObserver.svelte';
    let element: HTMLElement | null = null
    export let data: {
        data: LoadData | null
    } = {
        data: null
    }
    
    let offset = 0
    let isThread = data.data?.is_thread
    let messages = data.data?.messages || []
    let hasMore = true
    const host =  $SvelteKitPage.url.host
    const isDev = host.includes('localhost') || host.includes('127.0')
    const protocol = isDev ? 'http://' : 'https://'
    const loadMoreUrl = protocol + host + '/api/channel/' + data.data?.channel_id
 
    let loading = false
    const loadNext = async () => {
        console.log('loading next')
        if (loading  || !hasMore ) return
        loading = true
        const req = await fetch(loadMoreUrl + `?offset=${offset}&limit=20`)
        console.log(req.ok)
        const posts = await req.json()
        messages = [...messages, ...posts.data]
        loading = false
    }

    const isoStringFromTs = (ts: string) => {
        const date = new Date(parseInt(ts) * 1000)
        return date.toISOString()
    }
    
    </script>
    <div class="flex items-center justify-start flex-col w-full">
    {#if !isThread}
    <h2 class="text-[1.12rem] mr-auto pl-6 bar">Channel: {data.data?.channel_id}</h2>
    {:else}
    <h2 class="text-[1.12rem] mr-auto pl-6 bar">Thread: <a href="{`/channel/${data.data?.channel_id}`}" class="ml-4 btn btn-sm">Back to Channel</a></h2>
    {/if}
    <ul class="chat-pane w-full">
        {#if messages?.length && data.data?.users?.length}
        {#each messages as item}
        {@const user = getUser(item.user, data.data?.users)}

            <li> 
                <div class="card ml-10 mr-10 my-2 shadow-xl bg-zinc-900">
                    <div class="card-body">
                        <div class="card-title flex items-center">
                      <h2 class="font-bold"><img src={user?.profile?.image_48 ?? user?.profile_image_48 } alt="user avatar" class="inline-block w-8 h-8 rounded-full" /> <span class="ml-1">{user?.name}</span> </h2>
                      <p class="opacity-90 ml-0 text-start text-[0.85rem]">{isoStringFromTs(item.ts)}</p>
                      </div>
                      <p class="my-2 ml-4 text-[1.05rem]">{item.text}</p>
                      
                      <div class="card-actions justify-start">
                        {#if item?.reply_count > 0 && !isThread}
                        <a href="{`/thread/${data.data?.channel_id}/${item?.thread_ts}`}" class="btn btn-neutral btn-sm"> ↳ View Thread</a>
                        {/if}
                      </div>
                    </div>
                  </div>
        {/each}
        {#if loading} 
                <p class="text-[1.2rem]">LOADING...</p>
        {/if}
        <IntersectionObserver on:intersect={loadNext} {element}>
            <div bind:this={element}>ssssssssssssssss</div>
          </IntersectionObserver>
        {:else}
        <li class="ml-4">No messages found</li>
        {/if} 
    </ul>
    </div>
    
    <style lang="scss">
        .bar {
            padding: 0.3rem;
            background-color: rgba(14, 13, 18, 0.7803921569);
            width: 100%;
            padding-left: 2rem;
        }

        .chat-pane {
            height: 100vh;
            overflow-y: scroll;
            display: block;
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