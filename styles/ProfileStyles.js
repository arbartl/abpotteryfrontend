import styled from "styled-components";

export const Order = styled.div`
  background: white;
  margin: 2rem 0rem;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 4px 4px 4px gray;
  border-radius: 8px;
  h1 {
    font-size: 1rem;
  }
  h2 {
    font-size: 1rem;
  }
`;

export const UserDetails = styled.div`
  background: white;
  margin: 2rem 0rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 4px gray;
  border-radius: 8px;
`;

export const LogoutButton = styled.button`
  width: 20%;
  background: var(--primary);
  color: white;
  font-weight: 500;
  border: none;
  padding: 0.5rem;
  box-shadow: 4px 4px 4px gray;
  border-radius: 8px;
`;

export const OrdersWrapper = styled.div`
  background: white;
  margin: 2rem 0rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 4px gray;
  border-radius: 8px;
`;
