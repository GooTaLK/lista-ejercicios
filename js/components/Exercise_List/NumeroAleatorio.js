export default function NumeroAleatorio() {
	const $form = document.querySelector('.exercise-form');
	const $message = document.querySelector('.exercise__message');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		$message.textContent = String(500 + Math.trunc(Math.random() * 100));
	});
}
