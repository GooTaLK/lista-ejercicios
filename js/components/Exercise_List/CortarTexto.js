export default function CortarTexto() {
	const $form = document.querySelector('.exercise-form');
	const $message = document.querySelector('.exercise__message');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		$message.textContent = `Resultado: ${e.target.text.value.slice(
			0,
			e.target.number.value
		)}`;
	});
}
