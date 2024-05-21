<script>
	import github from '$lib/images/github.svg';
	import Logo from '$lib/components/Logo.svelte';
</script>

<header>


	<div class="navbar bg-zinc-900/90">
		<div class="navbar-start">
		  <div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52" style="background-color: #000;">
			  <li class="pt-2"><a href="/users">Users</a></li>
			  <li  class="pt-2"><a href="/team">Team Info</a></li>
			</ul>
		  </div>
		  <div class="ml-4 flex">
		  <Logo class="w-6" />
		  <a href="/" class="btn btn-ghost normal-case text-xl">Slack-Backup-UI</a>
		</div>
		</div>
		<div class="navbar-center hidden lg:flex">
		  <ul class="menu menu-horizontal px-1">
			<li><a  href="/users">Users</a></li>
			<li><a  href="/team">Team Info</a></li>
		  </ul>
		</div>
		<div class="navbar-end">
		  <a rel="external" href="https://github.com/flashsoft-eu/slack-view-backup-ui" class="btn btn-neutral flex w-36"><span>Source</span><img style="filter: invert(0.6) sepia(0.1) saturate(3) hue-rotate(133deg);" class="h-8" src={github} alt="GitHub" /></a>
		</div>
	  </div>

</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
