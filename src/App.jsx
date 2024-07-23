import { Form } from "./components/Form/Form"
import Logo from "./assets/lightdata_violeta.png"

import "./App.css"
import { Route, Routes } from "react-router-dom"

function App() {
	return (
		<div className="containerBody">
			<div className="continerLogo">
				<img src={Logo} alt="LightData" className="image" />
			</div>
			<Routes>
				<Route path="/" element={<Form />} />
			</Routes>
		</div>
	)
}

export default App
