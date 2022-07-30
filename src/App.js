import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getSauces } from "./services/saucesService";
import { getTypes } from "./services/typesService";
import { ToastContainer } from "react-toastify";
import Sauces from "./components/sauces";
import SauceDetails from "./components/sauceDetails";
import AllSauces from "./components/allSauces";
import SauceForm from "./components/sauceForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/common/logout";
import NotFound from "./components/common/notFound";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    sauces: [],
    types: []
  };

  async componentDidMount() {
    const { data } = await getTypes();
    const types = [{ _id: "", name: "All Types" }, ...data];

    const { data: sauces } = await getSauces();
    this.setState({ sauces, types });
  }

  render() {
    if (this.state.sauces.length === 0) this.componentDidMount();
    const { sauces, types } = this.state;
    console.log("Data in App js", sauces.length);
    return (
      <React.Fragment>
        <ToastContainer />
        <main className="container" style={{ display: "contents" }}>
          <Switch>
            <Route
              path="/sauces-all"
              render={props =>
                <AllSauces {...props} sauces={sauces} types={types} />}
            />
            <Route
              path="/sauces"
              render={props =>
                <Sauces {...props} sauces={sauces} types={types} />}
            />
            <Route path="/sauce-form/:id" component={SauceForm} />
            <Route path="/sauce/:id" component={SauceDetails} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/register" component={RegisterForm} />
            <Redirect from="/" exact to="/sauces" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
