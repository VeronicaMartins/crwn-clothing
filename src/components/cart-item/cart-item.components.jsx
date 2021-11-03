import React from "react";

//import "./cart-item.styles.scss";
import {
  CartItemContainer,
  ItemDetailsContainer,
  Name,
} from "./cart-item.styles";
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <Name>{name}</Name>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
