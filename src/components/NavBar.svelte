<script>
	import HamburgerMenu from './HamburgerMenu.svelte';
</script>

<nav>
	<a href="#home" class="logo">
		<img src="/favicon.png" alt="Logo" />
		Fabian Friedrich
	</a>
	<ul class="list">
		<li><a href="#home">Home</a></li>
		<li><a href="#education">Education</a></li>
		<li><a href="#projects">Projects</a></li>
		<li><a href="#contact">Contact</a></li>
	</ul>
	<HamburgerMenu />
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;

		position: fixed;
		z-index: 99;

		height: 3rem;
		width: 100%;
		padding: 0 1rem;
		background-color: var(--background-color);

		box-shadow: 0 6px 4px rgba(0, 0, 0, 0.25);
	}

	a {
		font-weight: bold;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		height: 100%;
		white-space: nowrap;
	}

	.logo:hover {
		color: var(--text-color);
	}

	.logo img {
		height: 70%;
		border-radius: 10px;
	}

	.list {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 3rem;

		height: 100%;

		list-style: none;
	}

	@media (max-width: 1000px) {
		.list {
			display: none;
		}
	}
</style>
