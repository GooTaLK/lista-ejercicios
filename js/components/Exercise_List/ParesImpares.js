import {
	insertInput,
	insertNextInput,
	removeAllInputs,
} from '../../helpers/inputs-exercises.js';

export default function ParesImpares() {
	const $form = document.querySelector('.exercise-form');
	const $message = document.querySelector('.exercise__message');

	const arrayParImpar = (input) => {
		let array = [];
		let pares = [];
		let impares = [];

		input.forEach((el) => array.push(el.querySelector('input').value));
		array.pop();

		array.forEach((el) => (el % 2 === 0 ? pares.push(el) : impares.push(el)));

		return { pares, impares };
	};

	$form.addEventListener('change', (e) => insertNextInput(e));

	$form.addEventListener('keyup', (e) => insertNextInput(e));

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		const $input = document.querySelectorAll('.exercise__input');

		let result = arrayParImpar($input);
		removeAllInputs($input);
		insertInput();

		console.log(result);
		$message.innerHTML =
			`<p>Pares: ${result.pares.join(', ')}</p>` +
			`<p>Impares: ${result.impares.join(', ')}</p>`;
	});
}
