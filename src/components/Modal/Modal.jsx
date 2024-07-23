import { useState } from "react"
import { Form } from "../Form/Form"
import "./Modal.css"

export const Modal = ({ name, age }) => {
	const [back, setBack] = useState(false)

	const handleBack = () => {
		return setBack(!back)
	}

	if (back) {
		return <Form />
	} else {
		return (
			<div className="containerModal">
				<div className="containersaludo">
					<h2 className="saludo">Hola {name}!</h2>
				</div>
				<div className="containerEdad">
					<h1 className="edad">TU EDAD ES {age} AÑOS</h1>
				</div>
				<button
					type="submit"
					className="btn buttonRespuesta"
					onClick={handleBack}
				>
					Volver
				</button>
			</div>
		)
	}
}
