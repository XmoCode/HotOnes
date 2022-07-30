import React, { Component } from "react";
import * as userService from "../services/userService";
import NavBar from "./common/navBar";

import Form from "./common/form";
import Joi from "joi-browser";

class registerForm extends Form {
  state = { data: { username: "", email: "", password: "" }, errors: {} };

  schema = {
    username: Joi.string().required().label("Username"),
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().min(5).required().label("Password")
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      localStorage.setItem("token", response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
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
            <div style={{ padding: "30px 25px 40px" }}>
              <h1>Register</h1>

              <form onSubmit={this.handleSubmit}>
                {this.renderInput("username", "Username")}
                {this.renderInput("email", "Email", "email")}
                {this.renderInput("password", "Password", "password")}
                {this.renderButton("Register")}
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default registerForm;
