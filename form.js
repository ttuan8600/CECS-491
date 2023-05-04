import React, { useState } from 'react';
import { write } from './491/src/test';

const Form = () => {
    
    const [name, setName] = useState('');
    
    const handleSubmit = (e) => {

        write({name: name}); 

    }

    return(
        <form onSubmit = {handleSubmit}>
            <input onChange = {(e) => setName(e.target.value)} value = {name}></input>
            <button type = 'submit'>Click to submit</button>
        </form>
    );
    
}

export default Form;