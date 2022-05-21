import "./NoteHolder.css";
const NoteHolder = (props: any) => {
  return <div className="note-holder">{props.children}</div>;
};

export default NoteHolder;
