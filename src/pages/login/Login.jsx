import React, { useContext, useState } from "react";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import { useHistory } from "react-router-dom";
import "./style.scss";
import { AuthContext } from "../../context/authContext/AuthContext";
import { loginUser } from "../../context/authContext/apiCalls";
import { Alert, Dialog, DialogTitle } from "@mui/material";

const Login = ({ setLoginUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false)
  const { isFetching, dispatch } = useContext(AuthContext);

  const history = useHistory();

  const handleLogin = () => {
    if (username && password) {
      loginUser({ username, password }, dispatch);
    } else {
      setAlert(true)
      // alert("Please fillup all fields");
    }
  };

  return (
    <div className="login">
      <Dialog open={alert}>
        <DialogTitle>
          Erreur
        </DialogTitle>
      </Dialog>

      <div className="login-page">
        <h1>Login</h1>
        <div className="login-input">
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your username"
          ></input>
          <Email className="icon" />
        </div>

        <div className="login-input">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          ></input>
          <Lock className="icon" />
        </div>

        <button className="btn" onClick={handleLogin} disabled={isFetching}>
          Login
        </button>
        <div>or</div>
        <button className="btn" onClick={() => history.push("/register")}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
