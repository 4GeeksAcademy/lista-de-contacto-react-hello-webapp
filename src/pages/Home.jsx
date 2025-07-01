import { useState, useEffect } from "react";
import { CardContact } from "../components/CardContact";
import { NavLink } from "react-router-dom";
import { getContacts } from "../api/api";



export const Home = () => {

	const [contacts, setContacts] = useState([])
	useEffect(()=>{
		const datos = getContacts()
		setContacts(datos)
			}, [])	//Si el arraray estta  vacio, la funciono ejectura una vez
					//Si hay una variable dentro del array, el bloque de codigo se ejectura cada vez que la variable cambie. 
	return (
		<div className="text-center mt-5">

			
			{contacts.map((item)=>{
				return <CardContact contact={item} />
			})}
			<NavLink to="/add-contact" className="btn btn-success">
				Add New Contact
			</NavLink>


		</div>
	);
}; 