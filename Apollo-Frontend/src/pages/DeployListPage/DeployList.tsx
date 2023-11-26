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
import cancel from "../../assets/images/cancel.svg";

type deployData = {
  content: string;
  endpoint: string;
  serviceId: string;
  stackName: string;
  stackType: string;
};
type ItemProps = {
  deploy: deployData;
  userId: string;
};
type ListItemProps = {
  deploylist: deployData[];
  userId: string;
};
function ListItem({ ...props }: ItemProps) {
  const navigate = useNavigate();
  const [isopen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!isopen);
  };
  const handleSubmit = () => {
    navigate("/monitor", {
      state: {
        repoName: props.deploy.stackName,
        serviceId: props.deploy.serviceId,
      },
    });
  };
  const Delete = async () => {
    if (props.deploy.stackType === "client") {
      await clientRepoDeleteService(props.userId, props.deploy.serviceId)
        .then((response) => {})
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else if (props.deploy.stackType === "server") {
      await serverRepoDeleteService(props.userId, props.deploy.serviceId)
        .then((response) => {})
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };

  const handleClick = () => {
    Delete();
    navigate("/deploy");
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      {isopen && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "350px",
            height: "150px",
            backgroundColor: "gray",
            zIndex: 10,
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img
              style={{ height: "15px", cursor: "pointer" }}
              src={cancel}
              onClick={() => handleOpen()}
              alt="cancel"
            />
          </div>
          <div
            style={{
              width: "100%",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              textAlign: "start",
              flex: "1",
              wordBreak: "break-all",
            }}
          >
            endpoint: {props.deploy.endpoint}
          </div>
        </div>
      )}
      <li
        className="list"
        style={{ display: "flex", flexDirection: "row", cursor: "pointer" }}
        onClick={() => handleOpen()}
      >
        <div style={{ flex: "3" }}>{props.deploy.stackName}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flex: "1",
            paddingRight: "10px",
          }}
        >
          {props.deploy.content}
        </div>
      </li>
      {props.deploy.stackType === "client" ? (
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

function NumberList({ deploylist, userId }: ListItemProps) {
  const listItems = deploylist.map((item, index) => (
    <ListItem key={index.toString()} deploy={item} userId={userId} />
  ));
  return (
    <div className="deploylist">
      <ul style={{ padding: "0px" }}>{listItems}</ul>
    </div>
  );
}

function DeployList() {
  const [DeployData, setDeployData] = useState<deployData[]>([]);
  const [cookie] = useCookies(["token"]);
  const info = localStorage.getItem("userInfo");
  const parsedInfo = info ? (JSON.parse(info) as UserInfo) : null;
  const userId = parsedInfo?.id;
  const accessToken = cookie.token;
  const ClientData = useMemo(() => {
    return DeployData.filter((item) => item.stackType === "client");
  }, [DeployData]);

  const ServerData = useMemo(() => {
    return DeployData.filter((item) => item.stackType === "server");
  }, [DeployData]);
  const getDeploy = useCallback(async () => {
    if (accessToken && userId) {
      await getDeployListService(userId)
        .then((response) => {
          setDeployData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [userId, accessToken]);

  useEffect(() => {
    getDeploy();

    const intervalId = setInterval(() => {
      getDeploy();
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, [getDeploy]);
  return (
    <div className="deploy">
      <div>
        <div className="name">배포 중 client</div>
        {ClientData !== null && parsedInfo && (
          <NumberList deploylist={ClientData} userId={parsedInfo?.id} />
        )}
      </div>
      <div>
        <div className="name">배포 중 server</div>
        {ServerData !== null && parsedInfo && (
          <NumberList deploylist={ServerData} userId={parsedInfo?.id} />
        )}
      </div>
      <Button css={"fhomebtn"} text={"home"} />
    </div>
  );
}

export default DeployList;
