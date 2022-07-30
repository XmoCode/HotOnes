import React, { Component } from "react";

import Sorting from "./sorting";
import Tile from "./tile";

class SaucesPanelGrid extends Component {
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

        <div className="row">
          <div className="col">
            <p
              style={{
                textAlign: "center",
                fontSize: "15px",
                letterSpacing: "1.5px"
              }}
            >
              Showing {sauces.length} items
            </p>
          </div>
        </div>

        <div
          className="row row-cols-auto justify-content-center"
          style={{ margin: "0 auto" }}
        >
          {sauces.map(item =>
            <div
              className="col custom-grid"
              style={{
                height: "340px",
                padding: 0
              }}
              key={item._id}
            >
              <Tile item={item} items={sauces} />
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default SaucesPanelGrid;
