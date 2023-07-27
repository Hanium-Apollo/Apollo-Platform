import { useNavigate } from "react-router-dom";
import "../../../assets/css/deploy.css";
import "../../../assets/css/MainPage.css"

function ListItem(props: any) {
  const toggleDropdown = () => {
    window.open("https://github.com/", "_blank", "noopener, noreferrer");
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    const value = props.value;
    navigate("/rendering", { state: { value } });
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
        {props.value}
      </li>
      <button className="selectbtn" onClick={handleSubmit}>
        배포
      </button>
    </div>
  );
}

function NumberList(props: any) {
  const numbers = props.numbers;
  const listItems = numbers.map((number: number) => (
    <ListItem key={number.toString()} value={number} />
  ));
  return (
    <div className="listbox">
      <ul style={{ padding: "0px" }}>{listItems}</ul>
    </div>
  );
}

export default NumberList;
