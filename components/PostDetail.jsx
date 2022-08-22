/* eslint-disable @next/next/no-img-element */
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { getContentFragment } from '../helpers/textStyle';

const PostDetail = ({ post }) => {
  return (
    <Container>
      <ImageWrapper>
        <img alt={post.title} src={post.featuredImage.url} />
      </ImageWrapper>
      <PostWrapper>
        <InfoWrapper>
          <AuthorWrapper>
            <img
              alt={post.author.name}
              src={post.author.photo.url}
              // height="30px"
              // width="30px"
            />
            <p>{post.author.name}</p>
          </AuthorWrapper>
          <DateWrapper>
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
            <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </DateWrapper>
        </InfoWrapper>
        <h1>{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          );
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </PostWrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.7);
  border-radius: 0.5rem;
  padding-bottom: 3rem;
  margin-bottom: 2rem;
  color: #001;

  h1 {
    margin-bottom: 1.5rem;
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: medium;
  }

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 1.5rem;

  object-fit: cover;

  img {
    object-position: top;
    height: 100%;
    width: 100%;
    object-fit: cover;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.7);
    border-radius: 0.5rem 0.5rem 0rem 0rem;
  }
`;

const PostWrapper = styled.div`
  padding: 0 1.25rem;
  @media (min-width: 1024px) {
    padding: 0;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
`;

const AuthorWrapper = styled.div`
  display: none;

  h1 {
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    margin-bottom: 0;
    width: 100%;
  }

  img {
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    object-fit: cover;
    margin-right: 1rem;
  }
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.225rem;
  color: #6f6e6e;
`;

export default PostDetail;
