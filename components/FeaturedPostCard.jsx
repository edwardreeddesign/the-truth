/* eslint-disable @next/next/no-img-element */
import moment from 'moment';
import Link from 'next/link';
import styled from 'styled-components';

const FeaturedPostCard = ({ post }) => {
  return (
    <Container>
      <BackGroundImage
        style={{
          backgroundImage: `url('${post.featuredImage.url}')`,
          overflow: 'hidden',
          boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.7)',
        }}
      >
        <Mask />
        <InfoWrapper>
          <Title>
            <h2 className="text-shadow">{post.title}</h2>
            <p className="text-shadow">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
          </Title>
          <Author>
            <img
              unoptimized="true"
              alt={post.author.name}
              height="30px"
              width="30px"
              src={post.author.photo.url}
            />
            <div className="text-shadow">
              <p>{post.author.name}</p>
            </div>
          </Author>
        </InfoWrapper>
        <Link href={`/post/${post.slug}`}>
          <a />
        </Link>
      </BackGroundImage>
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

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    border-radius: 50%;
    object-fit: cover;
  }
`;

export default FeaturedPostCard;
