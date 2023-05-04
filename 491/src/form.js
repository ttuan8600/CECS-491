import React, { useState } from 'react';
import axios from 'axios';

function Form(){
    
    const [name, setName] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await axios.post(
            `http://localhost:3001/api?name=${name}&teacherId=0101`
        );
        console.log(response.data);
    }

    return(
        <form onSubmit = {handleSubmit}>
        <input onChange = {(e) => setName(e.target.value)} value = {name}></input>
        <button type = 'submit'>Click to submit</button>
    </form>
    );
    
}

export default Form;