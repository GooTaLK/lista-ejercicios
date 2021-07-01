export default function ExerciseEventSubmit(props) {
	const $form = props.form;
	const $message = props.message;

	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		$message.textContent = props.messageContent;
	});
}
