export default function Button({ className, content, href }) {
	const $button = document.createElement('a');

	$button.classList.add('button');
	$button.classList.add(className);
	if (href) $button.href = href;
	$button.textContent = content;

	return $button;
}
