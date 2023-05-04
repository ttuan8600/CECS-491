import React, { useState } from 'react';

const Form = () => {
    
    const [name, setName] = useState('');
    
    const handleSubmit = (e) => {

        console.log(name); 

    }

    return(
        <form onSubmit = {handleSubmit}>
            <input onChange = {(e) => setName(e.target.value)} value = {name}></input>
            <button type = 'submit'>Click to submit</button>
        </form>
    );
    
}

export default Form;