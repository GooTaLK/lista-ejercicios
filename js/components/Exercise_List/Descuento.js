export default function Descuento() {
	const $form = document.querySelector('.exercise-form');
	const $message = document.querySelector('.exercise__message');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		let number = e.target.number.value;
		let discount = e.target.discount.value;

		// number === '' ? (number = 0) : (number = Number(number));
		// discount === '' ? (discount = 0) : (discount = Number(discount));

		$message.textContent =
			discount < 100
				? 'Resultado: ' + (number * (100 - discount)) / 100
				: 'El descuento debe ser menor o igual a 100';
	});
}
