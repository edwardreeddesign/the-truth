import { useRouter } from 'next/router';
import styled from 'styled-components';
import CategoryWidget from '../../components/CategoryWidget';
import PostCard from '../../components/PostCard';
import { getCategories, getCategoryPost } from '../../services';

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading....</p>;
  }

  return (
    <Container>
      <Wrapper>
        <PostsWrapper>
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </PostsWrapper>
        <CategoriesWrapper>
          <CategoryWidget />
        </CategoriesWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto 2rem;
  padding: 0 2.5rem;
`;
const Wrapper = styled.div``;

const PostsWrapper = styled.div``;

const CategoriesWrapper = styled.div``;

export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
