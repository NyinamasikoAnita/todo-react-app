import {useState} from "react"

function MyForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(name,email,password)
    }

    return(
        <div className="sign_up">
      <form onSubmit={handleSubmit}>

       <h1> Sign Up</h1>
      
      <label className="labels">Name:<br></br>
        <input className="inputs" type="text" value= {name}  
        onChange={(e) => setName(e.target.value)}
        placeholder='enter name here'/>
      </label>  <br></br> <br></br>

      <label className="labels">Email:<br></br>
      <input className="inputs" type="text" 
       value= {email}
       onChange={(e) => setEmail(e.target.value)}
       placeholder= 'enter email here'/>
      </label>  <br></br> <br></br>

      <label className="labels"> Password:<br></br>
        <input className="inputs" type= "password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>

      </label> <br></br> <br></br>

       <input type= "submit"/> <br></br><br></br>
      </form>
    </div>
    )
  }

export default MyForm;