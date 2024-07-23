import { useState } from "react"
import { Modal } from "../Modal/Modal"
import "./Form.css"
import { validation } from "../../utils/validations/Form"

export const Form = () => {
	const [values, setValues] = useState({
		name: "",
		date: "",
	})

	const [objectDate, setObjectDate] = useState({
		day: "",
		month: "",
		year: "",
	})
	const [age, setAge] = useState("")
	const [submit, setSubmit] = useState(false)
	const [errors, setErrors] = useState({
		name: "",
		date: "",
	})

	const handleName = (e) => {
		const { value } = e.target
		const soloLetras = value.replace(/[^a-zA-Z\s]/g, "")

		setValues({ ...values, name: soloLetras })
		setErrors(validation({ ...values, name: value }))
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

		console.log(newValue)

		setObjectDate({
			...objectDate,
			day,
			month,
			year,
		})
		console.log(objectDate)

		setErrors(validation({ ...values, date: newValue }))
		setValues({ ...values, date: newValue })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const year = new Date().getFullYear()
		const month = new Date().getMonth()
		const day = new Date().getDate()

		console.log(year, month, day)
		console.log(Number(objectDate.month))

		let age = year - objectDate.year

		if (
			month < Number(objectDate.month) ||
			(month === Number(objectDate.month) && day < Number(objectDate.day))
		) {
			age--
		}

		setAge(age)

		if (values.name && age) return setSubmit(!submit)
	}

	if (submit) {
		return <Modal name={values.name} age={age} />
	} else {
		return (
			<div className="containerGeneral">
				<div className="containerForm">
					<h1 className="mb-4 text-center title">¿Cuantos años tenes?</h1>
					<form onSubmit={handleSubmit} className="form">
						<div className="mb-3">
							<div className="label mb-1">
								<label htmlFor="inputNombre" className="">
									NOMBRE
								</label>
								<p className="errors">{errors.name}</p>
							</div>
							<input
								type="text"
								id="inputNombre"
								className="form-control"
								placeholder="Nombre"
								value={values.name}
								maxLength={35}
								onChange={handleName}
							/>
						</div>
						<div className="mb-3 mt-4">
							<div className="label mb-1">
								<label htmlFor="inputFecha" className="">
									FECHA DE NACIMIENTO
								</label>
								<p className="errors">{errors.date}</p>
							</div>
							<input
								type="text"
								id="inputFecha"
								className="form-control"
								placeholder="dd/mm/aaaa"
								value={values.date}
								maxLength={10}
								onChange={handleDate}
							/>
						</div>
						<div className="containerButton mt-5">
							<button
								type="submit"
								className="btn buttonRespuesta"
								disabled={Object.values(errors).some((error) => error)}
							>
								Respuesta
							</button>
							{(errors.name || errors.date) && (
								<p className="errors mt-1">
									Por favor, complete los campos correctamente.
								</p>
							)}
						</div>
					</form>
				</div>
			</div>
		)
	}
}
