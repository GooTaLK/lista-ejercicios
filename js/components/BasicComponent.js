export default function BasicComponent({ tag, className, content }) {
	const $title = document.createElement(tag);

	$title.classList.add(className);
	$title.textContent = content;

	return $title;
}
