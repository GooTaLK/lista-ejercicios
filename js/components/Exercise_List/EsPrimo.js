export default function EsPrimo() {
	const $form = document.querySelector('.exercise-form');
	const $message = document.querySelector('.exercise__message');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		const number = e.target.number.value;
		let result = 'No es un número primo';

		for (let i = 2; i < number; i++) {
			if (number % 2 === 0) {
				result = 'Sí es un número primo';
				break;
			}
		}

		$message.textContent = result;
	});
}
