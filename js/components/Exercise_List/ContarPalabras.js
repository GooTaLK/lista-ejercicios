export default function ContarPalabras() {
	const $form = document.querySelector('.exercise-form');
	const $message = document.querySelector('.exercise__message');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		$message.textContent = `Resultado: ${
			e.target.text.value.split(e.target.word.value).length - 1
		}`;
	});
}
