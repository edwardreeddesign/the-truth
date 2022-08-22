import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styled from 'styled-components';
import PostCard from '../components/PostCard';
import PostWidget from '../components/PostWidget';
import CategoryWidget from '../components/CategoryWidget';
import { getPosts } from '../services';
import FeaturedPosts from '../sections/FeaturedPosts';

export default function Home({ posts }) {
  return (
    <Layout title="Home">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <FeaturedPosts /> */}
      <FeaturedPosts />

      <Main>
        <Posts>
          {posts.map((post, idx) => (
            <PostCard post={post.node} key={idx} />
          ))}
        </Posts>
        <Sidebar>
          <Sticky>
            <PostWidget />
            <CategoryWidget />
          </Sticky>
        </Sidebar>
      </Main>
    </Layout>
  );
}

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 3rem;
  margin: auto 2rem;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

const Posts = styled.div`
  grid-column: span 1 / span 1;
  @media (min-width: 1024px) {
    grid-column: span 8 / span 8;
  }
`;

const Sidebar = styled.div`
  grid-column: span 1 / span 1;
  @media (min-width: 1024px) {
    grid-column: span 4 / span 4;
  }
`;

const Sticky = styled.div`
  position: relative;
  top: 2rem;

  @media (min-width: 1024px) {
    position: sticky;
  }
`;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
