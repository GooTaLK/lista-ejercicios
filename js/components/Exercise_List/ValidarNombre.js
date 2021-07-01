export default function ValidarNombre() {
	const $form = document.querySelector('.exercise-form');
	const $message = document.querySelector('.exercise__message');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		$message.textContent = /^[A-Za-zÑñáéíóúÁÉÍÚÓ]+$/g.test(e.target.text.value)
			? 'Nombre valido'
			: 'No es un nombre valido (F)';
	});
}
