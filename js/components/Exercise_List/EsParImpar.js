export default function EsParImpar() {
	const $form = document.querySelector('.exercise-form');
	const $message = document.querySelector('.exercise__message');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		const number = e.target.number.value;

		$message.textContent =
			number % 2 === 0 ? 'Es un número par' : 'Es un número impar';
	});
}
