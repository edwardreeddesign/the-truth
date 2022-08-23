/* eslint-disable @next/next/no-img-element */
import moment from 'moment';
import Link from 'next/link';
import styled from 'styled-components';

const AdjacentPostCard = ({ post, position }) => {
  return (
    <Container>
      <BackGroundImage
        style={{
          backgroundImage: `url('${post.featuredImage.url}')`,
          overflow: 'hidden',
          boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.7)',
        }}
      />
      <Mask />
      <InfoWrapper>
        <Title>
          <h2 className="text-shadow">{post.title}</h2>
          <p className="text-shadow">
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </p>
        </Title>
        <Link href={`/post/${post.slug}`}>
          <a></a>
        </Link>
        {position === 'LEFT' && (
          <div className="arrow-btn ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white w-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </div>
        )}
        {position === 'RIGHT' && (
          <div className=" arrow-btn ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white w-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        )}
      </InfoWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 18rem;

  a {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
  }
`;

const BackGroundImage = styled.div`
  position: absolute;
  border-radius: 0.5rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  width: 100%;
  height: 18rem; ;
`;

const Mask = styled.div`
  position: absolute;
  border-radius: 0.5rem;
  background-position: center center;
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
  opacity: 0.5;
  --tw-gradient-from: #9ca3af;
  --tw-gradient-to: rgb(156 163 175 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-to: rgb(55 65 81 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #374151, var(--tw-gradient-to);
  --tw-gradient-to: #000;
  height: 18rem;
  width: 100%;
`;

const InfoWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  color: #fff;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default AdjacentPostCard;
