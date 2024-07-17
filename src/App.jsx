import React, { useEffect } from "react";
import { useHref, useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";

import routes from "./routes";
import Topbar from "./components/Topbar/Topbar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import StickyNavbar from "./components/StickyNavbar/StickyNavbar";
import ScrollToTopBtn from "./components/ScrollToTopBtn/ScrollToTopBtn";
import store from "./Redux/store";

function App() {
  const queryClient = new QueryClient();
  const router = useRoutes(routes);
  const href = useHref();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [href]);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="font-Yekan">
          <header>
            <Topbar />
            <Navbar />
            <StickyNavbar />
          </header>
          {router}
          <Footer />
        </div>
      </Provider>
      <ScrollToTopBtn />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
