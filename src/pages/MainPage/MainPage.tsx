import React, {useState} from "react";
import logoname from '../../assets/images/logoname.png';
import github from '../../assets/images/github_logo.png';
import '../../assets/css/MainPage.css';



function Main() {
    const [isLogin, setIsLogin] = useState(false);
    const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleLogin = () => {
    // 깃허브 OAuth 인증 URL
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=eb98b73d98c77c524840&redirect_uri=http://localhost:3000/success`;

    // 깃허브 OAuth 인증 페이지로 리다이렉트
    window.location.href = githubAuthUrl;
  };

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
    // 서버로 전송 후 필요한 로직을 추가해야 합니다.
  };
    
    return (
        <div>
            <img src={logoname} className="logoname" alt="logoname" />
            {isLogin ? (
                <form onSubmit={handleLogin}>
                <input className="inputname" type="text" value={inputValue1} onChange={handleInputChange1} placeholder="서비스 이름을 입력해주세요"/>
                <input className="inputURL" type="text" value={inputValue2} onChange={handleInputChange2} placeholder="Github URL을 입력해주세요"/>
                <button className="startbtn" type="submit">start</button>
                </form>
            ) : (
                <button className="login" onClick={handleLogin}>
                <img src={github} className="github" alt="github" />Log in with GitHub
                </button>
            )}
        </div>
      
    );
}

export default Main;
