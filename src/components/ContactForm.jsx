import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });
 const handleChange=(e)=>{
  setForm({...form,
    [e.target.name] : e.target.value})
 }
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response=await fetch("http://localhost:5000/contact",
        { method:"POST",headers:{"Content-Type":
            "application/json"},
            body:JSON.stringify(form)
        }

      );
    const data =await response.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter your Details</h2>
      <input type="text" name="name" placeholder="Enter your Name " onChange={handleChange}></input> 
      <input type="email" name="email" placeholder="Enter your email " onChange={handleChange}></input> 

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
