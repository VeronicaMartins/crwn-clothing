import React from "react";
//import "./preview-collection.component.scss";
import CollectionItem from "../collection-item/collection-item.components";
import {
  CollectionPreviewContainer,
  PreviewContainer,
  Title,
} from "./preview-collection.styles";
const PreviewCollection = ({ title, items }) => (
  <CollectionPreviewContainer>
    <Title>{title.toUpperCase()}</Title>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default PreviewCollection;
