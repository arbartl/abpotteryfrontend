import styled from "styled-components";

export const ProductStyles = styled.div`
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  box-shadow: 8px 8px 8px gray;
  border-radius: 8px;

  img {
    height: auto;
    width: 100%;
    cursor: pointer;
  }

  h2 {
    padding: 0.5rem 0rem;
  }
`;
