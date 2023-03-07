
import { useState } from "react";



function MySelect() {
  const [myCountry, setMyCountry] = useState("uganda");

  const handleChange = (event) => {
    setMyCountry(event.target.value)
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(myCountry);
  }


  return (
    <div className="select">
    <form onSubmit={handleSubmit}>
      <h1>Select country of origin</h1>
      <select value={myCountry} onChange={handleChange}>
        <option value="kenya">Kenya</option>
        <option value="Uganda">Uganda</option>
        <option value="Rwanda">Rwanda</option>
        <option value="Burundi">Burundi</option>
        <option value="DRC">DRC</option>
        <option value="somalia">somalia</option>
        <option value="sudan">sudan</option>
        <option value="egypt">egypt</option>
        
        
        
        
      </select> <br></br><br></br>

      <input type="submit" />
    </form>  
    </div>
  )
}
export default MySelect;