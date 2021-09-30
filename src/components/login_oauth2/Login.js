import React from "react";
import './style.css'

function Login() {
  return (
    <div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
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
            New in this project?<a href="www.google.com">Create an account</a>
          </p>
        </div>
      </div>
  );
}

export default Login;
