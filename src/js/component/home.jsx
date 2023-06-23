import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import AppTareas from "./apptareas.jsx";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<AppTareas/>
			{/* <p className="tituloTodos">todos</p>
			<ul className="list-group list-group-flush estiloLista">
				<input placeholder="What needs to be done?"></input>
				<li className="list-group-item">A second item <button type="button" class="btn btn-outline-light">X</button></li>
				
			</ul> */}
		</div>
	);
};

export default Home;
