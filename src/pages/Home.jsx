import { useState, useEffect } from "react";
import { CardContact } from "../components/CardContact";
import { NavLink } from "react-router-dom";
import { getContacts } from "../api/api";



export const Home = () => {

	const [contacts, setContacts] = useState([]) //Estos corchetes representan un array
	useEffect(() => {
		async function fetchData() {
			const datos = await getContacts()
			setContacts(datos);
			console.log(datos);

		}
		fetchData()


	}, [])	//Si el arraray estta  vacio, la funciono ejectura una vez
	//Si hay una variable dentro del array, el bloque de codigo se ejectura cada vez que la variable cambie. 
	return (
		<div className="text-center m-5">
			<NavLink to="/add-contact" className="btn btn-success">
				Add New Contact
			</NavLink>

			{contacts.length !== 0 ?
				contacts.map((item) => {
					return <CardContact contact={item} />
				}) : <p>No hay contactos</p>}



		</div>
	);
}; 