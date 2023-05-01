<div class="text">
	<div>
		<h1 class="greeting">Hi! My Name is</h1>
		<h1>FABIAN FRIEDRICH</h1>
	</div>
</div>

<div class="profile">
	<div class="gradient" />
	<img src="/profile.png" alt="profile" />
</div>
<button class="download-btn">Download CV</button>
<button class="contact-btn"> Contact Me</button>

<style>
	.text {
		grid-column-start: 2;
		grid-column-end: 7;
		grid-row: span 2;

		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;

		scale: 0;
		opacity: 0;
		animation: fade-in 1.5s var(--ease-out-expo) forwards,
			scale-up 1.5s var(--ease-out-expo) forwards;
	}

	.greeting {
		font-family: 'Dancing Script', serif;
		color: var(--primary-color);
	}

	.text h1 {
		font-size: 56px;
	}

	button {
		grid-column: span 2;
		grid-row-start: 3;

		max-height: 4rem;

		font-size: 28px;
		font-weight: bold;

		scale: 0;
		opacity: 0;
		animation: fade-in 1.5s var(--ease-out-expo) forwards,
			scale-up 1.5s var(--ease-out-expo) forwards;
	}

	.download-btn {
		grid-column-start: 2;
		grid-column-end: 4;
	}

	.contact-btn {
		grid-column-start: 5;
		grid-column-end: 7;
	}

	.profile {
		grid-column-start: 9;
		grid-column-end: 12;
		grid-row: span 3;

		position: relative;
		aspect-ratio: 1/ 1;

		background: radial-gradient(100% 100% at 50% 50%, #1b1c2a 0%, #1f2431 100%);
		box-shadow: inset 10px 10px 15px rgba(0, 0, 0, 0.25);

		border-radius: 50%;
		overflow: hidden;
		animation: scale-up 1s var(--ease-out-expo);
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
		animation: fade-in 2s var(--ease-out-expo) 0.2s forwards,
			slide-img-in 1s var(--ease-out-expo) 0.2s forwards;
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
