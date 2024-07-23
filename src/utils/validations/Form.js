export function validation(data) {
	const errors = {}

	if (!data.name) errors.name = "No puede estar vacio"

	if (!data.date) errors.date = "No puede estar vacio"

	if (data.date.length > 0 && data.date.length < 10)
		errors.date = "La fecha esta incompleta"

	return errors
}
