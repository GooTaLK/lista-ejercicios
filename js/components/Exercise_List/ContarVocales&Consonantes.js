export default function ContarVocalesConsonantes() {
	const $form = document.querySelector('.exercise-form');
	const $message = document.querySelector('.exercise__message');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		const text = e.target.text.value;
		let vocals = 0;
		let consonants = 0;

		for (let letter of text) {
			if (/[AEIOUaeiouáéíóúÁÉÍÚÓàèìòùÀÈÌÒÙüÜ]/.test(letter)) {
				vocals++;
			}
			if (/[BCDFGHJKLMNÑPQRSTVWXYZqwrtypsdfghjklñzxcvbnm]/.test(letter)) {
				consonants++;
			}
		}

		$message.textContent = `Vocales: ${vocals}
        Consonantes: ${consonants}`;
	});
}
