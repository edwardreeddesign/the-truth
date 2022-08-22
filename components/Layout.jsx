import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title ? title + ' - The Truth' : 'The Truth'}</title>
        <meta name="description" content="The Truth Blog" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
