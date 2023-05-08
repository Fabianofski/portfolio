<script lang="ts">
	let projects = [
		{
			color: 'red',
			classes: []
		},
		{
			color: 'blue',
			classes: []
		},
		{
			color: 'green',
			classes: []
		},
		{
			color: 'yellow',
			classes: []
		},
		{
			color: 'yellowgreen',
			classes: []
		},
		{
			color: 'orange',
			classes: []
		},
		{
			color: 'mediumpurple',
			classes: []
		}
	];

	let currentIndex = 0;

	const incrementIndex = () => {
		currentIndex++;
		rerender();
	};
	const decreaseIndex = () => {
		currentIndex--;
		if (currentIndex < 0) currentIndex = projects.length - 1;
		rerender();
	};

	const rerender = () => {
		console.log(currentIndex);
		for (let i = 0; i < projects.length; i++) {
			projects[i].classes = [];
			if (i === (currentIndex + 1) % projects.length) {
				projects[i].classes.push('active');
			} else if (i === currentIndex % projects.length) {
				projects[i].classes.push('left');
				projects[i].classes.push('idle');
			} else if (i === (currentIndex + 2) % projects.length) {
				projects[i].classes.push('right');
				projects[i].classes.push('idle');
			} else {
				projects[i].classes.push('inactive');
			}
			projects = projects;
		}
	};

	rerender();
</script>

<div class="projects">
	{#each projects as project}
		<div class={`card ${project.classes.join(' ')}`} style="background-color: {project.color}" />
	{/each}
	<button on:click={decreaseIndex}>Previous</button>
	<button on:click={incrementIndex}>Next</button>
</div>

<style>
	.projects {
		grid-column: span 12;
		height: 40rem;

		position: relative;
	}

	.card {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		width: 50rem;
		height: 20rem;

		border-radius: 10px;

		transition: all 1s var(--ease-out-expo);
	}

	.card.inactive {
		width: 0;
		height: 0;

		z-index: 0;
	}

	.card.idle {
		width: 25rem;
		height: 10rem;

		z-index: 1;
	}

	.card.left {
		left: 0;
		transform: translate(0, -50%);

		opacity: 0.75;
	}

	.card.right {
		left: 100%;
		transform: translate(-100%, -50%);

		opacity: 0.75;
	}

	.card.active {
		z-index: 2;
	}
</style>
