import React, { useEffect, useState } from "react";
import "./container.css";
import Notes from "./notes";
import MainNotes from "./mainNotes";
import Axios from "axios";
import { TiWarning } from "react-icons/ti";

const Container = () => {
  const [post, setPost] = useState("");
  const [user, setUser] = useState("");
  const [empty, setEmpty] = useState(false);
  const [newData, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://mythoughtswall.herokuapp.com/post").then((response) => {
      setData((prevState) => {
        return (prevState = response.data);
      });
    });
  });

  return (
    <>
      {empty && (
        <div className="container-error">
          <TiWarning className="error-icon" />
          <span className="error">Please enter some text!</span>
        </div>
      )}

      <div className="container">
        <MainNotes
          status={setEmpty}
          handlePost={setPost}
          handleUser={setUser}
          user={user}
          post={post}
        />
        {newData.map((val) => {
          return (
            <Notes
              post={val.post}
              name={val.name}
              key={val.id}
              color={val.color}
            />
          );
        })}
      </div>
    </>
  );
};

export default Container;
