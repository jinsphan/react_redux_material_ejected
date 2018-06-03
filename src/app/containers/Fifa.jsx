import React from "react";
import { array, func } from "prop-types";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import validator from "validator";

import { Form, List } from "app/components/fifa";
import { getCountryFifa } from "app/actions/fifa";

class Fifa extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countryId: "",
      isLoading: false,
      formErrors: {
        countryId: "",
      },
      apiFail: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, newValue) {
    e.preventDefault();
    this.setState({
      [e.target.name]: newValue,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { isValid, formErrors } = this.validate();
    if (!isValid) {
      return this.setState({ formErrors });
    }
    this.setState({ isLoading: true });
    try {
      this.setState({ formErrors: {} });
      await this.props.getCountryFifa(this.state.countryId);
      this.setState({ apiFail: false });
    } catch (err) {
      this.setState({ apiFail: true });
    }
    this.setState({ isLoading: false });
  }

  validate() {
    const formErrors = {};
    const { countryId } = this.state;
    if (validator.isEmpty(countryId)) {
      formErrors.countryId = "Please enter country code";
    }
    return {
      isValid: isEmpty(formErrors),
      formErrors,
    };
  }

  render() {
    return (
      <div className="app">
        <Form
          formErrors={this.state.formErrors}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          countryId={this.state.countryId}
          isLoading={this.state.isLoading}
        />
        <List data={this.props.country} apiFail={this.state.apiFail} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    country: store.fifa.country,
  };
};

Fifa.defaultProps = {
  country: [],
};

Fifa.propTypes = {
  country: array.isRequired,
  getCountryFifa: func.isRequired,
};

export default connect(mapStateToProps, {
  getCountryFifa,
})(Fifa);
