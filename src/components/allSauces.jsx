import React, { Component } from "react";
import { getSauces } from "../services/saucesService";
import { getTypes } from "../services/typesService";
import _ from "lodash";
import NavBar from "./common/navBar";
import FilterPanelExtended from "./common/filterPanelExtended";
import SaucesPanelGrid from "./common/saucesPanelGrid";
import FilterPanelMobile from "./common/filterPanelMobile";

class AllSauces extends Component {
  state = {
    sauces: [],
    types: [],
    selectedType: {},
    selectedRating: "",
    sortObj: {},
    searchQuery: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      sauces: this.props.sauces,
      types: this.props.types,
      sortObj: { path: "avgRating", order: "desc" },
      searchQuery: this.props.location.state || ""
    };
  }

  // back-up call to DB for data that may have failed to load from  App.js

  async componentDidMount() {
    if (this.state.sauces.length === 0) {
      const { data } = await getTypes();
      const types = [{ _id: "", name: "All Types" }, ...data];
      const { data: sauces } = await getSauces();
      this.setState({ sauces, types });
    }
  }

  handleTypeSelect = type => {
    this.setState({ selectedType: type, searchQuery: "" });
  };

  handleRatingSelect = value => {
    this.setState({ selectedRating: value, searchQuery: "" });
  };

  handleSort = sortObj => {
    this.setState({ sortObj });
  };

  handleSearchQuery = query => {
    this.setState({ searchQuery: query, selectedType: {}, selectedRating: "" });
  };

  getPageData() {
    const {
      sauces: allSauces,
      selectedType,
      selectedRating,
      sortObj,
      searchQuery
    } = this.state;

    let filtered = allSauces;

    if (searchQuery)
      filtered = allSauces.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    else {
      const filteredForType =
        selectedType && selectedType._id
          ? allSauces.filter(s => s.pepperTypeShort._id === selectedType._id)
          : allSauces;

      filtered =
        selectedRating || selectedRating === 0
          ? filteredForType.filter(s => s.avgRating >= selectedRating)
          : filteredForType;
    }

    const sauces = _.orderBy(filtered, [sortObj.path], [sortObj.order]);

    return { totalCount: filtered.length, data: sauces };
  }

  render() {
    const { types, searchQuery } = this.state;
    const { totalCount, data: sauces } = this.getPageData();

    console.log("Sauces-All render data", sauces.length);

    return (
      <div className="container-xlg skin2">
        <div className="row skin3">
          <div className="col">
            {" "}<NavBar
              skin="dark"
              setSearchQuery={this.handleSearchQuery}
              currentLocation={this.props.match.path}
            />
          </div>
        </div>
        <div className="row pb-5" style={{ minHeight: "100vh" }}>
          <div
            className="col-3 col-lg-2 custom-view"
            style={{ background: "#2b2f30", borderRadius: 10 }}
          >
            <FilterPanelExtended
              types={types}
              onTypeSelect={this.handleTypeSelect}
              selectedType={this.state.selectedType}
              onRatingSelect={this.handleRatingSelect}
              selectedRating={this.state.selectedRating}
            />
          </div>

          <div
            className="col custom-grid justify-content-center "
            style={{
              paddingLeft: "25px",
              paddingRight: "25px",
              paddingBottom: "50px",
              maxWidth: "100%",
              overflow: "hidden"
            }}
          >
            <div className="filter-mobile">
              <FilterPanelMobile
                types={types}
                onTypeSelect={this.handleTypeSelect}
                selectedType={this.state.selectedType}
                onRatingSelect={this.handleRatingSelect}
                selectedRating={this.state.selectedRating}
              />
            </div>

            <SaucesPanelGrid
              onSort={this.handleSort}
              sortObj={this.state.sortObj}
              sauces={sauces}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AllSauces;
