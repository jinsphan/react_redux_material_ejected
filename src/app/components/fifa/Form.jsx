import React from "react";
import { bool, string, func, shape } from "prop-types";
import { CircularProgress, RaisedButton, TextField } from "material-ui";

const Form = props => {
  return (
    <form onSubmit={props.onSubmit} className="Form">
      <div className="Form__input">
        <TextField
          errorText={props.formErrors.countryId}
          floatingLabelFixed
          floatingLabelText="Enter Country FIFA code"
          fullWidth
          name="countryId"
          onChange={props.onChange}
          type="text"
          value={props.countryId}
        />
      </div>
      <div className="Form__button">
        <RaisedButton
          disabled={props.isLoading}
          label="Search"
          type="submit"
          primary
        />
      </div>
      <div className="Form__loading">
        {props.isLoading ? <CircularProgress /> : null}
      </div>
    </form>
  );
};

Form.defaultProps = {
  countryId: "",
  formErrors: {
    countryId: "",
  },
};

Form.propTypes = {
  formErrors: shape({
    countryId: string,
  }).isRequired,
  onSubmit: func.isRequired,
  onChange: func.isRequired,
  countryId: string,
  isLoading: bool.isRequired,
};

export default Form;
