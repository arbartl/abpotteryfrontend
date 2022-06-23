import styled from "styled-components";

export const NavbarStyles = styled.nav`
  min-height: 10vh;
  width: 100%;
  margin: 2rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: var(--secondary);
  background: white;
  padding: 1rem 2%;
  box-shadow: 8px 8px 8px gray;
  border-radius: 8px;
  overflow: none;
  text-align: center;
  a {
    font-size: 1rem;
  }
  img {
    width: 30%;
    cursor: pointer;
  }
  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    .logo {
      width: 100%;
    }
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const PageLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  @media (max-width: 500px) {
    width: 100%;
  }
  @media (max-width: 800px) {
    width: 50%;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  cursor: pointer;
  div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;
  }
  h3 {
    font-size: 1rem;
    padding: 0.25rem;
    height: 50%;
  }
  svg {
    font-size: 1.5rem;
  }
  span {
    background: red;
    color: white;
    width: 1.3rem;
    height: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 0.75rem;
    position: absolute;
    right: 20%;
    top: -20%;
    pointer-events: none;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  @media (max-width: 800px) {
    width: 50%;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  svg {
    font-size: 1.75rem;
  }
`;

export const CartIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  svg {
    font-size: 1.5rem;
  }
`;
