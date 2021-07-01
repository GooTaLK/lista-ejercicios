export default function GirarTexto() {
	const $form = document.querySelector('.exercise-form');
	const $message = document.querySelector('.exercise__message');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		$message.textContent =
			'Resultado: ' + e.target.text.value.split('').reverse().join('');
	});
}
