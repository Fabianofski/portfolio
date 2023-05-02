<nav>
	<p>Fabian.Dev</p>
	<ul>
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

		position: fixed;
		z-index: 99;

		height: 3rem;
		width: 100%;
		padding: 1rem;
		background-color: var(--background-color);

		box-shadow: 0 6px 4px rgba(0, 0, 0, 0.25);
	}

	p {
		width: 60%;
	}

	a,
	p {
		font-weight: bold;
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
