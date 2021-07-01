export default function Input({
	className,
	title,
	id,
	name,
	type,
	value,
	placeHolder = '',
	required = true,
}) {
	const $div = document.createElement('div');
	const $label = document.createElement('label');
	const $input = document.createElement('input');

	$div.classList.add('input');
	$div.classList.add(className);
	$label.classList.add('input__label');
	$input.classList.add('input__input');

	if (title) $label.textContent = title;
	if (id) $label.htmlFor = id;

	if (id) $input.id = id;
	if (name) $input.name = name;
	if (value) $input.value = value;
	if (type) $input.type = type;
	if (placeHolder) $input.placeholder = placeHolder;
	if (required) $input.required = required;

	$div.append($label, $input);

	return $div;
}
