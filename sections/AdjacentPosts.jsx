import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AdjacentPostCard from '../components/AdjacentPostCard';

import { getAdjacentPosts } from '../services';

const AdjacentPosts = ({ createdAt, slug }) => {
  const [adjacentPost, setAdjacentPosts] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getAdjacentPosts(createdAt, slug).then(result => {
      setAdjacentPosts(result);
      setDataLoaded(true);
    });
  }, [createdAt, slug]);

  return (
    <Container>
      {dataLoaded && (
        <>
          {adjacentPost.previous && (
            <div className="`{adjacentPost.next ? 'next' : 'large'}` adjacent-post  ">
              <AdjacentPostCard post={adjacentPost.previous} position="LEFT" />
            </div>
          )}
          {adjacentPost.next && (
            <div className="`{adjacentPost.next ? 'next' : 'large'}` adjacent-post  ">
              <AdjacentPostCard post={adjacentPost.next} position="RIGHT" />
            </div>
          )}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .next {
    grid-column: span 1 / span 1;
    border-radius: 0.5rem;
    position: relative;
    height: 18rem;

    @media (min-width: 1024px) {
      grid-column: span 4 / span 4;
    }
  }

  .large {
    grid-column: span 1 / span 1;
    border-radius: 0.5rem;
    position: relative;
    height: 18rem;

    @media (min-width: 1024px) {
      grid-column: span 8 / span 8;
    }
  }
`;
export default AdjacentPosts;
