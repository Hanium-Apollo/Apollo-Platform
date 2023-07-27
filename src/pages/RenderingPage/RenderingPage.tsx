import { useEffect, useState, useCallback } from "react";
import "../../assets/css/RenderingPage.css";
import { useLocation, useNavigate } from "react-router-dom";

function Rendering() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const value = location.state?.repoName;

  const goToSuccess = useCallback(() => {
    navigate("/success", { state: { value } });
  }, [navigate, value]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      goToSuccess();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [goToSuccess]);

  return (
    <div className="loading-container">
      <p className="rmessage">WAIT A MINUTE !</p>
      {isLoading ? <div className="moving-image"></div> : <div></div>}
    </div>
  );
}

export default Rendering;
