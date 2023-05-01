<script>
	import HeroSection from './HeroSection.svelte';
</script>

<div class="container">
	<div class="grid">
		<HeroSection />
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;

		width: 100%;
		min-height: 100vh;

		background: linear-gradient(
			135deg,
			var(--secondary-background-color) 0,
			var(--background-color) 100%
		);
		background-size: 300%;
		background-position-x: 80%;
		padding-top: 10rem;

		animation: background-fade-in 3s ease-in-out;
	}

	@keyframes background-fade-in {
		0% {
			background-position-x: 0;
		}
		100% {
			background-position-x: 80%;
		}
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-auto-rows: 1fr;
		gap: 1rem;

		width: 95vw;
		max-width: 80rem;
		height: 100%;
	}
</style>
