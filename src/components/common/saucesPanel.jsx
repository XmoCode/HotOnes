import React, { Component } from "react";

import Sorting from "./sorting";
import Carousel from "./carousel";

class SaucesPanel extends Component {
  state = {};

  sortOptions = [
    { path: "avgRating", label: "Rating" },
    { path: "country", label: "Country of origin" },
    { path: "brand", label: "Brand" }
  ];

  riseSort = path => {
    const sortObj = { ...this.props.sortObj };
    if (sortObj.path === path)
      sortObj.order = sortObj.order === "asc" ? "desc" : "asc";
    else {
      sortObj.path = path;
      sortObj.order = "asc";
    }
    this.props.onSort(sortObj);
  };

  render() {
    const { sortObj, sauces } = this.props;

    return (
      <React.Fragment>
        <Sorting
          options={this.sortOptions}
          onSort={this.riseSort}
          sortObj={sortObj}
        />

        <Carousel
          key={1}
          items={sauces.filter(s => s.avgRating >= 4)}
          index="Favoured"
        />

        <Carousel
          key={2}
          items={sauces.filter(s => s.avgRating < 4 && s.avgRating > 0)}
          index="Less Popular"
        />

        <Carousel
          key={3}
          items={sauces.filter(
            s => s.avgRating === "" || s.avgRating === 0 || s.avgRating === null
          )}
          index="Undiscovered"
        />
      </React.Fragment>
    );
  }
}

export default SaucesPanel;
