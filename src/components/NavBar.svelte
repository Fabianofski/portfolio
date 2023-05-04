<nav>
	<p>Fabian.Dev</p>
	<ul class="list">
		<li><a href="#home">Home</a></li>
		<li><a href="#education">Education</a></li>
		<li><a href="#projects">Projects</a></li>
		<li><a href="#contact">Contact</a></li>
	</ul>
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
		padding: 1rem;
		background-color: var(--background-color);

		box-shadow: 0 6px 4px rgba(0, 0, 0, 0.25);
	}

	a,
	p {
		font-weight: bold;
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
