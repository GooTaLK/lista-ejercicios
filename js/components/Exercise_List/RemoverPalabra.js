export default function RemoverPalabra() {
	const $form = document.querySelector('.exercise-form');
	const $message = document.querySelector('.exercise__message');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		const word = e.target.word.value;

		$message.textContent =
			'Resultado: ' + e.target.text.value.replace(new RegExp(word, 'g'), '');
	});
}
