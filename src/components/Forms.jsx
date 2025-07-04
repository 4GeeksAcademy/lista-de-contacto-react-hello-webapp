import { useState } from "react"
import { createContact } from "../api/api"; // Asegúrate que el path esté correcto


function Form() {

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

const handleSubmit = async (e) => {
    e.preventDefault();

    const newContact = {
      full_name: fullName,
      email,
      phone,
      address,
      agenda_slug: "andersontbernal"
    };

    try {
      await createContact(newContact);
      alert("Contacto creado exitosamente");
      // opcional: redirige o limpia campos
      setFullName("");
      setEmail("");
      setPhone("");
      setAddress("");
    } catch (error) {
      alert("Hubo un error al crear el contacto");
      console.error(error);
    }
  };


  return (
      
      <form style={{ margin: "15px", border: "none", boxShadow: "none", background: "transparent" }} onSubmit={handleSubmit}>

      <h1 className="text-center">Add a new contact</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputFullName" className="form-label fw-bold">FullName</label>
        <input type="text" placeholder= "Full Name" className="form-control" id="exampleInputFullName" onChange={(e) => setFullName(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
        <input type="email" placeholder="Email address" className="form-control" id="exampleInputEmail1"  onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPhone" className="form-label fw-bold">Phone</label>
        <input type="tel" placeholder="Email address" className="form-control" id="exampleInputPhone"  onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputAdress" className="form-label fw-bold">Address</label>
        <input type="text" placeholder="Address" className="form-control" id="exampleInputAdress"  onChange={(e) => setAddress(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>

  )
}
export default Form