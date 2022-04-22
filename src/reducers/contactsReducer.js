import * as actions from './actions';


const contactsReducer = (state, action) => {
    switch(action.type){
        case actions.ADDCONTACT:
            return [...state, action.payload]
        case actions.DELETECONTACT:
            return state.filter(contact => contact.id !== action.payload)
        default:
            return state
    }    
}
export default contactsReducer;