import React, {useState} from 'react';

export default function changeTestForm() {
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    return(
        <div className='testForm'>
            <input type='text' id='name' onChange={({target})=>setName(target.value)} />
            <input type='text' id='surname' onChange={({target})=>setSurname(target.value)} />
            <div>Your name: {name}</div>
            <div>Your surname: {surname}</div>
        </div>
    );
}