import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';
import styled from 'styled-components';

const CategoryWidget = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(newCategories => setCategories(newCategories));
  }, []);

  return (
    <Container>
      <h1>Categories</h1>
      {categories.map(category => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <a>{category.name}</a>
        </Link>
      ))}
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.7);
  border-radius: 0.5rem;
  padding: 2rem 2rem 3rem 2rem;
  margin-bottom: 2rem;
  color: #000;

  a {
    cursor: pointer;
    display: block;
    padding-bottom: 0.75rem;
    margin-bottom: 0.75rem;
  }
`;
export default CategoryWidget;
