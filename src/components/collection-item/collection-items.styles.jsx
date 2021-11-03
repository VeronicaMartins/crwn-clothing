import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

export const CollectionFooterContainer = styled.div``;
export const CustomButtonClass = styled(CustomButton)``
export const Name = styled.span``
export const Price = styled.span``
export const ImageContainer = styled.div`{{
    backgroundImage: `url(${imageUrl})`,
  }} `
export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  ${ImageContainer} {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
  }

${CustomButtonClass}{
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    ${ImageContainer} {
      opacity: 0.8;
    }
    ${CustomButtonClass} {
      opacity: 0.85;
      display: flex;
    }
  }
  ${CollectionFooterContainer} {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    ${Name} {
      width: 90%;
      margin-bottom: 15px;
    }

    ${Price} {
      width: 10%;
    }
  }
`;
