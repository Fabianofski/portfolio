<nav>
	<h1>Fabian.Dev</h1>
	<ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
		<li><a href="#">Projects</a></li>
		<li><a href="#">Contact</a></li>
	</ul>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;

		height: 3rem;
		padding: 1rem;
		background-color: var(--background-color);

		box-shadow: 0 6px 4px rgba(0, 0, 0, 0.25);
	}

	h1 {
		color: var(--text-color);
		width: 60%;
	}

	ul {
		display: flex;
		justify-content: space-evenly;
		align-items: center;

		height: 100%;
		width: 40%;

		list-style: none;
	}
</style>
