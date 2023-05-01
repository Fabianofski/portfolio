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
	}

	.profile img {
		position: absolute;
		left: 50%;
		top: 40%;
		transform: translate(-50%, -50%);
	}
</style>
