import { useState } from "react";
import "./NoteForm.css";
import { useDispatch } from "react-redux";
import { addNotes } from "../../redux/actions/nodeActions"; // Use 'addNotes' to match your action creator

function NoteForm() {

  const [noteText, setNoteText] = useState("");

  console.log("noteText", noteText);
  
  const dispatch = useDispatch(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the action to add the note
    dispatch(addNotes(noteText));

    // Clear the note text after dispatching the action
    setNoteText("");
  };

  return (
    <div className="container">
      <form onSubmit = {handleSubmit}>
        <textarea
          type="text"
          className="form-control mb-3"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
       
        />
        <button className="btn btn-success float-end" type="submit">
          Create Note
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
