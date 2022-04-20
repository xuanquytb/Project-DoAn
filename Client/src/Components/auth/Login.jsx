import "../Style/Login.css";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Store/Context/AuthContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const history = useHistory();
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = loginForm;

  const onChangeLoginForm = (e) =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  const login = async (e) => {
    e.preventDefault();

    try {
      const loginData = await loginUser(loginForm);
      if (loginData.success) {
        // history.push("/dashboard");
      } else {
        alert("Login failed");
        
      }
    } catch (error) {
      console.log(error);
      
    }
  };
  return (
    <div className="Form-Login">
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="Container">
        <div className="box">
          <div className="box-squade" delay="--i:1;"></div>
          <div className="box-squade" delay="--i:2;"></div>
          <div className="box-squade" delay="--i:3;"></div>
          <div className="box-squade" delay="--i:4;"></div>
          <div className="form-login">
            <h2>Login Form</h2>
            <form action="" className="form-input">
              <div className="box-input">
                <input
                  type="text"
                  className="input-value"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={onChangeLoginForm}
                />
              </div>
              <div className="box-input">
                <input
                  type="password"
                  className="input-value"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChangeLoginForm}
                />
              </div>
              <div className="box-input">
                <button className="btn-login" onClick={login}>
                  Login
                </button>
              </div>
              <div className="box-input">
                <p className="more">
                  Quên mật khẩu?
                  <a href="https://" className="link">
                    Click here?
                  </a>
                </p>
                <p className="more">
                  Bạn chưa có tài khoản?
                  <a href="http://localhost:3000/register" className="link">
                    Sign up?
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
