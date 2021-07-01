export default function InputNumber({
	className,
	title,
	placeHolder = '',
	required = false,
}) {
	const $div = document.createElement('div');

	$div.classList.add('input');
	$div.classList.add(className);
	$div.innerHTML = `
    <label class="input__label" for="id-${title}">${title}</label>
	<input class="input__input" name="number" id="id-${title}" type="number" placeholder=${placeHolder} ${
		required ? 'required' : ''
	}>
    `;

	return $div;
}
