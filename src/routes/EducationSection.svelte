<script>
	import EducationCard from './EducationCard.svelte';
</script>

<div class="cards">
	<EducationCard
		icon="/icons/university.svg"
		altText="university icon"
		duration="2014-2021"
		grade="1,8"
		type="A-Level"
		description="Friedrich Anton von Heinitz Gymnasium"
	/>
	<EducationCard
		icon="/icons/university.svg"
		altText="university icon"
		duration="2021-2024"
		grade="?"
		type="Dual Study Computer Science (Theory Semesters)"
		description="Highschool for Economics and Law Berlin"
	/>
	<EducationCard
		icon="/icons/university.svg"
		altText="university icon"
		duration="2021-2024"
		type="Dual Study Computer Science (Practical Semesters)"
		description="Bosch Siemens Householding GmbH"
	/>
</div>
<div class="education-image">
	<img src="/education.svg" alt="women reading while standing on a book" />
</div>

<style>
	.cards {
		grid-column: span 6;
		grid-row: span 3;

		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
	}

	.education-image {
		grid-column: span 6;
		grid-row: span 3;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.education-image img {
		height: 80%;
		object-fit: contain;
	}

	@media (max-width: 1000px) {
		.education-image {
			display: none;
		}

		.cards {
			grid-column: span 12;
		}
	}
</style>
