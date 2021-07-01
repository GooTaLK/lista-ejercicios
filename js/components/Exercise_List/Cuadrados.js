import {
	insertInput,
	insertNextInput,
	removeAllInputs,
} from '../../helpers/inputs-exercises.js';

export default function Cuadrados() {
	const $form = document.querySelector('.exercise-form');
	const $message = document.querySelector('.exercise__message');

	const arrayCuadrado = (input) => {
		let result = [];

		input.forEach((el) => {
			result.push(Math.pow(Number(el.querySelector('input').value), 2));
		});
		result.pop();

		return result;
	};

	$form.addEventListener('change', (e) => insertNextInput(e));

	$form.addEventListener('keyup', (e) => insertNextInput(e));

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		const $input = document.querySelectorAll('.exercise__input');

		let result = arrayCuadrado($input);
		removeAllInputs($input);
		insertInput();

		console.log(result);
		$message.textContent = 'Resultado: ' + result.join(', ');
	});
}
