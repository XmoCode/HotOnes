import React, { Component } from "react";
import { getReviews } from "../services/reviewsService";

import background from "../images/background-smoke4.png";
import NavBar from "./common/navBar";
import SauceCard from "./common/sauceCard";
import ReviewCard from "./common/reviewCard";
import Chevron from "./common/chevron";
import ChangeFilter from "./common/changeFilter";

class SauceDetails extends Component {
  state = { reviews: [] };

  async componentDidMount() {
    const { data: reviews } = await getReviews();
    this.setState({ reviews });
  }

  handleNextProduct = currentIndex => {
    const nextId = this.props.location.state[currentIndex + 1]._id;

    this.props.history.push({
      pathname: `/sauce/${nextId}`,
      state: this.props.location.state
    });
  };

  handlePreviousProduct = currentIndex => {
    const previousId = this.props.location.state[currentIndex - 1]._id;

    this.props.history.push({
      pathname: `/sauce/${previousId}`,
      state: this.props.location.state
    });
  };

  handleFilterAccess = () => {
    this.props.history.push("/sauces-all");
  };

  render() {
    if (this.state.reviews.length === 0) this.componentDidMount();
    console.log("reviews in sauce details", this.state.reviews.length);
    const reviews = this.state.reviews;
    const sauces = this.props.location.state;
    const { id: sauceId } = this.props.match.params;
    const currentItem = sauces.find(s => s._id === sauceId);
    const currentIndex = sauces.indexOf(currentItem);
    const arrayLength = sauces.length;

    return (
      <div
        style={{
          backgroundColor: "#eeeeee",
          backgroundImage: `url(${background})`
        }}
      >
        <div className="skin4">
          <NavBar skin="light" />
        </div>

        <div
          className="container"
          style={{ minHeight: "100vh", paddingBottom: "100px" }}
        >
          <h1
            style={{ color: "black", textAlign: "center", marginTop: "40px" }}
          >
            {currentItem.name}
          </h1>

          <div className="d-flex justify-content-end">
            {arrayLength > 1 &&
              currentIndex > 0 &&
              <Chevron
                direction="left"
                text="Previous item"
                currentIndex={currentIndex}
                handleNavigation={this.handlePreviousProduct}
              />}

            {arrayLength > 1 &&
              currentIndex < arrayLength - 1 &&
              <Chevron
                direction="right"
                text="Next item"
                currentIndex={currentIndex}
                handleNavigation={this.handleNextProduct}
              />}
            <ChangeFilter goToFilter={this.handleFilterAccess} />
          </div>

          <div className="container">
            <SauceCard sauce={currentItem} />

            <div>
              <h2
                style={{
                  textAlign: "center",
                  color: "gray",
                  fontStretch: "expanded",
                  marginTop: "30px",
                  marginBottom: "20px"
                }}
              >
                Product Reviews
              </h2>

              <ReviewCard reviews={reviews} currentItem={currentItem} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SauceDetails;
