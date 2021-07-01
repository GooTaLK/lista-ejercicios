export default function DiferenciarAnios() {
	const $form = document.querySelector('.exercise-form');
	const $message = document.querySelector('.exercise__message');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		const distanceYears = e.target.number.value - new Date().getFullYear();

		$message.textContent =
			distanceYears === 0
				? 'Estás en este año'
				: distanceYears > 0
				? 'Faltan ' + distanceYears + ' años'
				: 'Han pasado ' + Math.abs(distanceYears) + ' años';
	});
}
