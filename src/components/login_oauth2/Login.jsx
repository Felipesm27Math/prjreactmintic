import React from "react";
import "./style.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";

function Login() {
  const clientId = "881028966039-4k059tu1j7h5v94pf0f22r7gg5m6jo8c.apps.googleusercontent.com";

  const [showloginButton, setShowloginButton] = React.useState(true);
  const [showlogoutButton, setShowlogoutButton] = React.useState(false);

  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  return (
    <div>
      <header></header>
      <main>
      <h3 class="text-center text-dark">Sign in to Project cycle 3</h3>
        <div class="container">
          <div class="row">
            <div class="col">
              <form>
                <div class="mb-3 row">
                  <label class="col-form-label mx-4">User</label>
                  <div class="imput">
                    <input type="text" class="form-label mt-1" />
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label class="col-form-label">Password</label>
                  </div>
                  <div class="col mt-2">
                    <a href="www.google.com" id="forgotP">
                      Forgot password?
                    </a>
                  </div>
                  <div class="imput">
                    <input type="password" class="form-label mt-1" />
                  </div>
                  <div class="d-grid gap-3 col-9 mx-auto mt-4">
                    <button
                      type="submit"
                      class="btn btn-outline-dark"
                      id="btnSubmit"
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="createAccount">
          <p>
            Login with
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText=""
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}
            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
          </p>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default Login;
