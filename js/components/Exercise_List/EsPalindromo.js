export default function EsPalindromo() {
	const $form = document.querySelector('.exercise-form');
	const $message = document.querySelector('.exercise__message');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		const text = e.target.text.value.toLowerCase();
		const reverseText = text.split('').reverse().join('');

		$message.textContent = String('El texto ').concat(
			text === reverseText ? 'es palindromo' : 'no es palindromo'
		);
	});
}
