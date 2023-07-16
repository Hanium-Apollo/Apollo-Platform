import { useNavigate } from 'react-router-dom';
import '../../../assets/css/MainPage.css'


function ListItem(props : any) {
    const toggleDropdown = () => {
        window.open("https://github.com/", "_blank", "noopener, noreferrer");
    };
    const navigate = useNavigate();
    const handleSubmit = () => {
        console.log(props.value); // 예시: 콘솔에 입력값 출력
        navigate("/rendering");
        // 서버로 전송 후 필요한 로직을 추가해야 합니다.
    };
    //맞습니다. 여기에는 key를 지정할 필요가 없습니다.
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
        <li className="list" onClick={() => toggleDropdown()} style={{ cursor: 'pointer' }}>{props.value}</li>
        <button className="selectbtn" onClick={handleSubmit}>배포</button>
        </div>
    );
}
  
function NumberList(props : any) {
    const numbers = props.numbers;
    const listItems = numbers.map((number : number) =>
      //맞습니다. 배열 안에 key를 지정해야 합니다.
      <ListItem key = {number.toString()} value={number} />
    );
    return (
        <div className="listbox">
      <ul style = {{padding: '0px'}}>
        {listItems}
      </ul>
      </div>
    );
};


  export default NumberList;