import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';
import FeaturedPostCard from '../components/FeaturedPostCard';
import { customLeftArrow, customRightArrow } from '../helpers/arrows';

import { getFeaturedPosts } from '../services';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then(result => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  return (
    <Container>
      <Carousel
        infinite
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        responsive={responsive}
        itemClass="space"
      >
        {dataLoaded &&
          featuredPosts.map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
          ))}
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  /* margin-bottom: 1rem; */
  padding: 0 2rem;
  margin: 0 auto 1rem;

  .space {
    margin: 0 auto;
    padding: 0 0.5rem;
  }
`;

export default FeaturedPosts;
