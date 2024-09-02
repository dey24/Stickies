import { useContext } from "react";
import { db } from "../appwrite/databases";
import Trash from "../icons/TrashIcon";
import { NoteContext } from "../context/NoteContext";

const DeleteButton = ({ noteId }) => {
  const { notes, setNotes } = useContext(NoteContext);
  const handleDelete = async () => {
    console.log(noteId);

    db.notes.delete(noteId);
    // Update the state with the new array
    setNotes((prevState) => prevState.filter((note) => note.$id !== noteId));
  };

  console.log(notes);
  return (
    <div onClick={handleDelete}>
      <Trash />
    </div>
  );
};

export default DeleteButton;
