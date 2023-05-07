<script>
	import Greetings from './Greetings.svelte';
	import { onMount } from 'svelte';
	onMount(() => {
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

		const name = document.querySelector('.name');
		const text = name.dataset.value;
		let interval = null;
		let iteration = 0;
		interval = setInterval(() => {
			name.innerText = text
				.split('')
				.map((letter, index) => {
					if (index < iteration) {
						return name.dataset.value[index];
					}
					if (index < iteration + 4) {
						return letters[Math.floor(Math.random() * 26)];
					}
				})
				.join('');

			if (iteration >= name.dataset.value.length) {
				clearInterval(interval);
			}

			iteration += 1 / 3;
		}, 70);
	});
</script>

<div class="text">
	<Greetings />
	<h1 data-value="FABIAN FRIEDRICH" class="name" />
</div>

<div class="profile-container">
	<div class="profile">
		<div class="gradient" />
		<img src="/profile.png" alt="profile" />
	</div>
</div>
<div class="socials">
	<a href="https://www.github.com/fabianofski">
		<img src="/icons/github.svg" alt="Link to Github Profile" />
	</a>
	<a href="https://f4b1.itch.io/">
		<img src="/icons/itch.svg" alt="Link to Itch.io Profile" />
	</a>
	<a href="https://www.linkedin.com/in/fabian-friedrich-a1206122a/">
		<img src="/icons/linkedin.svg" alt="Link to LinkedIn Profile" />
	</a>
</div>

<style>
	.text {
		grid-column-start: 2;
		grid-column-end: 7;
		grid-row: span 2;

		position: relative;
	}

	.text .name {
		position: absolute;
		top: 65%;
		left: 0;
		transform: translateY(-50%);

		font-size: 56px;
		white-space: nowrap;
	}

	.socials {
		grid-row-start: 3;
		grid-column-start: 2;
		grid-column-end: 7;

		display: flex;
		gap: 2rem;
	}

	.socials img {
		max-height: 2.5rem;
	}

	.socials img:hover {
		filter: var(--primary-color-filter);
	}

	.profile-container {
		grid-column-start: 9;
		grid-column-end: 12;
		grid-row: span 3;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.profile {
		position: relative;
		width: 100%;
		aspect-ratio: 1/ 1;

		background: radial-gradient(100% 100% at 50% 50%, #1b1c2a 0%, #1f2431 100%);
		box-shadow: inset 10px 10px 15px rgba(0, 0, 0, 0.25);

		border-radius: 50%;
		overflow: hidden;
		animation: scale-up 1s var(--ease-out-expo);
	}

	@media (max-width: 1100px) {
		.profile-container {
			grid-column-start: 2;
			grid-column-end: 12;
			grid-row-start: 1;

			height: 16rem;
		}

		.socials {
			grid-row-start: 3;
			grid-column-start: 2;
			grid-column-end: 10;
		}

		.profile {
			width: auto;
			height: 100%;
		}

		.text {
			grid-column-start: 2;
			grid-column-end: 12;
			grid-row-start: 2;

			position: relative;
		}

		.text .name {
			white-space: revert;
		}

		.a-btn {
			font-size: 18px;
		}

		.download-btn {
			grid-column-start: 2;
			grid-column-end: 6;
		}

		.contact-btn {
			grid-column-start: 8;
			grid-column-end: 12;
		}
	}
	@media (max-width: 700px) {
		.a-btn {
			font-size: 14px;
		}
	}

	.profile .gradient {
		height: 100%;
		width: 100%;
		background: radial-gradient(
			50% 50% at 50% 50%,
			rgba(238, 224, 102, 0.35) 0%,
			rgba(189, 179, 88, 0.14) 63.54%,
			rgba(177, 168, 85, 0) 89.58%
		);

		border-radius: 50%;
		scale: 0;
		animation: scale-up 0.5s var(--ease-out-expo) 0.1s forwards;
	}

	.profile img {
		position: absolute;
		transform: translate(-50%, -50%);

		opacity: 0;
		scale: 1;
		animation: fade-in 2s var(--ease-out-expo) 0.2s forwards,
			slide-img-in 1s var(--ease-out-expo) 0.2s forwards;
		transition: scale 1s var(--ease-out-expo);
	}

	.profile img:hover {
		scale: 1.05;
	}

	@keyframes slide-img-in {
		0% {
			top: 100%;
			left: 70%;
		}
		100% {
			top: 40%;
			left: 50%;
		}
	}
</style>
