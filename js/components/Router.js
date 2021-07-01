import Button from './Button.js';
import { addToContainer, avoidContainer } from './Container.js';
import Exercises from './Exercises.js';
import ajax from '../helpers/ajax.js';
import BasicComponent from './BasicComponent.js';
import ExerciseForm from './ExerciseForm.js';

import ContarCaracteres from './Exercise_List/ContarCaracteres.js';
import CortarTexto from './Exercise_List/CortarTexto.js';
import SepararTexto from './Exercise_List/SepararTexto.js';
import RepetirTexto from './Exercise_List/RepetirTexto.js';
import GirarTexto from './Exercise_List/GirarTexto.js';
import ContarPalabras from './Exercise_List/ContarPalabras.js';
import EsPalindromo from './Exercise_List/EsPalindromo.js';
import RemoverPalabra from './Exercise_List/RemoverPalabra.js';
import NumeroAleatorio from './Exercise_List/NumeroAleatorio.js';
import Factorizar from './Exercise_List/Factorizar.js';
import EsPrimo from './Exercise_List/EsPrimo.js';
import EsParImpar from './Exercise_List/EsParImpar.js';
import ConvertirTemperatura from './Exercise_List/ConvertirTemperatura.js';
import ConvertirBase from './Exercise_List/ConvertirBase.js';
import Descuento from './Exercise_List/Descuento.js';
import DiferenciarAnios from './Exercise_List/DiferenciarAnios.js';
import ContarVocalesConsonantes from './Exercise_List/ContarVocales&Consonantes.js';
import ValidarNombre from './Exercise_List/ValidarNombre.js';
import ValidarEmail from './Exercise_List/ValidarEmail.js';
import Cuadrados from './Exercise_List/Cuadrados.js';
import MaximosMinimos from './Exercise_List/Maximos&Minimos.js';
import ParesImpares from './Exercise_List/ParesImpares.js';

export default async function router() {
	const $homeBtn = document.querySelector('.home-btn');
	const hash = location.hash;

	if (!hash || hash === '#') {
		$homeBtn.classList.remove('visible');

		addToContainer(
			Button({
				className: 'start-btn',
				content: 'Ver lista',
			})
		);

		document.addEventListener('click', async (e) => {
			if (e.target.matches('.start-btn')) {
				const $Exercises = await Exercises();

				avoidContainer();
				addToContainer($Exercises);
			}
		});
	} else {
		let dataName = [];
		let hashName = hash.slice(1, hash.length);

		await ajax({
			url: '../../assets/db.json',
			cbSuccess: (json) => (dataName = json.toolsName.map((el) => el.slug)),
		});

		$homeBtn.classList.add('visible');

		if (dataName.includes(hashName)) {
			addToContainer(
				BasicComponent({
					tag: 'div',
					className: 'exercise',
				})
			);

			const $Exercise = document.querySelector('.exercise');

			if (hashName === 'contar_caracteres') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [{ name: 'text' }],
					})
				);
				ContarCaracteres();
			} else if (hashName === 'cortar_texto') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [
							{ name: 'text' },
							{ type: 'number', title: 'Número', placeHolder: '0' },
						],
					})
				);
				CortarTexto();
			} else if (hashName === 'separar_texto') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [{ name: 'text' }, { name: 'spliter', title: 'Separador' }],
					})
				);
				SepararTexto();
			} else if (hashName === 'repetir_texto') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [{ name: 'text' }, { type: 'number', title: 'Cantidad' }],
					})
				);
				RepetirTexto();
			} else if (hashName === 'girar_texto') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [{ name: 'text' }],
					})
				);
				GirarTexto();
			} else if (hashName === 'contar_palabras_en_texto') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [{ name: 'word', title: 'Palabra' }, { name: 'text' }],
					})
				);
				ContarPalabras();
			} else if (hashName === 'saber_si_es_un_texto_palindromo') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [{ name: 'text' }],
					})
				);
				EsPalindromo();
			} else if (hashName === 'remover_palabra_en_texto') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [{ name: 'text' }, { name: 'word', title: 'Palabra' }],
					})
				);
				RemoverPalabra();
			} else if (hashName === 'numero_aleatorio_entre_500_y_600') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
					})
				);
				NumeroAleatorio();
			} else if (hashName === 'factorizar') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [{ type: 'number', title: 'Número' }],
					})
				);
				Factorizar();
			} else if (hashName === 'saber_si_es_numero_primo') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [{ type: 'number', title: 'Número' }],
					})
				);
				EsPrimo();
			} else if (hashName === 'saber_si_es_numero_par_o_impar') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [{ type: 'number', title: 'Número' }],
					})
				);
				EsParImpar();
			} else if (hashName === 'convertir_temperatura_de_c_a_f_o_viceversa') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [
							{ type: 'number', title: 'Número' },
							{ name: 'measure', title: 'Medida de "Número"' },
						],
					})
				);
				ConvertirTemperatura();
			} else if (
				hashName === 'convertir_numeros_de_base_10_a_otra_base_o_viceversa'
			) {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [
							{ type: 'number', title: 'Número' },
							{
								type: 'number',
								name: 'base',
								title: 'Base de "Número"',
								placeHolder: '10',
							},
							{
								type: 'number',
								name: 'toBase',
								title: 'Base a convertir',
								placeHolder: '10',
							},
						],
					})
				);
				ConvertirBase();
			} else if (hashName === 'descuentos_portcentuales') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [
							{ type: 'number', title: 'Número' },
							{ type: 'number', name: 'discount', title: 'Descuento' },
						],
					})
				);
				Descuento();
			} else if (hashName === 'diferenciar_anios') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [{ type: 'number', title: 'Año a comparar' }],
					})
				);
				DiferenciarAnios();
			} else if (hashName === 'contar_vocales_y_consonantes') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [{ name: 'text' }],
					})
				);
				ContarVocalesConsonantes();
			} else if (hashName === 'validar_nombres') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [{ name: 'text' }],
					})
				);
				ValidarNombre();
			} else if (hashName === 'validar_email') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [{ name: 'text' }],
					})
				);
				ValidarEmail();
			} else if (hashName === 'cuadrados') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [{ type: 'number', title: 'Número' }],
					})
				);
				Cuadrados();
			} else if (hashName === 'numeros_maximos_y_minimos') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [{ type: 'number', title: 'Número' }],
					})
				);
				MaximosMinimos();
			} else if (hashName === 'numeros_pares_e_impares') {
				$Exercise.appendChild(
					ExerciseForm({
						hashName,
						inputs: [{ type: 'number', title: 'Número' }],
					})
				);
				ParesImpares();
			}
		}

		// console.log(dataName);
		console.log(hashName);
	}
}
