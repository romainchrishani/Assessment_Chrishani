import React, { useState } from "react";
import axios, { Axios } from "axios";
import "./App.css";

function App() {
  const [emojiSequence, setEmojiSequence] = useState("");
  const [authorNickname, setAuthorNickname] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const addStory = () => {
    Axios.post('http://localhost:8080/create-story', {
      emojiSequence,
      authorNickname,
      createdAt,
    });
  };

  return <div className="App">
    <label>emojiSequence</label>
    <input type="text" onChange={(e)=>{setEmojiSequence(e.target.value);}}/>

    <label>authorNickname</label>
    <input type="text" onChange={(e)=>{setAuthorNickname(e.target.value);}}/>

    <label>createdAt</label>
    <input type="date" onChange={(e)=>{setCreatedAt(e.target.value);}}/>

    <button onClick={addStory}>Add Story</button>
  </div>;
}

export default App;
