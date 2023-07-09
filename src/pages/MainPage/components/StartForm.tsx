import React, {useState, useEffect} from "react";
import '../../../assets/css/button.css';
import { useNavigate } from "react-router-dom";

function StartForm() {
    const navigate = useNavigate();
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');  
    const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue1(event.target.value);
    };
    const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue2(event.target.value);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // 서버로 입력값 전송하기
        console.log(inputValue1, inputValue2); // 예시: 콘솔에 입력값 출력
        navigate("/rendering");
        // 서버로 전송 후 필요한 로직을 추가해야 합니다.
    };
    return (
        <form onSubmit={handleSubmit}>
            <input className="inputname" type="text" value={inputValue1} onChange={handleInputChange1} placeholder="서비스 이름을 입력해주세요"/>
            <input className="inputURL" type="text" value={inputValue2} onChange={handleInputChange2} placeholder="Github URL을 입력해주세요"/>
            <button className="startbtn">시작하기</button>
        </form>
    );
}

export default StartForm;