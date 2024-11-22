import { useState } from 'react';

function Form() {
    const [name, setName] = useState({firstName: "", lastName: ""});
    function handleChange(e){
        setName({...name, [e.target.id]: e.target.value});
    }

    function submitForm(e){
        e.preventDefault();
        console.log(name);
    }
  return (
    <div>
        <form>
            <h1>{name.firstName} - {name.lastName}</h1>
            <label>First Name: </label>
            <input type="text" id="firstName" onChange={(e) => handleChange(e)} value={name.firstName}/>
            <br></br>
            <label>Last Name: </label>
            <input type="text" id="lastName" onChange={(e) => handleChange(e)} value={name.lastName}/>
            <button onClick={submitForm}>Submit</button>
        </form>
    </div>
  )
}

export default Form
