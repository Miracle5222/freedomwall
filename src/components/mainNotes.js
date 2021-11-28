import React from "react";
import "./mainNotes.css";
import Axios from "axios";

const MainNotes = ({ handlePost, handleUser, post, user, status }) => {
  const colors = [
    "rgb(255, 187, 0)",
    "#ff4d00",
    "rgb(0, 234, 255)",
    "rgb(255, 0, 43)",
    "rgb(255, 0, 212)",
    "rgb(123, 255, 0)",
    "white",
    "lightgray",
    "rgb(238, 255, 0)",
  ];

  const textArea = (e) => {
    handlePost(e.target.value);
  };
  const name = (e) => {
    handleUser(e.target.value);
  };
  const sendPost = () => {
    const color = Math.floor(Math.random() * colors.length);

    if( (post.length <= 0 && user.length <= 0) && (post.length <= 0 || user.length <= 0)){
      status(true);
    } else {
      Axios.post("https://mythoughtswall.herokuapp.com/", {
        datacolor: colors[color],
        postmessage: post,
        username: user,
      });
      status(false);
    }
  };

  return (
    <div className="main-notes">
      <textarea
        row="8"
        cols="10"
        placeholder="What's on your mind?"
        className="textarea"
        onChange={textArea}
      ></textarea>

      <div className="bottom-input">
        <input
          type="text"
          className="myname"
          placeholder="Enter Pseudonym"
          onChange={name}
        />
        <button onClick={sendPost} className="post">
          Post
        </button>
      </div>
    </div>
  );
};

export default MainNotes;
