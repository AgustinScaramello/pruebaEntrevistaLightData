import { useState } from "react"
import "./Form.css"

export const Form = () => {
	const [valueName, setValueName] = useState("")
	const [valueDate, setValueDate] = useState("")

	const handleName = (e) => {
		const { value } = e.target
		const soloLetras = value.replace(/[^a-zA-Z\s]/g, "")
		setValueName(soloLetras)
	}

	const handleDate = (e) => {
		let { value } = e.target

		value = value.replace(/[^\d]/g, "")

		let day = value.substring(0, 2)
		if (day > 31) day = "31"
		if (day.length === 1 && day > 3) day = "0" + day

		let month = value.substring(2, 4)
		if (month > 12) month = "12"
		if (month.length === 1 && month > 1) month = "0" + month

		let year = value.substring(4, 8)
		const currentYear = new Date().getFullYear()
		if (year > currentYear) year = currentYear.toString()

		let newValue = ""
		if (day) newValue += day
		if (month) newValue += "/" + month
		if (year) newValue += "/" + year

		setValueDate(newValue)
	}

	return (
		<div className="containerForm">
			<form action="">
				<div className="mb-3">
					<label htmlFor="inputNombre" className="form-label">
						Nombre y apellido
					</label>
					<input
						type="text"
						id="inputNombre"
						className="form-control"
						placeholder="Juan Perez"
						value={valueName}
						maxLength={35}
						onChange={handleName}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="inputFecha" className="form-label">
						Fecha de Nacimiento
					</label>
					<input
						type="text"
						id="inputFecha"
						className="form-control"
						placeholder="dd/mm/aaaa"
						value={valueDate}
						maxLength={10}
						onChange={handleDate}
					/>
				</div>
				<div className="containerButton mt-5">
					<button type="submit" className="btn buttonRespuesta">
						Respuesta
					</button>
				</div>
			</form>
		</div>
	)
}
