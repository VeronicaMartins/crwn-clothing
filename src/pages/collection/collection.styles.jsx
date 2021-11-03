import styled from "styled-components";
import CollectionItem from "../../components/collection-item/collection-item.components";

export const Title = styled.h2``;
export const ItemsContainer = styled.div``;
export const CollectionItemClass = styled(CollectionItem)``;
export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${Title} {
    font-size: 38px;
    margin: 0 auto 30px;
  }

  ${ItemsContainer} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & ${CollectionItemClass} {
      margin-bottom: 30px;
    }
  }
`;
