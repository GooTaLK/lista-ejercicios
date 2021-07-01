export default function Container() {
	const $container = document.createElement('div');

	$container.classList.add('container');

	return $container;
}

export function addToContainer($component) {
	$component instanceof Array
		? document.querySelector('.container').append(...$component)
		: document.querySelector('.container').appendChild($component);
}

export function avoidContainer() {
	document.querySelector('.container').innerHTML = '';
}
