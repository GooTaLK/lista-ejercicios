import Input from '../components/Input.js';

export const insertInput = () => {
	const $submit = document.querySelector('.exercise__submit');

	$submit.insertAdjacentElement(
		'beforebegin',
		Input({
			className: 'exercise__input',
			title: 'Número',
			type: 'number',
			required: false,
		})
	);
};

export const insertNextInput = (e) => {
	const $input = document.querySelectorAll('.exercise__input');
	const lastInput = $input[$input.length - 1].querySelector('input').value;

	if (e.target.matches('.exercise__input input')) {
		if (lastInput === '') return null;

		insertInput();
	}
};

export const removeAllInputs = (input) => {
	input.forEach((el) => el.remove());
};
