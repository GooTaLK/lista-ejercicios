import ParticlesJs from './components/Particles-js.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Router from './components/Router.js';
import Container from './components/Container.js';
import Button from './components/Button.js';

export default function App() {
	const $root = document.getElementById('root');

	$root.innerHTML = '';
	$root.append(
		ParticlesJs(),
		Header(),
		Container(),
		Button({ className: 'home-btn', content: 'Volver', href: '#' }),
		Footer()
	);

	particlesJS.load('particles-js', '../assets/particlesjs-config.json');
	Router();
}
