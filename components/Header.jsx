import Link from 'next/link';
import styled from 'styled-components';

const categories = [
  {
    name: 'Politics',
    slug: 'politics',
  },
  {
    name: 'Conspiracies',
    slug: 'conspiracies',
  },
];

const Header = () => {
  return (
    <Nav>
      <Logo>
        <Link href="/">
          <a>
            <h2>The Truth</h2>
          </a>
        </Link>
      </Logo>
      <Links>
        {categories.map(category => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <ul>
              <li>{category.name}</li>
            </ul>
          </Link>
        ))}
      </Links>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  padding: 0 2.5rem;
  margin-bottom: 2.25rem;
`;

const Logo = styled.div``;

const Links = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 600;
`;
export default Header;
