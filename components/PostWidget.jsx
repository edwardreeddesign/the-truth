/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import styled from 'styled-components';

import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then(result => setRelatedPosts(result));
    } else {
      getRecentPosts().then(result => setRelatedPosts(result));
    }
  }, [categories, slug]);

  return (
    <Container>
      <h1>{slug ? 'Related Posts' : 'Recent Posts'}</h1>
      {relatedPosts.map(post => (
        <PostWrapper key={post.title}>
          <ImageWrapper>
            <img
              alt={post.title}
              height="60px"
              width="60px"
              src={post.featuredImage.url}
            />
          </ImageWrapper>
          <Posts>
            <p>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`post/${post.slug}`} key={post.title}>
              <a>{post.title} </a>
            </Link>
          </Posts>
        </PostWrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.7);
  border-radius: 0.5rem;
  padding: 2rem;
  margin-bottom: 2rem;
  color: #000;
  h3 {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
  }
`;

const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const ImageWrapper = styled.div`
  width: 4rem;
  flex: none;

  img {
    height: 3.75rem;
    width: 3.75rem;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.7);
  }
`;

const Posts = styled.div`
  flex-grow: 1;
  margin-left: 1rem;

  p {
    font-size: 0.75rem; /* 12px */
    line-height: 1rem; /* 16px */
    color: gray;
  }

  a {
    font-size: 1rem; /* 16px */
    line-height: 1.5rem; /* 24px */
  }
`;
export default PostWidget;
