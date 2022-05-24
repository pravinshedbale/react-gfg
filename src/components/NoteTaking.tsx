import { useState } from "react";
import NoteCard from "./Container/NoteCard";
import NoteHolder from "./Container/NoteHolder";
import Navigator from "./Navigator";
import "./NoteTaking.css";
const NoteTaking = () => {
  const [list, setList] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");
  const [searchKey, setSearchKey] = useState<string>("");

  const renderFilteredItem = (listItem: string, index: number) => {
    if (listItem.toLowerCase().includes(searchKey.toLowerCase())) {
      return <NoteCard key={index} content={listItem} setList={setList} notesList={list} index={index}></NoteCard>;
    }
    return;
  };
  return (
    <>
      <Navigator />
      <NoteHolder>
        <input type="text" name="search" id="search-text" value={searchKey} onChange={(e) => setSearchKey(e.target.value)} />
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
            value ? setList([...list, value]) : alert("Can't Add Empty Note");
            setValue("");
          }}
        >
          Add
        </button>
        {/* 
        {list.map((item, i) => {
          return <NoteCard key={i} content={item} setList={setList} notesList={list} index={i}></NoteCard>;
        })} */}
        {list.map(renderFilteredItem)}
      </NoteHolder>
    </>
  );
};

export default NoteTaking;
