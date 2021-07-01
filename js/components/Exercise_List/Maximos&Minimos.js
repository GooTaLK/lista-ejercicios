import {
	insertInput,
	insertNextInput,
	removeAllInputs,
} from '../../helpers/inputs-exercises.js';

export default function MaximosMinimos() {
	const $form = document.querySelector('.exercise-form');
	const $message = document.querySelector('.exercise__message');

	const arraySorted = (input) => {
		let result = [];

		input.forEach((el) => result.push(el.querySelector('input').value));
		result.sort((a, b) => b - a);
		result.pop();

		return result;
	};

	$form.addEventListener('change', (e) => insertNextInput(e));

	$form.addEventListener('keyup', (e) => insertNextInput(e));

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		const $input = document.querySelectorAll('.exercise__input');

		let result = arraySorted($input);
		removeAllInputs($input);
		insertInput();

		console.log(result);
		$message.innerHTML = `<p>Máximo: ${result[0]} / 
        Mínimo: ${result[result.length - 1]}</p>
        <p>de: ${result.join(', ')}</p>`;
	});
}
