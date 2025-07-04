import Form from "../components/Forms"
import { NavLink } from "react-router-dom"


export const CreateContact = () => {

    return (

        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <Form />
            <NavLink to="/">or go back to contacts</NavLink>
        </div>
    )



}