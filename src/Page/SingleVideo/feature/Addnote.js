import { v4 as uuid } from "uuid";

import { useContext, useRef, useState } from "react";
import { DataContext } from "../../../Context/DataContext";
import { useClickOutside } from "../../../CustomHook/useClickOutside";

export default function Addnote({ videoId, setModal }) {
  const [noteInfo, setNoteInfo] = useState("");
  const { dispatch } = useContext(DataContext);
  const submithandler = (e) => {
    setModal(false);
    setNoteInfo("");
    dispatch({
      type: "ADD_NOTE",
      payLoad: {
        videoId: videoId,
        NoteInfo: {
          _id: uuid(),
          note: noteInfo
        }
      }
    });
    e.preventDefault();
  };

  return (
    <div
      style={{
        width: "200px",
        padding: "1rem",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
      }}
    >
      <h1>ADD Note</h1>
      <form onSubmit={submithandler}>
        <textarea
          value={noteInfo}
          rows="3"
          onChange={(e) => setNoteInfo(e.target.value)}
          required
          placeholder="ADDD Note"
        />
        <button type="submit">ADD New Note</button>
      </form>
    </div>
  );
}
