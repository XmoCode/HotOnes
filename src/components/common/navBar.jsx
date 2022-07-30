import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import jwtDecode from "jwt-decode";

class NavBar extends Component {
  state = {
    searchQuery: "",
    user: ""
  };

  async componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }

  onChange = ({ currentTarget: input }) => {
    this.setState({ searchQuery: input.value });
  };

  riseSearchQuery = query => {
    this.setState({ searchQuery: "" });
    this.props.setSearchQuery(query);
  };

  getSearchElement() {
    const { currentLocation, setSearchQuery } = this.props;
    const { searchQuery: query } = this.state;

    return currentLocation === "/sauces-all"
      ? <button
          className="btn fs-4 text-white text-uppercase"
          onClick={() => this.riseSearchQuery(query)}
        >
          Search
        </button>
      : <Link
          className="btn fs-4 text-white text-uppercase"
          to={{ pathname: "/sauces-all", state: query }}
        >
          Search
        </Link>;
  }

  render() {
    const { skin } = this.props;
    const { user } = this.state;
    const searchElement = this.getSearchElement();

    return (
      <nav
        className={`navbar navbar-${skin} navbar-expand-lg bg-transparent fs-4 text-uppercase`}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link me-2" to="/sauces">
                Home <span className="sr-only">(current)</span>
              </NavLink>

              <NavLink className="nav-item nav-link me-2" to="/sauces-all">
                All Sauces
              </NavLink>

              <NavLink className="nav-item nav-link me-2" to="/sauce-form/new">
                New Sauce
              </NavLink>

              {!user &&
                <React.Fragment>
                  <NavLink className="nav-item nav-link me-2" to="/register">
                    Register
                  </NavLink>

                  <NavLink className="nav-item nav-link me-2" to="/login">
                    Login
                  </NavLink>
                </React.Fragment>}

              {user &&
                <React.Fragment>
                  <NavLink className="nav-item nav-link me-2" to="/profile">
                    {user.name}
                  </NavLink>

                  <NavLink className="nav-item nav-link me-2" to="/logout">
                    Logout
                  </NavLink>
                </React.Fragment>}
            </div>
          </div>
          <span
            className="d-flex"
            role="search"
            style={{
              width: "400px",
              maxWidth: "70%",
              justifySelf: "flex-end"
            }}
          >
            <input
              className="form-control active me-2 fs-4"
              style={{
                background: "white",
                color: "black"
              }}
              value={this.state.searchQuery}
              name="searchQuery"
              type="text"
              placeholder="Search by product name"
              onChange={this.onChange}
            />

            {searchElement}
          </span>
        </div>
      </nav>
    );
  }
}

export default NavBar;
