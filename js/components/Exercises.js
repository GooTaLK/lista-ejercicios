import ajax from '../helpers/ajax.js';
import Button from './Button.js';

export default async function Exercises() {
	const $excersices = document.createElement('div');

	$excersices.classList.add('exercise-list');

	await ajax({
		url: '../../assets/db.json',
		cbSuccess: (data) => {
			data.toolsName.forEach((tool) => {
				$excersices.appendChild(
					Button({
						className: 'exercise-btn',
						content: tool.name,
						href: `#${tool.slug}`,
					})
				);
			});
		},
	});

	return $excersices;
}
