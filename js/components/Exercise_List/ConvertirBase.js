export default function ConvertirBase() {
	const $form = document.querySelector('.exercise-form');
	const $message = document.querySelector('.exercise__message');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		const number = e.target.number.value;
		let base = e.target.base.value;
		let toBase = e.target.toBase.value;

		base === '' ? (base = 10) : (base = Number(base));
		toBase === '' ? (toBase = 10) : (toBase = Number(toBase));

		$message.textContent =
			base === 10
				? 'Resultado: ' + String(number.toString(toBase))
				: base < 37 && toBase === 10
				? 'Resultado: ' + String(parseInt(number, base))
				: base > 36
				? 'El valor de las bases deben ser menores a 37'
				: 'La base a convertir debe ser 10 (de momento)';
	});
}
