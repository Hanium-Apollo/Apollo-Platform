import { useNavigate } from "react-router-dom";
import "../../../assets/css/deploy.css";
import "../../../assets/css/MainPage.css";

type RepoData = {
  userLogin: string;
  repoName: string;
  repoUrl: string;
};

type ListItemProps = {
  repoName: string;
  repoUrl: string;
};

type NumberListProps = {
  repo: RepoData[];
};

const ListItem = ({ repoName, repoUrl }: ListItemProps) => {
  const toggleDropdown = () => {
    window.open(repoUrl, "_blank", "noopener, noreferrer");
  };
  const navigate = useNavigate();

  const handleClick = () => {navigate("/rendering", { state: { repoName } })};
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
    >
      <li
        className="list"
        onClick={() => toggleDropdown()}
        style={{ cursor: "pointer" }}
      >
        {repoName}
      </li>
      <button className="selectbtn" onClick={() => handleClick()}>
        배포
      </button>
    </div>
  );
};

const NumberList = ({ repo }: NumberListProps) => {
  const listItems = repo.map((item, index) => (
    <ListItem
      key={index.toString()}
      repoName={item.repoName}
      repoUrl={item.repoUrl}
    />
  ));
  return (
    <div className="listbox">
      <ul style={{ padding: "0px" }}>{listItems}</ul>
    </div>
  );
};

export default NumberList;
