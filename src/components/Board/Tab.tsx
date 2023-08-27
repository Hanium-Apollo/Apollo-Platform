import styled from "@emotion/styled";
import { useState } from "react";
import { TagProps } from "../../pages/Board/BoardPage";
import Tag from "./tag";

const TabContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #151515;
  z-index: 5;
  border-radius: 20px 20px 0px 0px;
  border-bottom: 2px solid #4cbccc;
`;

const TabMenu = styled.ul`
  background-color: transparent;
  color: rgb(232, 234, 237);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 7rem;
  margin: 0px;
  display: flex;
  flex-direction: row;

  .submenu {
    display: flex;
    width: 200px;
    padding: 10px;
    font-size: 15px;
    transition: 0.5s;
    cursor: pointer;
    flex: 1;
  }

  .focused {
    font-size: 18px;
    font-weight: bold;
    color: #4cbccc;
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  text-align: center;
  width: 100%;
  color: #4cbccc;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow: auto;
  scrollbehavior: smooth;
`;
interface TagListProps {
  tags: TagProps[];
}

export const Tab = (prop: TagListProps) => {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [{ name: "Question ✓" }, { name: "Tags (#)" }];
  const selectMenuHandler = (index: number) => {
    clickTab(index);
  };
  const tagItems = prop.tags.map((item, index) => (
    <Tag tagName={item.tagName} />
  ));

  return (
    <>
      <TabContainer>
        <TabMenu>
          {menuArr.map((el, index) => (
            <li
              className={index === currentTab ? "submenu focused" : "submenu"}
              onClick={() => selectMenuHandler(index)}
            >
              {el.name}
            </li>
          ))}
          <div
            style={{
              flex: "2.5",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <input
              placeholder="검색어를 입력해주세요"
              style={{
                display: "flex",
                flex: "1",
                border: "none",
                borderRadius: "20px",
                marginRight: "10px",
                paddingLeft: "5px",
              }}
            ></input>
            <div> 검색</div>
          </div>
        </TabMenu>
      </TabContainer>
      {menuArr[currentTab].name === "Tags (#)" && <Desc>{tagItems}</Desc>}
    </>
  );
};
