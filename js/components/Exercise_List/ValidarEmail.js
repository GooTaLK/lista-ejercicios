export default function ValidarEmail() {
	const $form = document.querySelector('.exercise-form');
	const $message = document.querySelector('.exercise__message');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		$message.textContent = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,15}$/i.test(
			e.target.text.value
		)
			? 'Email valido'
			: 'No es un email valido';
	});
}
