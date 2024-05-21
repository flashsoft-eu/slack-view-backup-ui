<script lang="ts">
    import Alert from '$lib/components/Alert.svelte';
    import { goto } from '$app/navigation';
    import { setCookie } from '$lib/utils/misc';
    import Logo from '$lib/components/Logo.svelte';

    
    let password = '';
    let alert: Alert | null = null;
    
    const login = async () => {
      const res = await fetch('/login/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          password
        })
      });
      if(res.ok) {
        const data = await res.json();
        const hash = data.hash;
        setCookie('hash', hash, 90);
        goto('/')
      } else {
        (alert as unknown as {showError: (m: string) => void })?.showError('Wrong username or password');
      }
    
    }
    
    </script>
    
    <div class="flex h-screen w-full items-center justify-center bg-cover bg-no-repeat">
        <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div class="text-white">
            <div class="mb-8 flex flex-col items-center">
              <Logo class="w-10 mb-4" />
              <span class="text-gray-300">Login</span>
            </div>
            <form action="#">
              <Alert bind:this={alert} />
              <div class="mb-4 text-lg flex justify-center">
                <input  bind:value={password} class="rounded-3xl border-none bg-opacity-50 px-6 py-2 text-center placeholder-slate-200 shadow-lg outline-none backdrop-blur-md text-yellow-100" type="Password" name="name" placeholder="*********" />
              </div>
              <div class="mt-8 flex justify-center text-lg text-black">
                <button on:click|preventDefault={login} type="submit" class="rounded-3xl bg-red-900 bg-opacity-80 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-red-700">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>