<script>
</script>

<div class="container">
	<h1>Content</h1>
</div>

<style>
	.container {
		width: 100%;
		min-height: 100vh;

		background: linear-gradient(
			90deg,
			var(--secondary-background-color) 0,
			var(--background-color) 100%
		);
		background-size: 300%;
		background-position-x: 80%;

		animation: background-fade-in 4s ease-in-out;
	}

	@keyframes background-fade-in {
		0% {
			background-position-x: 0;
		}
		100% {
			background-position-x: 80%;
		}
	}
</style>
