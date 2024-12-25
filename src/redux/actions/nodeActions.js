// Action constant

 export const ADD_NOTE = "Add note";
 export const  DELETE_NOTE = "Delete Note";

//Action Creators
export const addNotes = (text)=> ({text, type:ADD_NOTE});
export const deleteNote = (index) => ({index , type: DELETE_NOTE});