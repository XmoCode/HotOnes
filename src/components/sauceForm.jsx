import React, { Component } from "react";
import NavBar from "./common/navBar";
import Form from "./common/form";
import { getTypes } from "./../services/fakeTypesService";
import { getSauce } from "../services/fakeSauceService";
import { saveSauce } from "./../services/fakeSauceService";
import Joi from "joi-browser";

class SauceForm extends Form {
  state = {
    data: {
      name: "",
      brand: "",
      ingredients: "",
      description: "",
      pepperType: "",
      pepperTypes: "",
      url: "",
      rating: "",
      country: ""
    },
    types: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string().required().label("Sauce name"),
    brand: Joi.string().required().label("Brand"),
    country: Joi.string().required().label("Country of origin"),
    pepperType: Joi.string().required().label("Main pepper type"),
    pepperTypes: Joi.string().required().label("All pepper types"),
    description: Joi.string().required().label("Sauce description"),
    ingredients: Joi.string().required().label("Ingredients"),
    url: Joi.string().label("Image url"),
    rating: Joi.number().min(1).max(5).label("Rating")
  };

  componentDidMount() {
    const types = getTypes();
    this.setState({ types });

    const sauceId = this.props.match.params.id;
    if (sauceId === "new") return;

    const sauce = getSauce(sauceId);
    if (!sauce) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(sauce) });
  }

  mapToViewModel(sauce) {
    return {
      _id: sauce._id,
      name: sauce.name,
      brand: sauce.brand,
      ingredients: sauce.ingredients,
      description: sauce.description,
      pepperType: sauce.pepperTypeShort,
      pepperTypes: sauce.pepperType,
      url: sauce.photo,
      rating: sauce.avgRating,
      country: sauce.country
    };
  }

  doSubmit = () => {
    saveSauce(this.state.data);

    this.props.history.push("/sauces-all");
  };

  render() {
    return (
      <React.Fragment>
        <div className="bg-light skin4">
          <NavBar skin="light" />
        </div>

        <h3 style={{ color: "red", textAlign: "center" }}>
          Sauce Form submission available to Admin user only
        </h3>

        <div
          className="row justify-content-center fs-3"
          style={{ paddingTop: "3vh" }}
        >
          <div
            className="col-9 col-md-5 p-3 shadow-lg rounded"
            style={{ maxWidth: "950px" }}
          >
            <div style={{ padding: "20px 25px 40px" }}>
              <h1>Sauce Form</h1>

              <form onSubmit={this.handleSubmit}>
                {this.renderInput("name", "Sauce name")}
                {this.renderInput("brand", "Brand")}
                {this.renderInput("country", "Country of origin")}
                {this.renderSelect(
                  "pepperType",
                  "Main pepper type",
                  this.state.types
                )}
                {this.renderTextArea("pepperTypes", "All pepper types", "1")}
                {this.renderTextArea("description", "Sauce description", "3")}
                {this.renderTextArea("ingredients", "Ingredients", "2")}
                {this.renderInput("url", "Image url")}
                {this.renderInput("rating", "Rating", "number")}
                {this.renderButton("Save")}
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SauceForm;
