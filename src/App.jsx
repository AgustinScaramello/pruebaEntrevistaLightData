import { Form } from "./components/Form"
import Logo from "./assets/lightdata_violeta.png"

import "./App.css"

function App() {
	return (
		<div className="containerGeneral">
			<img src={Logo} alt="LightData" className="mb-2" />
			<h1 className="fs-2 mb-4">¿Cuantos años tenes?</h1>
			<Form />
		</div>
	)
}

export default App
