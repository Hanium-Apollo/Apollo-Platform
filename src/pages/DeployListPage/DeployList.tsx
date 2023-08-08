import { useNavigate } from "react-router-dom";
import "../../assets/css/deploy.css";
import Button from "../../components/button/Button";
import { useCallback, useEffect, useState } from "react";
import {
  clientRepoDeleteService,
  getClientDeployListService,
  getServerDeployListService,
  serverRepoDeleteService,
} from "../../apis/RepoService";
import { UserInfo } from "../../apis/UserServiceType";
type deployData = {
  repoName: string;
  type: string;
};
type ListItemProps = {
  deploylist: deployData[];
  type: string;
};

function ListItem({ repoName, type }: deployData) {
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log(repoName);
    navigate("/monitor", { state: { repoName } });
  };
  const handleClick = () => {
    if (type === "client") {
      clientRepoDeleteService(repoName)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else if (type === "server") {
      serverRepoDeleteService(repoName)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
    navigate("/deploylist");
  };
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
    >
      <li className="list">{repoName}</li>
      type === "client" ? (
      <button className="selectbtn" onClick={() => handleClick()}>
        삭제
      </button>
      ) : (
      <button className="deploybtn1" onClick={handleSubmit}>
        모니터링
      </button>
      <button className="deploybtn2" onClick={() => handleClick()}>
        삭제
      </button>
      )
    </div>
  );
}

function NumberList({ deploylist, type }: ListItemProps) {
  const listItems = deploylist.map((item, index) => (
    <ListItem key={index.toString()} repoName={item.repoName} type={type} />
  ));
  return (
    <div className="deploylist">
      <ul style={{ padding: "0px" }}>{listItems}</ul>
    </div>
  );
}

function DeployList() {
  const [ServerData, setServerData] = useState([]);
  const [ClientData, setClientData] = useState([]);
  const getDeploy = useCallback(() => {
    let info = localStorage.getItem("userInfo");
    let parsedInfo = info ? (JSON.parse(info) as UserInfo) : null;
    let accessToken = localStorage.getItem("token");
    if (!parsedInfo) return;
    let userLogin = parsedInfo.login;
    if (accessToken && userLogin) {
      getServerDeployListService(userLogin)
        .then((response) => {
          console.log(response.data);
          setServerData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      getClientDeployListService(userLogin)
        .then((response) => {
          console.log(response.data);
          setClientData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);

  useEffect(() => {
    getDeploy();
  }, [getDeploy]);
  return (
    <div className="deploy">
      <div>
        <div className="name">배포 중 client</div>
        {ClientData !== null && (
          <NumberList deploylist={ClientData} type="client" />
        )}
      </div>
      <div>
        <div className="name">배포 중 server</div>
        {ServerData !== null && (
          <NumberList deploylist={ServerData} type="server" />
        )}
        <Button css={"fhomebtn"} text={"home"} />
      </div>
    </div>
  );
}

export default DeployList;
