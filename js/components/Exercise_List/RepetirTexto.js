export default function CortarTexto() {
	const $form = document.querySelector('.exercise-form');
	const $message = document.querySelector('.exercise__message');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		const text = e.target.text.value + ' ';
		$message.textContent = `Resultado: ${text.repeat(e.target.number.value)}`;
	});
}
