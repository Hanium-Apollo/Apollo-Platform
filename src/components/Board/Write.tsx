import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import styled from "@emotion/styled";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50%;
  right: 50%;
  width: 1440px;
  height: 730px;
  transform: translate(50%, -50%);
`;

// const PreviewContainer = styled.div`
//   width: 100%; /* Set the width you desire */
// `;

export const Write = () => {
  const [value, setValue] = useState("");

  const handleEditorChange = (newValue: string | undefined) => {
    if (typeof newValue === "string") {
      setValue(newValue);
      console.log("User input:", newValue); // 콘솔에 사용자 입력값 출력
    }
  };

  return (
    <Container>
      <MDEditor value={value} onChange={handleEditorChange} preview="edit" />
      {/* <PreviewContainer>
        <MDEditor.Markdown
          source={value}
          style={{ whiteSpace: "pre-wrap", textAlign: "left" }}
        />
      </PreviewContainer> */}
    </Container>
  );
};
