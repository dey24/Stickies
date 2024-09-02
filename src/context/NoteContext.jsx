import { createContext, useEffect, useState } from "react";
import Spinner from "../icons/SpinnerIcon";
import { db } from "../appwrite/databases";
import { grid } from "ldrs";

export const NoteContext = createContext();

const NotesProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const [notes, setNotes] = useState();
  const [selectedNote, setSelectedNote] = useState(null);

  const initData = async () => {
    const response = await db.notes.list();

    // console.log(response);
    setNotes(response.documents);
    setLoading(false);
  };

  useEffect(() => {
    initData(); //function to fetch data
  }, []);

  grid.register();
  const contextData = { notes, setNotes, selectedNote, setSelectedNote };
  return (
    <NoteContext.Provider value={contextData}>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <l-grid size="60" speed="1.5" color="white"></l-grid>
        </div>
      ) : (
        children
      )}
    </NoteContext.Provider>
  );
};

export default NotesProvider;
