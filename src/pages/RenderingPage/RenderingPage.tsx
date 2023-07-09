import React, {useEffect, useState} from "react";
import '../../assets/css/RenderingPage.css';
import { useNavigate } from "react-router-dom";




function Rendering() {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const goToSuccess = () => {
        navigate("/success");
    }

  useEffect(() => {
    // 로딩 시뮬레이션 (예: setTimeout, API 요청 등)
    const timeout = setTimeout(() => {
      setIsLoading(false);
      goToSuccess();
    }, 10000);
    // 컴포넌트가 언마운트되면 타임아웃 클리어
    return () => clearTimeout(timeout);
  }, []);

  return (
      <div className="loading-container">
        <p className="rmessage">WAIT A MINUTE !</p>
        {isLoading ? (
          <div className="moving-image"></div>
        ) : (
          <div>
          </div>
        )}
      </div>
      
    );
}

export default Rendering;
