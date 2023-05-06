<script>
	export let icon;
	export let altText;
	export let duration;
	export let grade;
	export let type;
	export let description;
</script>

<div class="card">
	<div class="icon">
		<img src={icon} alt={altText} />
	</div>
	<div class="details">
		<div class="tags">
			<p class="tag">{duration}</p>
			{#if grade !== undefined}<p class="tag">{grade}</p>{/if}
		</div>
		<div class="text">
			<p class="title">
				{type}
			</p>
			<p class="description">
				{description}
			</p>
		</div>
	</div>
</div>

<style>
	.card {
		display: flex;
		align-items: center;
		gap: 1rem;

		background-color: var(--text-color);
		padding: 1rem 1rem;
		width: 100%;

		border-radius: 10px;

		transition: scale 0.5s var(--ease-out-expo);
	}

	.card:hover {
		scale: 1.05;
	}

	.card * {
		color: var(--background-color);
	}

	.icon {
		display: flex;
		justify-content: center;
		align-items: center;

		height: 100%;
		max-height: 5rem;
		padding: 0.5rem;
		background-color: var(--primary-color);

		border-radius: 50%;
		aspect-ratio: 1/1;
	}

	.details {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 0.5rem;
	}

	.tags {
		display: flex;
		gap: 0.5rem;
	}

	.tag {
		background-color: var(--background-color);
		width: fit-content;
		padding: 0.25rem 1rem;

		color: var(--primary-color);
		text-align: center;
		font-size: 12px;

		border-radius: 10px;
	}

	.text {
	}

	.title {
		font-weight: bold;
	}
</style>
