export default function Footer() {
	const $footer = document.createElement('footer');

	$footer.classList.add('footer');
	$footer.innerHTML = '<p class="footer__p">Este es un footer</p>';

	return $footer;
}
