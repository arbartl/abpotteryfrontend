import styled from "styled-components";
const { motion } = require("framer-motion");

export const SuccessWrapper = styled.div`
  margin: 5rem 15rem;
  box-shadow: 4px 4px 4px gray;
  border-radius: 8px;
  button {
    width: 50%;
    background: var(--primary);
    color: white;
    font-weight: 500;
    border: none;
    padding: 0.5rem;
    box-shadow: 4px 4px 4px gray;
    border-radius: 8px;
  }
`;

export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 2rem;
  padding: 2rem 3rem;
`;

export const OrderSummary = styled.table`
  th {
    background: var(--secondary);
    color: white;
    text-align: left;
    padding: 0rem 1rem;
  }
  td {
    text-align: left;
    padding-left: 1rem;
  }
`;
