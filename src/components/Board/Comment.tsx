import React from "react";
import { CommentData } from "../../pages/Borad/PostPage";

const Comment = (prop: CommentData) => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "65px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        fontSize: "16px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 15px 10px 15px",
          fontFamily: "MainFont",
        }}
      >
        <div>{prop.writerId}</div>
      </div>

      <div
        style={{
          flex: "1",
          width: "100%",
          padding: "0px 30px 10px 40px",
          wordWrap: "break-word",
          borderBottom: "1px solid #B7BBC8",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        {prop.content}
      </div>
    </div>
  );
};

export default Comment;
