import { size } from "lodash";
import React, { Component } from "react";
import ChangeFilter from "./changeFilter";
import FilterPanelExtended from "./filterPanelExtended";

class FilterPanelMobile extends Component {
  state = {
    showFilter: false
  };

  handleShowFilter = () => {
    this.setState({ showFilter: !this.state.showFilter });
  };

  render() {
    const { selectedType, selectedRating } = this.props;
    return (
      <div style={{ width: "100%" }}>
        <div className="d-flex pt-4 pb-2 justify-content-center ">
          <button
            style={{
              width: "100%",
              padding: "10px 25px",
              background: "white",
              border: "1px solid",
              borderRadius: "8px",
              fontSize: "25px",
              fontVariant: "all-small-caps"
            }}
            onClick={this.handleShowFilter}
          >
            <span>
              <i
                className="fa fa-filter"
                style={{ marginRight: "5px" }}
                aria-hidden="true"
              />
              Select filter
            </span>
          </button>
        </div>

        {this.state.showFilter && <FilterPanelExtended {...this.props} />}

        {this.state.showFilter &&
          <div className="d-flex justify-content-center ">
            <button
              className="text-primary"
              style={{
                padding: "0px 25px",

                background: "transparent",
                border: 0,

                fontSize: "22px",
                letterSpacing: "1.5px",

                fontVariant: "all-small-caps"
              }}
              onClick={this.handleShowFilter}
            >
              <span>Collapse filter </span>
              <i
                className="fa fa-chevron-up"
                style={{
                  opacity: 0.5,
                  fontSize: "22px",
                  paddingLeft: "8px"
                }}
                aria-hidden="true"
              />
            </button>
          </div>}
      </div>
    );
  }
}

export default FilterPanelMobile;
