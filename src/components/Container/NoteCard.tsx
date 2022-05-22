import { useState } from "react";
import "./NoteCard.css";
type noteProps = {
  content: any;
  setList: Function;
  notesList: string[];
  index: number;
};
const NoteCard = (props: noteProps) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  return (
    <div className="note-card">
      <p hidden={!isHidden}>{props.content}</p>
      <input
        type="text"
        className="edit-note"
        id={"edited-note-" + String(props.index)}
        hidden={isHidden}
        defaultValue={props.notesList[props.index]}
      />
      <div className="note-controls">
        <button
          onClick={() => {
            props.notesList.splice(props.index, 1);
            props.setList([...props.notesList]);
          }}
          hidden={!isHidden}
        >
          Delete
        </button>
        <button
          onClick={() => {
            setIsHidden(!isHidden);
          }}
          hidden={!isHidden}
        >
          Edit
        </button>
        <button
          onClick={() => {
            setIsHidden(!isHidden);

            props.notesList[props.index] = (
              document.getElementById(
                "edited-note-" + props.index
              ) as HTMLInputElement
            ).value;

            props.setList([...props.notesList]);
          }}
          hidden={isHidden}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
