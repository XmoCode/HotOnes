import React, { Component } from "react";

import Ingredients from "./ingredients";

class SauceCard extends Component {
  state = {
    showIngredients: false
  };

  handleIngredients = () => {
    this.setState({ showIngredients: !this.state.showIngredients });
  };

  yellowStar = (
    <i
      className="fa fa-star"
      style={{
        color: "#fff600",
        fontSize: "15px",
        marginRight: "3px"
      }}
    />
  );
  blackStar = (
    <i
      className="fa fa-star"
      style={{ color: "black", fontSize: "15px", marginRight: "3px" }}
    />
  );

  render() {
    const { sauce } = this.props;

    return (
      <div
        className="card mb-3"
        style={{ maxWidth: "1300px", fontSize: "15px" }}
      >
        <div className="row g-4">
          <div className="col-md-4">
            <img
              src={sauce.photo}
              className="img-fluid rounded-start"
              alt="the product"
            />
          </div>
          <div className="col-md-8 pt-2">
            <div className="card-body">
              <h5 className="card-title">
                {sauce.brand}
              </h5>
              <p className="card-text">
                <small className="text-muted">
                  {sauce.country}
                </small>
              </p>

              <p
                className="card-text border-bottom me-5"
                style={{ marginTop: "20px" }}
              >
                <span>
                  <span>
                    {" "}{sauce.avgRating ? this.yellowStar : this.blackStar}
                    {this.yellowStar ? sauce.avgRating : ""}
                  </span>
                  <small className="text-muted ms-3 ">
                    {sauce.avgRating ? "Rating score" : "No rating score"}
                  </small>
                </span>
              </p>

              <p className="card-text me-5">
                {sauce.pepperType
                  ? sauce.pepperType
                  : sauce.pepperTypeShort.name}
              </p>

              <p className="card-text border-bottom pb-5 me-5">
                {sauce.description}
              </p>
              <div className="d-flex me-5 justify-content-between text-muted fs-5">
                <span>INGREDIENTS</span>
                <span>
                  <i
                    className={
                      !this.state.showIngredients
                        ? "fa fa-chevron-down clickable"
                        : "fa fa-chevron-up clickable"
                    }
                    onClick={this.handleIngredients}
                    aria-hidden="true"
                  />
                </span>
              </div>
              {this.state.showIngredients && <Ingredients sauce={sauce} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SauceCard;
