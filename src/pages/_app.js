import { Provider } from "next-auth/client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "@/libs/ga";

import "@/styles/scss/styles.scss";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
