import "./NoteCard.css";
type noteProps = {
  content: any;
  setList: Function;
  notesList: String[];
  index: number;
};
const NoteCard = (props: noteProps) => {
  return (
    <div className="note-card">
      {props.content}
      <div className="note-controls">
        <button
          onClick={() => {
            props.notesList.splice(props.index, 1);
            props.setList([...props.notesList]);
          }}
        >
          Delete
        </button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default NoteCard;
