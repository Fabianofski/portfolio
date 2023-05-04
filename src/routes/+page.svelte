<script>
	import HeroSection from './HeroSection.svelte';
	import EducationSection from './EducationSection.svelte';
	import ProjectSection from './ProjectSection.svelte';
	import ContactSection from './ContactSection.svelte';
</script>

<div class="container" id="home">
	<div class="grid hero-section">
		<HeroSection />
	</div>
	<div class="grid education-section" id="education">
		<EducationSection />
	</div>
	<div class="grid project-section" id="projects">
		<ProjectSection />
	</div>
	<div class="grid contact-section" id="contact">
		<ContactSection />
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: min(15rem, 10vw);

		width: 100%;
		min-height: 300vh;

		background: linear-gradient(
			135deg,
			var(--secondary-background-color) 0,
			var(--background-color) 100%
		);
		background-size: 300%;
		background-position-x: 100%;
		padding-top: min(12rem, 10vw);

		animation: background-fade-in 3s var(--ease-out-expo);
	}

	@keyframes background-fade-in {
		0% {
			background-position-x: 0;
		}
		100% {
			background-position-x: 100%;
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
		padding-top: 3rem;
	}

	@media (min-width: 800px) {
		.grid {
			gap: 1rem;
		}
	}
</style>
