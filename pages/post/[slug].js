import { useRouter } from 'next/router';
import styled from 'styled-components';
import AdjacentPostCard from '../../components/AdjacentPostCard';
import Author from '../../components/Author';
import CategoryWidget from '../../components/CategoryWidget';
import Comments from '../../components/Comments';
import CommentsForm from '../../components/CommentsForm';
import Layout from '../../components/Layout';
import PostDetail from '../../components/PostDetail';
import PostWidget from '../../components/PostWidget';
import AdjacentPosts from '../../sections/AdjacentPosts';
import { getPosts, getPostDetails } from '../../services';

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.fallback || !post) {
    return <p style={{ color: 'red', fontSize: '8rem' }}>Loading...</p>;
  }

  return (
    <Layout title={post && post.title}>
      <Container>
        <GridWrapper>
          <PostWrapper>
            <PostDetail post={post} />
            <Author author={post.author} />
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </PostWrapper>
          <WidgetWrapper>
            <Widgets>
              <PostWidget
                slug={post.slug}
                categories={post.categories.map(category => category.slug)}
              />
              <CategoryWidget />
            </Widgets>
          </WidgetWrapper>
        </GridWrapper>
      </Container>
    </Layout>
  );
};
const Container = styled.div`
  width: 100%;
  margin: auto;
  padding: 0 2.5rem;
  margin-bottom: 2.5rem;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 3rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

const PostWrapper = styled.div`
  grid-column: span 1 / span 1;

  @media (min-width: 1024px) {
    grid-column: span 8 / span 8;
  }
`;

const WidgetWrapper = styled.div`
  grid-column: span 1 / span 1;

  @media (min-width: 1024px) {
    grid-column: span 4 / span 4;
    position: sticky;
    top: 2rem;
  }
`;

const Widgets = styled.div`
  position: relative;
  top: 2rem;

  @media (min-width: 1024px) {
    position: sticky;
  }
`;

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
