export default function Factorizar() {
	const $form = document.querySelector('.exercise-form');
	const $message = document.querySelector('.exercise__message');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		let number = e.target.number.value;

		for (let i = number - 1; i > 1; i--) {
			number *= i;
		}

		$message.textContent = String(number);
	});
}
