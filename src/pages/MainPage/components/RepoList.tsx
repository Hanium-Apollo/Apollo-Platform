import { useNavigate } from "react-router-dom";
import "../../../assets/css/deploy.css";
import "../../../assets/css/MainPage.css"

type RepoData = {
  userLogin: string;
  repoName: string;
  repoUrl: string;
};

type ListItemProps = {
  repoName: string;
  repoUrl: string;
};

// RepoData 배열을 받아올 NumberListProps의 형식을 선언합니다.
type NumberListProps = {
  repo: RepoData[];
};

const ListItem: React.FC<ListItemProps> = ({ repoName, repoUrl }) => {
  const toggleDropdown = () => {
    window.open(repoUrl, "_blank", "noopener, noreferrer");
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    const name = repoName;
    navigate("/rendering", { state: { name } });
  };
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
      <button className="selectbtn" onClick={handleSubmit}>
        배포
      </button>
    </div>
  );
}

const NumberList: React.FC<NumberListProps> = ({ repo }) => {
  const listItems = repo.map((item, index) => (
    <ListItem key={index.toString()} repoName={item.repoName} repoUrl={item.repoUrl} />
  ));
  return (
    <div className="listbox">
      <ul style={{ padding: "0px" }}>{listItems}</ul>
    </div>
  );
}

export default NumberList;
