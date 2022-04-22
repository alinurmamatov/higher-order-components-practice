import React, { useContext, useState } from 'react';
import { ContactsContext } from '../context/GeneralContext';
import * as actions from '../reducers/actions';

function Contacts() {
    const {allContacts, dispatch} = useContext(ContactsContext);
    const howManyElPerPage = 5;
    const howManyPages = Math.ceil(allContacts.length / howManyElPerPage);
    const arrayButtons = new Array(howManyPages).fill('btnPage');
    const [pageNow, setPageNow] = useState(0);
    const start = pageNow * howManyElPerPage;
    const end = start + howManyElPerPage;
    const partialShowContact = allContacts.slice(start, end);

  return (
    <>
    {
        partialShowContact.map((contact) => {
            return (
                <li key={contact.id}>{contact.name} {contact.phone} <button onClick={() => dispatch({type: actions.DELETECONTACT, payload: contact.id})}>Delete</button></li>
            )
        })
    }
    <div>
        {
            arrayButtons.map((page, pageIndex) => {
                return (
                    <button key={page + pageIndex} onClick={() => setPageNow(pageIndex)}>{pageIndex + 1}</button>
                )
            })
        }
    </div>
    </>
  )
}

export default Contacts;