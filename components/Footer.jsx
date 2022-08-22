/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <p>
        Copyright &copy; 2022 Designed by{' '}
        <a
          target="_blank"
          href="https://www.edwardreeddesigns.com"
          rel="noreferrer"
        >
          Edward Reed Designs
        </a>
      </p>
      <img src="/images/Hero-logo.svg" alt="edward reed designs logo" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.9);
  margin-top: 2rem;
  font-weight: 300;
  font-size: 0.75rem;

  a {
    color: #393939;
    font-weight: bold;

    &:hover {
      color: red;
    }
  }

  img {
    height: 1.55rem;
    margin: 0 0.5rem;
  }
`;
export default Footer;
