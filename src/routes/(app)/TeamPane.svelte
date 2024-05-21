<script lang="ts">    
    import type { LoadData, Team } from '$lib/types/types';
        
    export let data: {
            data: LoadData | null
        } = {
            data: null
        }
    
     const team = data.data?.team as Team
        
    
    </script>
     <div class="users flex flex-col">
        <h2 class="ml-7 text-[1.1rem]">Team Info</h2>
        <div class="user card ml-10 mr-10 my-2 bg-base-100 shadow-xl">
            <div class="card-body">
                <div class="card-title flex items-center">
              <h2 class="font-bold"><img src={team?.icon?.image_230 ?? team?.icon_image_230} alt="user avatar" class="inline-block w-8 h-8 rounded-full" /> <span class="ml-1">{team?.name}</span> </h2>
              </div>
              <p class="text-[1.1rem] px-2 pt-2 pb-1">Data:</p>
             <ul>
                <li>ID: <b>{team.id ?? 'false'}</b></li>
                <li>Is Verified: <b>{team.is_verified ?? 'false'}</b></li>
                <li>Domain: <b>{team.domain ?? 'N/A'}</b></li>
                <li>Email Domain: <b>{team.email_domain ?? 'N/A'}</b></li>
                <li>URL: <b>{team.url ?? 'NA'}</b></li>
             </ul>           
            </div>
          </div>
 
</div>

<style lang="scss">
    .user {
        background-color: #f5f5f53f;
        word-break: break-all;
        
        li::marker {
        content: ' ✨ ';
        font-size: 0.8rem;
        }
    }

    .users li::marker {
        content: '';
    }

</style>
