<script lang="ts">
	import { projects } from './projects';

	let projectList = projects;

	let currentIndex = 0;

	const incrementIndex = () => {
		currentIndex++;
		rerender();
	};
	const decreaseIndex = () => {
		currentIndex--;
		if (currentIndex < 0) currentIndex = projectList.length - 1;
		rerender();
	};

	const rerender = () => {
		console.log(currentIndex);
		for (let i = 0; i < projectList.length; i++) {
			projectList[i].classes = [];
			if (i === (currentIndex + 1) % projectList.length) {
				projectList[i].classes.push('active');
			} else if (i === currentIndex % projectList.length) {
				projectList[i].classes.push('left');
				projectList[i].classes.push('idle');
			} else if (i === (currentIndex + 2) % projectList.length) {
				projectList[i].classes.push('right');
				projectList[i].classes.push('idle');
			} else {
				projectList[i].classes.push('inactive');
			}
			projectList = projectList;
		}
	};

	rerender();
</script>

<div class="projects">
	{#each projectList as project}
		<div class={`card-wrapper ${project.classes.join(' ')}`}>
			<div class="card">
				<h1>{project.title}</h1>
				<div class="content">
					<img src={project.image} alt={`${project.title} - Preview`} />
					<p>{project.description}</p>
				</div>
			</div>
		</div>
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

	.card-wrapper {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		width: 50rem;
		height: 20rem;

		transition: all 1s var(--ease-out-expo);
	}

	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: 2rem;

		width: 100%;
		height: 100%;
		background-color: var(--text-color);
		padding: 1rem 2rem;

		border-radius: 10px;

		transition: all 1s var(--ease-out-expo);
	}

	.card-wrapper.inactive > .card {
		scale: 0;

		z-index: 0;
	}

	.card-wrapper.idle > .card {
		scale: 0.5;

		z-index: 1;
	}

	.card-wrapper.left {
		left: 0;
		transform: translate(0, -50%);

		opacity: 0.75;
	}

	.card-wrapper.right {
		left: 100%;
		transform: translate(-100%, -50%);

		opacity: 0.75;
	}

	.card-wrapper.active {
		z-index: 2;
	}

	.content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
	}

	.content > * {
		width: 100%;
		border-radius: 10px;
	}
</style>
