export default function ContarCaracteres() {
	const $form = document.querySelector('.contar-caracteres');
	const $message = document.querySelector('.exercise__message');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		$message.textContent = `El texto contiene ${e.target.text.value.length} caracteres.`;
	});
}
