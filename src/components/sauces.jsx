import React, { Component } from "react";
import { getSauces } from "../services/saucesService";
import { getTypes } from "../services/typesService";
import _ from "lodash";
import NavBar from "./common/navBar";
import FilterPanel from "./common/filterPanel";
import SaucesPanel from "./common/saucesPanel";
import background from "../images/background1-edit3.png";

class Sauces extends Component {
  state = {
    sauces: [],
    types: [],
    selectedType: {},
    sortObj: { path: "avgRating", order: "desc" },
    allSaucesComponent: false
  };

  constructor(props) {
    super(props);
    this.state = {
      sauces: this.props.sauces,
      types: this.props.types,
      sortObj: { path: "avgRating", order: "desc" }
    };
  }

  //  back-up call to DB for data that may have failed to load from  App.js
  async componentDidMount() {
    const { data } = await getTypes();
    const types = [{ _id: "", name: "All Types" }, ...data];
    console.log(types);

    const { data: sauces } = await getSauces();
    this.setState({ sauces, types });
  }

  handleTypeSelect = type => {
    this.setState({
      selectedType: type,
      startSlide: 0,
      showSlides: 5
    });
  };

  handleSort = sortObj => {
    this.setState({ sortObj });
  };

  getPageData() {
    const { sauces: allSauces, selectedType, sortObj } = this.state;
    // filter based on selectedType
    const filtered =
      selectedType && selectedType._id
        ? allSauces.filter(s => s.pepperTypeShort._id === selectedType._id)
        : allSauces;

    // sort before rendering
    const sauces = _.orderBy(filtered, [sortObj.path], [sortObj.order]);

    return { totalCount: filtered.length, data: sauces };
  }

  render() {
    const { types } = this.state;
    const { totalCount, data: sauces } = this.getPageData();

    console.log("Sauces render data", sauces);

    return (
      <div
        className="container-xlg"
        style={{
          backgroundImage: `url(${background})`,
          maxWidth: "2000px",
          height: "100%",
          paddingLeft: "30px",
          paddingRight: "30px",
          margin: "0 auto"
        }}
      >
        <div>
          <p
            style={{
              color: "#fff600",
              textAlign: "center",
              fontFamily: "serif",
              fontSize: 150,
              fontWeight: "bolder",
              fontStyle: "unset"
            }}
          >
            Hot Ones{" "}
          </p>
        </div>

        <div
          className="row pb-5"
          style={{ maxWidth: "1860px", minHeight: "80vh", margin: "0 auto" }}
        >
          <div className="col skin1">
            {" "}<NavBar skin="dark" />
          </div>

          <div
            className="row pb-5"
            style={{
              margin: "0 auto",
              flexWrap: "nowrap",
              background: "#1d2021",
              borderEndEndRadius: 10,
              borderEndStartRadius: 10
            }}
          >
            <div
              className="col-2 custom-view"
              style={{ background: "#2b2f30", borderRadius: 10 }}
            >
              <FilterPanel
                types={types}
                onTypeSelect={this.handleTypeSelect}
                selectedType={this.state.selectedType}
              />
            </div>

            <div
              className="col mx-5"
              style={{
                paddingLeft: "25px",
                paddingRight: "25px",
                paddingBottom: "30px",
                maxWidth: "100%",
                overflow: "hidden"
              }}
            >
              <SaucesPanel
                onSort={this.handleSort}
                sortObj={this.state.sortObj}
                sauces={sauces}
              />
            </div>
          </div>

          <div style={{ height: "300px" }} />
        </div>
      </div>
    );
  }
}

export default Sauces;
