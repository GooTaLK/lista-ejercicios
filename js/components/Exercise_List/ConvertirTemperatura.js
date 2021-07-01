export default function ConvertirTemperatura() {
	const $form = document.querySelector('.exercise-form');
	const $message = document.querySelector('.exercise__message');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		const number = e.target.number.value;
		const measure = e.target.measure.value;

		$message.textContent =
			measure === 'C'
				? `${(number * 9) / 5 + 32} ºF`
				: measure === 'F'
				? `${((number - 32) * 5) / 9} ºC`
				: 'La segunda entrada debe ser C o F';
	});
}
