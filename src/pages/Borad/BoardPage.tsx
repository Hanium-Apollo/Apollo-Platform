import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import styled from "@emotion/styled";

const ExampleBox = styled.div`
  margin-top: 20px;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 50%;
  position: absolute;
`;

export const Board = () => {
  const [value, setValue] = useState("");

  const handleEditorChange = (newValue: string | undefined) => {
    if (typeof newValue === "string") {
      setValue(newValue);
    }
  };

  return (
    <ExampleBox>
      <MDEditor value={value} onChange={handleEditorChange} preview="edit"/>
      <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
    </ExampleBox>
  );
};
