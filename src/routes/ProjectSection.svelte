<script>
	import SvelteTooltip from 'svelte-tooltip';
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
				<div class="title">
					<h1 class="project-title">{project.title}</h1>
					<div class="icons">
						{#each project.tools as tool, i}
							<SvelteTooltip tip={tool} color="var(--background-color)">
								<img
									src={`/icons/${tool}.svg`}
									alt={`${tool} Icon`}
									style={`z-index: ${project.tools.length - i};`}
								/>
							</SvelteTooltip>
						{/each}
					</div>
				</div>
				<div class="content">
					<img src={project.image} alt={`${project.title} - Preview`} class="card-img" />
					<p>{project.description}</p>
				</div>
			</div>
		</div>
	{/each}
	<button on:click={decreaseIndex} class="previous-btn">Prev.</button>
	<button on:click={incrementIndex} class="next-btn">Next</button>
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

		width: 60rem;
		height: 30rem;

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
		padding: 2rem;

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

	.title {
		position: relative;

		width: 100%;
		height: 3rem;
	}

	.project-title,
	.icons {
		position: absolute;
		transform: translate(-50%, -50%);
		top: 50%;
	}

	.project-title {
		left: 50%;
	}

	.icons {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		transform: translateY(-50%);
		right: 0;

		height: 3rem;

		color: var(--text-color);
	}

	:global(.icons > *) {
		margin-left: -0.5rem;
	}

	.icons img {
		position: relative;

		height: 3rem;

		transition: all 0.5s var(--ease-out-expo);
	}

	.icons img:hover {
		z-index: 99 !important;
		margin-bottom: 1rem;

		scale: 1.1;
	}

	.content {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 2rem;

		height: 100%;
	}

	.content > * {
		width: 100%;
		border-radius: 10px;
	}

	.card-img {
		height: 100%;
		object-fit: cover;
	}

	.previous-btn,
	.next-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 5;
	}

	.previous-btn {
		left: 18%;
	}

	.next-btn {
		right: 18%;
	}
</style>
