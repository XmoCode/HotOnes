import React, { Component } from "react";
import { login } from "../services/authService";
import Hat from "../images/hatSmall.png";
import NavBar from "./common/navBar";

import Form from "./common/form";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = { data: { email: "", password: "" }, errors: {} };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().label("Password")
  };

  doSubmit = async () => {
    // call to server
    try {
      const { data } = this.state;
      const { data: jwt } = await login(data.email, data.password);
      localStorage.setItem("token", jwt);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="bg-light skin4">
          <NavBar skin="light" />
        </div>

        <div
          className="row justify-content-center fs-3"
          style={{ paddingTop: "15vh" }}
        >
          <div
            className="col-9 col-md-5 p-3 shadow-lg rounded"
            style={{ maxWidth: "450px" }}
          >
            <div style={{ maxWidth: "200px", margin: "0 auto" }}>
              <img src={Hat} alt="Mexican hat" />
            </div>

            <div style={{ padding: "20px 25px 40px" }}>
              <h1>Sign in</h1>

              <form onSubmit={this.handleSubmit}>
                {this.renderInput("email", "Email")}
                {this.renderInput("password", "Password", "password")}
                {this.renderButton("Login")}
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;
