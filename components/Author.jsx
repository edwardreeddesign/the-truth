import Image from 'next/image';
import styled from 'styled-components';

const Author = ({ author }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src={author.photo.url}
          alt={author.name}
          height="100px"
          width="100px"
          unoptimized
        />
      </ImageWrapper>
      <h3>{author.name}</h3>
      <p>{author.bio}</p>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 3rem;
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #00000078;
  color: #ffffff;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.7);
`;

const ImageWrapper = styled.div`
  position: absolute;
  inset: -3.5rem 0 0 0;

  img {
    border-radius: 50%;
    object-fit: cover;
    width: 100%;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.7);
  }
`;
export default Author;
