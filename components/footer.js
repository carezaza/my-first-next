import styled from "styled-components";

const Footer = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    margin-left: 0.5rem;
  }

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Logo = styled.img`
  height: 1em;
`;

export default function footer() {
  return (
    <Footer>
      Powered by
      <Logo src="/vercel.svg" alt="Vercel Logo" />
    </Footer>
  );
}
