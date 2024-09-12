<script>
	import EducationCard from './EducationCard.svelte';
</script>

<div class="cards">
	<EducationCard
		icon="/icons/school.svg"
		altText="school"
		duration="2014-2021"
		grade="1,8"
		type="A-Level"
		description="Friedrich Anton von Heinitz Gymnasium"
	/>
	<EducationCard
		icon="/icons/university.svg"
		altText="university"
		duration="2021-2024"
		grade="1.5"
		type="Dual Study Computer Science"
		description="Highschool for Economics and Law Berlin // Bosch Siemens Householding GmbH"
	/>
	<EducationCard
		icon="/icons/work.svg"
		altText="work"
		duration="2024-today"
		type="Software Engineer"
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
