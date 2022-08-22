/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';

export const getContentFragment = (index, text, obj, type) => {
  let modifiedText = text;

  if (obj) {
    if (obj.bold) {
      modifiedText = <b key={index}>{text}</b>;
    }
    if (obj.italic) {
      modifiedText = <em key={index}>{text}</em>;
    }
    if (obj.underline) {
      modifiedText = <u key={index}>{text}</u>;
    }
  }

  switch (type) {
    case 'heading-one':
      return (
        <H1 key={index} className="text-xxl font-semibold mb-4">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </H1>
      );
    case 'heading-two':
      return (
        <H2 key={index} className="text-xl font-semibold mb-4">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </H2>
      );
    case 'heading-three':
      return (
        <H3 key={index} className="text-xl font-semibold mb-4">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </H3>
      );
    case 'heading-four':
      return (
        <H4 key={index} className="text-md font-semibold mb-4">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </H4>
      );
    case 'paragraph':
      return (
        <P key={index} className="mb-8">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </P>
      );
    case 'image':
      return (
        <img
          key={index}
          alt={obj.title}
          height={obj.height}
          width={obj.width}
          src={obj.src}
        />
      );
    default:
      return modifiedText;
  }
};

const H1 = styled.h1`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const H2 = styled.h2`
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
  margin-bottom: 1rem;
`;
const H3 = styled.h3`
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  margin-bottom: 1rem;
`;

const H4 = styled.h4`
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
  margin-bottom: 1rem;
`;
const P = styled.p`
  margin-bottom: 1rem;
`;
