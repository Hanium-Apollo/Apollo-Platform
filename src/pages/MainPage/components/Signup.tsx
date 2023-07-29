import { Dispatch, SetStateAction } from "react";

type SetActionType = Dispatch<SetStateAction<string>>;


const Signup = ({ setAction }: { setAction: SetActionType }) => {
  const handleSignin = () => {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=7600733c0c5ed7849ce6`;
    window.location.href = githubAuthUrl;
    setAction('userSignUp');
  };

  return (
    <p style={{color: "white" ,margin: "10px", cursor: "pointer" }} onClick={handleSignin}>signup</p>
  );
}

export default Signup;
