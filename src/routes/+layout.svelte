<script>
	import NavBar from './NavBar.svelte';
</script>

<NavBar />
<slot />

<style>
	:root {
		--background-color: #1b1c2a;
		--secondary-background-color: #312e54;
		--text-color: #cdd0f5;
		--primary-color: #eee066;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		font: inherit;
	}

	:global(*),
	:global(*)::before,
	:global(*)::after {
		box-sizing: border-box;
	}

	:global(img),
	:global(picture),
	:global(video),
	:global(canvas),
	:global(svg) {
		display: block;
		max-width: 100%;
	}

	:global(a) {
		color: var(--text-color);
		text-decoration: none;
	}

	:global(a):hover {
		color: var(--primary-color);
	}
</style>
