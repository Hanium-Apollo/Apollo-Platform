import { useNavigate } from "react-router-dom";
import "../../assets/css/deploy.css";
import Button from "../../components/button/Button";

function ListItem(props: any) {
  const navigate = useNavigate();
  const handleSubmit = () => {
    const value = props.value;
    console.log(props.value); // 예시: 콘솔에 입력값 출력
    navigate("/monitor", { state: { value } });
    // 서버로 전송 후 필요한 로직을 추가해야 합니다.
  };
  //맞습니다. 여기에는 key를 지정할 필요가 없습니다.
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
    >
      <li className="list">{props.value}</li>
      <button className="selectbtn" onClick={handleSubmit}>
        모니터링
      </button>
    </div>
  );
}

function NumberList(props: any) {
  const numbers = props.numbers;
  const listItems = numbers.map((number: number) => (
    //맞습니다. 배열 안에 key를 지정해야 합니다.
    <ListItem key={number.toString()} value={number} />
  ));
  return (
    <div className="deploylist">
      <ul style={{ padding: "0px" }}>{listItems}</ul>
    </div>
  );
}

function DeployList(props: any) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div className="deploy">
      <div className="name">배포 중인 서비스</div>
      <NumberList numbers={numbers} />
      <Button css={"fhomebtn"} text={"home"} />
    </div>
  );
}

export default DeployList;
