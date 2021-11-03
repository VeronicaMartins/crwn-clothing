import styled, { css } from "styled-components";

export const FormInputClass = styled.input``;

export const FormInputLabel = styled.label``;

const ShrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: black;
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;

  ${FormInputClass} {
    background: none;
    background-color: white;
    color: grey;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid grey;
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ ${FormInputLabel} {
      ${ShrinkLabel}
    }
  }

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  ${FormInputLabel} {
    color: $sub-color;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    ${({ value }) => (value.length ? ShrinkLabel : "")}
  }
`;
