import { createContext, useReducer } from "react";
import contactsReducer from "../reducers/contactsReducer";

export const ContactsContext = createContext([]);

const GeneralProvider = ({children}) => {
    const [allContacts, dispatch] = useReducer(contactsReducer, [])
    
    
    const data = {
        allContacts: allContacts,
        dispatch: dispatch
    }

    return (
        <ContactsContext.Provider value={data}>
            {children}
        </ContactsContext.Provider>
    )
}
export default GeneralProvider;