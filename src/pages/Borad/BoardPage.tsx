import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Tab } from "../../components/Board/Tab";
import PostList, { PostProps } from "../../components/Board/PostList";
import { getBoardList } from "../../apis/BoardService";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  max-width: 1440px;
  width: 90vw;
  height: 90vh;
  background-color: #151515;
  opacity: 0.75;
  border-radius: 20px;
  top: 60px;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 10px 10px 20px 10px;
`;
const Bottom = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const BottomItem = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: white;
`;
const BottomButton = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
`;
const Btn = styled(Button)`
  color: whitesmoke;
  cursor: pointer;
  background-color: #4cbccc;
  width: 100px;
  height: 40px;
  font-size: 18px;
  :hover {
    font-weight: bold;
  }
`;

interface TagProps {
  id: string;
  tagName: string;
}

export const Board = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<PostProps[]>();
  const [pages, setPages] = useState<number>(1);
  const [tags, setTags] = useState<TagProps[]>();
  const [page, setPage] = useState<number>(1);
  const GetPost = useCallback(() => {
    getBoardList(page)
      .then((res) => {
        setPosts(res.data.posts);
        setTags(res.data.tags);
        setPages(Number(res.data.count) / 3 + 1);
      })
      .catch((err) => {});
  }, []);
  const handlePage = (i: number) => {
    setPage(i);
    GetPost();
  };
  const handleWrite = () => {
    navigate("board/write");
  };

  useEffect(() => {
    GetPost();
  }, [GetPost]);
  const getPage = () => {
    let pageList = [];
    for (let i = 1; i < pages; i++) {
      pageList.push(
        <div
          style={{
            display: "flex",
            flex: "1",
            cursor: "pointer",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "5px",
            fontWeight: `${page === i ? "bold" : "normal"}`,
          }}
          onClick={() => handlePage(i)}
        >
          i
        </div>
      );
    }
    return pageList;
  };
  return (
    <Container>
      <Tab />
      {posts && <PostList posts={posts} />}
      <Bottom>
        <BottomItem style={{ flex: "1" }}></BottomItem>
        <BottomItem
          style={{ display: "flex", flexDirection: "row", flex: "3" }}
        >
          {getPage()}
        </BottomItem>
        <BottomButton style={{ flex: "1" }}>
          <Btn onClick={handleWrite}>글쓰기</Btn>
        </BottomButton>
      </Bottom>
    </Container>
  );
};
