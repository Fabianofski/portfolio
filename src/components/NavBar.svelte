<script>
	import HamburgerMenu from './HamburgerMenu.svelte';
</script>

<div class="container">
    <div class="grid">
        <nav>
            <a href="#home" class="logo">
                <img src="/icons/favicon.png" alt="Logo" />
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
    </div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;

		background-color: var(--background-color);
		box-shadow: 0 6px 4px rgba(0, 0, 0, 0.25);
    }

	.grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-auto-rows: 1fr;
		gap: 1rem;

		width: 95vw;
		max-width: 100rem;
	}

	nav {
		grid-column-start: 1;
		grid-column-end: 13;
		display: flex;
		align-items: center;
		justify-content: space-between;

		height: 3rem;
		width: 100%;
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
