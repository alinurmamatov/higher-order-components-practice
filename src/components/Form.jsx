import React, { useContext, useState } from 'react';
import { ContactsContext } from '../context/GeneralContext';
import * as actions from '../reducers/actions';
import {v4 as uuidv4} from 'uuid';

function Form() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);
    const {allContacts, dispatch} = useContext(ContactsContext);

  return (
    <>
    <input value={name} onChange={(e) => setName(e.target.value)} />
    <input value={phone} onChange={(e) => setPhone(e.target.value)} />
    <button onClick={() => dispatch({type: actions.ADDCONTACT, payload: {name: name, phone: phone, id: uuidv4()}})}>Add Contact</button>
    </>
  )
}

export default Form;