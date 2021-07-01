import BasicComponent from './BasicComponent.js';
import InputText from './InputText.js';
import InputNumber from './InputNumber.js';
import Input from './Input.js';

export default function ExerciseForm({
	hashName = null,
	className,
	title,
	inputs = [],
}) {
	const $form = document.createElement('form');

	let ascendantId = 0;

	$form.classList.add('exercise-form');
	$form.classList.add(
		(hashName ? hashName.replace(/_/g, '-') : false) || className
	);

	$form.appendChild(
		BasicComponent({
			tag: 'h2',
			className: 'exercise__title',
			content:
				(hashName ? hashName.replace(/_/g, ' ').toUpperCase() : false) || title,
		})
	);

	if (inputs) {
		inputs.forEach((el) => {
			$form.appendChild(
				Input({
					className: 'exercise__input',
					title: el.title || 'Texto',
					id: el.id || `input-${ascendantId}`,
					type: el.type || null,
					name: el.name || 'number',
					required: el.required || false,
					placeHolder: el.placeHolder || false,
				})
			);

			ascendantId++;
		});
	}

	$form.appendChild(
		Input({
			className: 'exercise__submit',
			type: 'submit',
			name: 'submit',
			value: 'Obtener',
			required: false,
		})
	);

	$form.appendChild(
		BasicComponent({
			tag: 'p',
			className: 'exercise__message',
		})
	);

	ascendantId = 0;

	return $form;
}
