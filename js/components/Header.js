export default function Header() {
	const $header = document.createElement('header');

	$header.classList.add('header');
	$header.innerHTML = '<h1 class="header__h1">EJERCICIOS DE LÓGICA con JS</h1>';

	return $header;
}
