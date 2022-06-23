import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <p>Contact Me</p>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem 2rem;
  text-align: center;
  background: white;
  color: var(--secondary);
  font-size: 1rem;
  box-shadow: 8px 8px 8px gray;
  border-radius: 8px;
  position: absolute;
  bottom: 0;
`;

export default Footer;
