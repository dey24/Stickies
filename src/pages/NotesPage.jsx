import React, { useContext, useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import { NoteContext } from "../context/NoteContext";
import Controls from "../components/Controls";

const NotesPage = () => {
  const { notes, setNotes } = useContext(NoteContext);
  const [width, setWidth] = useState();
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(notes);
  return (
    <>
      <div>
        {notes.length != 0 ? (
          notes.map((note) => (
            <div className="note-card-animate">
              <NoteCard note={note} key={note.$id} />
            </div>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: width < 530 ? "space-between" : "center",
              height: "100vh",
              alignItems: "center",
              background:
                "linear-gradient(to top, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3))",
            }}
          >
            <h1 style={{ fontFamily: "fantasy", fontSize: "calc(30px + 3vw)" }}>
              Sticky Notes App
              <br />
              <span
                style={{
                  fontFamily: "fantasy",
                  fontSize: "calc(20px + 0.5vw)",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Click on the add button to add notes
              </span>
            </h1>
            {/* <div
              style={{
                display: "flex",
                gap: "25px",
                padding: width < 530 ? "10px" : "0",
              }}
            >
              <button
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Register
              </button>
              <button
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Login
              </button>
            </div> */}
          </div>
        )}
        <Controls width={width} />
      </div>
    </>
  );
};

export default NotesPage;
