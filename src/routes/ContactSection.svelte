<div class="container">
	<h2 class="caption">Contact</h2>
	<form method="POST" action="?/contact" class="contact-form">
        <div class="horizontal-split">
            <div class="form-field">
                <label for="name">Name</label>
                <input required type="text" id="name" name="name" />
            </div>
            <div class="form-field">
                <label for="email">E-Mail</label>
                <input required type="email" id="email" name="email" />
            </div>
        </div>
		<div class="form-field">
			<label for="subject">Subject</label>
			<input required type="text" id="subject" name="subject" />
		</div>
		<div class="form-field">
			<label for="message">Your Message</label>
			<textarea required id="message" name="message" />
		</div>
        <button type="submit" class="submit-btn"> Submit </button>
	</form>
</div>

<style>
    .container {
		grid-column: span 12;

        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 2rem;

		padding-bottom: min(12rem, 10vw);
    }

	.caption {
		text-align: center;
        color: var(--primary-color);
        font-size: 2.5rem;
	}

    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        width: 100%;
        max-width: 55rem;
    }

    .horizontal-split {
        display: flex;
        gap: 1rem;
    }

	@media (max-width: 800px) {
		.horizontal-split {
            flex-direction: column;
		}
	}

	.form-field {
		display: flex;
		flex-direction: column;

        width: 100%;
	}

	.form-field label {
		color: var(--text-color);
	}

    .form-field input {
        height: 2rem;
    }

    .form-field textarea {
        min-height: 6rem;
        resize: vertical;
    }
</style>
