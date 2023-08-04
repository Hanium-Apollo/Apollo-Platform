import { useEffect, useCallback } from "react";
import "../../assets/css/RenderingPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import { postRepoCreateService } from "../../apis/RepoService";

function Rendering() {
  const location = useLocation();
  const navigate = useNavigate();
  const repoName = location.state?.repoName;

  const startDeploy = useCallback(() => {
    if (repoName) {
      console.log("repoName: ", repoName);
      postRepoCreateService(repoName)
        .then((response) => {
          console.log("success");
          console.log(response);
          navigate("/success", { state: { repoName } });
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }
  }, [repoName, navigate]);
  useEffect(() => {
    startDeploy();
  }, [startDeploy]);

  return (
    <div className="loading-container">
      <p className="rmessage">WAIT A MINUTE !</p>
      <div className="moving-image"></div>
    </div>
  );
}

export default Rendering;
