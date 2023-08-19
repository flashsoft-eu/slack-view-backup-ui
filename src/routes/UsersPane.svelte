<script lang="ts">    
    import type { LoadData, User } from '$lib/types/types';
        
    export let data: {
            data: LoadData | null
        } = {
            data: null
        }
    
     const users = data.data?.users as User[]
        
     
     
    // console.log(data.data?.firstChannel);
    // console.log(getUser(data.data?.users?.[0]?.id, data.data?.users));
    
    </script>
     <div class="users grid lg:grid-cols-3	md:grid-cols-2 sm:grid-cols-1 gap-3">
    {#each users as user}
    <li> 
        <div class="user card ml-10 mr-10 my-2 bg-base-100 shadow-xl">
            <div class="card-body">
                <div class="card-title flex items-center">
              <h2 class="font-bold"><img src={user.profile?.image_192} alt="user avatar" class="inline-block w-8 h-8 rounded-full" /> <span class="ml-1">{user?.name}</span> </h2>
              </div>
              <p class="text-[1.1rem] px-2 pt-2 pb-1">Flags:</p>
             <ul>
                <li>Is Deleted: <b>{user.deleted ?? 'false'}</b></li>
                <li>Is Admin: <b>{user.is_admin ?? 'false'}</b></li>
                <li>Is Owner: <b>{user.is_owner ?? 'false'}</b></li>
                <li>Is Primary Owner: <b>{user?.is_primary_owner ?? 'false'}</li>
                <li>Is Restricted <b>{user?.is_restricted ?? 'false'}</b></li>
                <li>Is Ultra Restricted <b>{user?.is_ultra_restricted ?? 'false'}</b></li>
                <li>Is Bot: <b>{user?.is_bot ?? 'false'}</b></li>
                <li>Is App User: <b>{user?.is_app_user ?? 'false'}</b></li>
                <li>Is Email Confirmed: <b>{user?.is_email_confirmed ?? 'false'}</b></li>
             </ul>
             <p class="text-[1.1rem] px-2 pt-2 pb-1">Profile:</p>
             <ul>
                <li>Email: <b>{user.profile.email}</b></li>
                <li>First Name: <b>{user.profile.first_name}</b></li>
                <li>Last Name: <b>{user.profile.last_name}</b></li>
                <li>Avatar Hash: <b>{user.profile.avatar_hash}</b></li>
                {#if user.profile.phone}
                <li>Phone: <b>{user.profile.phone}</b></li>
                {/if}


 
             </ul>
            
            </div>
          </div>
    {/each}
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
