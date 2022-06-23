import styled from "styled-components";

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 2fr));
  grid-gap: 2rem;
  margin-top: 2rem;
  max-height: 100vh;
`;
