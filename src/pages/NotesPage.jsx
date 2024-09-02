import React, { useContext } from "react";
import NoteCard from "../components/NoteCard";
import { NoteContext } from "../context/NoteContext";
import Controls from "../components/Controls";

const NotesPage = () => {
  const { notes, setNotes } = useContext(NoteContext);
  return (
    <div>
      {notes.map((note) => (
        <div className="note-card-animate">
          <NoteCard note={note} key={note.$id} />
        </div>
      ))}
      <Controls />
    </div>
  );
};

export default NotesPage;
