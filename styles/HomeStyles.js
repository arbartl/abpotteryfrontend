import styled from "styled-components";

export const HomeWrapper = styled.div`
  background: white;
  color: var(--secondary);
  width: 100%;
  padding: 2% 5%;
  box-shadow: 4px 4px 4px gray;
  border-radius: 8px;
  h1 {
    text-align: center;
  }
`;

export const HeadlineWrapper = styled.section`
  margin: 2% 3%;
  padding: 2% 2%;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
  aside {
    order: 1;
    padding: 2% 2%;
    width: 50%;
  }
  article {
    order: 2;
    padding: 1rem 1rem;
    width: 50%;
  }
  img {
    box-shadow: 4px 4px 4px gray;
    border-radius: 8px;
    width: 100%;
    height: auto;
  }
  p {
    padding: 1rem 0rem;
    text-align: justify;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    aside {
      width: 100%;
    }
    article {
      width: 100%;
      font-size: 0.75rem;
    }
  }
`;
