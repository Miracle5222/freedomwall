import React from "react";
import "./notes.css";
import { FaRegUser } from "react-icons/fa";

const Notes = ({ post, name, color }) => {
  return (
    <div className="notes-container" style={{ backgroundColor: `${color}` }}>
      <div className="top" style={{ backgroundColor: `${color}` }}></div>
      {post.length >= 100 ? (
        <div className="notes" style={{ paddingTop: "120px" }}>
          <span>{post}</span>
        </div>
      ) : (
        <div className="notes">
          <span>{post}</span>
        </div>
      )}
      <h4 className="name">
        <FaRegUser className="hero" />
        {name}
      </h4>
    </div>
  );
};

export default Notes;
