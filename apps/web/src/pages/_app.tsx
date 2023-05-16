import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";

import Layout from '../components/layout';
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}