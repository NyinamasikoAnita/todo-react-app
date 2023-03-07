
import { useState } from "react";




function MyTextarea() {
    const [textarea, setTextarea] = useState(
      
    );
  
    const handleChange = (event) => {
      setTextarea(event.target.value)
    }

    const handleSubmit= (event) => {
      event.preventDefault();
      console.log(textarea);
      
    }
  
    return (
      <div className='textarea'>
      <form onSubmit={handleSubmit}>
        <h1>Biography.</h1>
        <textarea className="text" value={textarea} onChange={handleChange} /> <br></br><br></br>
        <input type= 'submit'/> <br></br> <br></br>
      </form> 
      </div>
    )
  }
  
export default MyTextarea;   
