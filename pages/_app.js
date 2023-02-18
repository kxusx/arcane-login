import { getAuth } from "../auth/getArcanaAuth";
import { ProvideAuth } from "../auth/useArcanaAuth";
import Layout from "../components/layout";
import { Sora } from "@next/font/google";

const sora = Sora();
// specify network as "testnet" while instantiating the AuthProvider
const auth = getAuth();

export default function App({ Component, pageProps }) {
  return (
    <ProvideAuth provider={auth}>
      <Layout className={sora.className}>
        <Component {...pageProps} />
      </Layout>
    </ProvideAuth>
  );
}
