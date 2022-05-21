import { useState } from "react";
import NoteCard from "./Container/NoteCard";
import NoteHolder from "./Container/NoteHolder";
import Navigator from "./Navigator";
import "./NoteTaking.css";
const NoteTaking = () => {
  const [list, setList] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");
  return (
    <>
      <Navigator />
      <NoteHolder>
        <input
          type="text"
          className="note-text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          className="add-note"
          onClick={() => {
            value ? setList([...list, value]) : alert("Cant Add Empty Note");
            setValue("");
          }}
        >
          Add
        </button>

        {list.map((item, i) => {
          return (
            <NoteCard
              key={i}
              content={item}
              setList={setList}
              notesList={list}
              index={i}
            ></NoteCard>
          );
        })}
      </NoteHolder>
    </>
  );
};

export default NoteTaking;
