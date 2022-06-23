import styled from "styled-components";

const { motion } = require("framer-motion");

export const CartWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
`;

export const CartStyle = styled(motion.div)`
  width: 40%;
  background: #f1f1f1;
  padding: 0rem 0rem;
  overflow-y: scroll;
  position: relative;
`;

export const CartTitle = styled(motion.div)`
  margin: 0 0;
  width: 100%;
  background: #2d2d2d;
  text-align: center;
  padding: 1rem 0rem;
  h3 {
    font-size: 1.5rem;
    color: white;
  }
`;

export const CartContents = styled(motion.div)`
  padding: 2rem 5rem;
`;

export const Subtotal = styled(motion.div)`
  font: var(--secondary);
  text-align: center;
  width: 100%;
  padding: 1rem 5rem;
  background: white;
  box-shadow: 8px 8px 8px gray;
  border-radius: 8px;
  button {
    background: #2d2d2d;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    width: 100%;
    margin-top: 1rem;
    font-weight: bold;
    box-shadow: 4px 4px 4px gray;
    border-radius: 8px;
  }
`;

export const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 1rem;
  margin: 1rem 0rem;
  max-height: 20vh;
  box-shadow: 8px 8px 8px gray;
  border-radius: 8px;
  button {
    border: none;
    background: white;
    width: 10%;
  }
  div {
    width: 65%;
  }
  img {
    width: 25%;
  }
`;

export const CardDetails = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  text-align: left;
  justify-content: space-around;
  h2 {
    font-size: 1rem;
  }
  h3 {
    font-size: 0.75rem;
  }
`;

export const EmptyStyle = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  svg {
    font-size: 10rem;
    color: var(--secondary);
  }
`;

export const Cards = styled(motion.div)``;
