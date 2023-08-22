import { useNavigate } from "react-router-dom";
import "../../assets/css/deploy.css";
import Button from "../../components/button/Button";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  clientRepoDeleteService,
  getDeployListService,
  serverRepoDeleteService,
} from "../../apis/RepoService";
import { UserInfo } from "../../apis/UserServiceType";
import { useCookies } from "react-cookie";

type deployData = {
  userId: string;
  content: string;
  endpoint: string;
  serviceId: string;
  stackName: string;
  stackType: string;
};
type ListItemProps = {
  deploylist: deployData[];
};
function ListItem({ ...props }: deployData) {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/monitor", { state: { repoName: props.stackName } });
  };
  const handleClick = () => {
    if (props.stackType === "client") {
      clientRepoDeleteService(props.userId, props.stackName)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else if (props.stackType === "server") {
      serverRepoDeleteService(props.userId, props.stackName)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
    navigate("/deploy");
  };
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
    >
      <li className="list">{props.stackName}</li>
      {props.stackType === "client" ? (
        <button className="selectbtn" onClick={() => handleClick()}>
          삭제
        </button>
      ) : (
        <>
          <button className="deploybtn1" onClick={handleSubmit}>
            모니터링
          </button>
          <button className="deploybtn2" onClick={() => handleClick()}>
            삭제
          </button>
        </>
      )}
    </div>
  );
}

function NumberList({ deploylist }: ListItemProps) {
  const listItems = deploylist.map((item, index) => (
    <ListItem
      key={index.toString()}
      userId={item.userId}
      stackName={item.stackName}
      stackType={item.stackType}
      content={item.content}
      endpoint={item.endpoint}
      serviceId={item.serviceId}
    />
  ));
  return (
    <div className="deploylist">
      <ul style={{ padding: "0px" }}>{listItems}</ul>
    </div>
  );
}

function DeployList() {
  const [DeployData, setDeployData] = useState<ListItemProps["deploylist"]>([]);
  const [cookie] = useCookies(["token"]);
  const ClientData = useMemo(() => {
    return DeployData.filter((item) => item.stackType === "client");
  }, [DeployData]);

  const ServerData = useMemo(() => {
    return DeployData.filter((item) => item.stackType === "server");
  }, [DeployData]);
  const getDeploy = useCallback(() => {
    let info = localStorage.getItem("userInfo");
    let parsedInfo = info ? (JSON.parse(info) as UserInfo) : null;
    let accessToken = cookie.token;
    if (!parsedInfo) return;
    let userId = parsedInfo.id;
    if (accessToken && userId) {
      getDeployListService(userId)
        .then((response) => {
          console.log(response.data);
          setDeployData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [cookie.token]);

  useEffect(() => {
    getDeploy();
  }, [getDeploy]);
  return (
    <div className="deploy">
      <div>
        <div className="name">배포 중 client</div>
        {ClientData !== null && <NumberList deploylist={ClientData} />}
      </div>
      <div>
        <div className="name">배포 중 server</div>
        {ServerData !== null && <NumberList deploylist={ServerData} />}
      </div>
      <Button css={"fhomebtn"} text={"home"} />
    </div>
  );
}

export default DeployList;
