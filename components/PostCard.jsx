/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import moment from 'moment';
import styled from 'styled-components';

const PostCard = ({ post }) => {
  return (
    <Container>
      <CardImage>
        <img src={post.featuredImage.url} alt={post.title} key={post.title} />
      </CardImage>
      <Link href={`/post/${post.slug}`}>
        <a>
          <h1>{post.title}</h1>
        </a>
      </Link>
      <Info>
        <Author>
          <img
            alt={post.name}
            height="30px"
            width="30px"
            src={post.author.photo.url}
          />
          <p>{post.author.name}</p>
        </Author>
        <Date>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5rem"
            width="1.5rem"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
        </Date>
      </Info>
      <span>{post.excerpt}</span>
      <Action>
        <button>
          <Link href={`/post/${post.slug}`}>
            <a>Continue Reading...</a>
          </Link>
        </button>
      </Action>
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.7);
  padding-bottom: 3rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  color: #000;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    cursor: pointer;
    font-size: 1.875rem;
    line-height: 2.25rem;
    transition: all 300ms;

    &:hover {
      color: #493f3f;
    }
  }

  span {
    display: flex;
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem;
    span {
      padding: 0 5rem;
      text-align: center;
    }
  }
`;

const CardImage = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 20rem;
  margin-bottom: 1.5rem;

  img {
    position: absolute;
    object-position: top;
    height: 20rem;
    width: 100%;
    object-fit: cover;
    border-radius: 0.5rem 0.5rem 0 0;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.7);
  }
`;

const Info = styled.div`
  display: block;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    margin-bottom: 0;
    width: auto;
  }

  img {
    vertical-align: middle;
    border-radius: 50%;
    object-fit: cover;
  }

  p {
    display: inline;
    vertical-align: middle;
    color: gray;
    margin-left: 1rem;
    font-size: 1.125rem;
  }
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;

  gap: 0.5rem;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  button {
    padding: 0.8rem 1.125rem;
    background: #f86464;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.125rem;
    transition: all 300ms;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.7);

    &:hover {
      background: #c75151;
    }
  }
`;
export default PostCard;
