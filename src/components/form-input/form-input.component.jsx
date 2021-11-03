import React from "react";

//import "./form-input.styles.scss";
import {
  FormInputClass,
  FormInputLabel,
  GroupContainer,
} from "./form-input.styles";
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer value={otherProps.value}>
    <FormInputClass onChange={handleChange} {...otherProps} />
    {label ? <FormInputLabel>{label}</FormInputLabel> : null}
  </GroupContainer>
);

export default FormInput;
