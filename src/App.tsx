import * as React from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import { Stack } from "@mui/material";
import ScrollToTop from "./components/ScrollToTop";
import loadable from "@loadable/component";
import PageWidth from "./components/PageWidth";
import Page from "./components/Page";
import PageTitle from "./components/PageTitle";

const Home = loadable(() => import("./routes/Home"), {
  fallback: <Loading />,
});
const About = loadable(() => import("./routes/about/About"), {
  fallback: <Loading />,
});
const Projects = loadable(() => import("./routes/projects/Projects"), {
  fallback: <Loading />,
});
const Content = loadable(() => import("./routes/content/Content"), {
  fallback: <Loading />,
});
const NotFound = loadable(() => import("./routes/notfound/NotFound"), {
  fallback: <Loading />,
});

export default function App() {
  return (
    <Stack minHeight="100vh">
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/content" element={<Content />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </Stack>
  );
}

function Loading() {
  return (
    <PageWidth>
      <Page>
        <PageTitle title="Loading page... 🐌" />
      </Page>
    </PageWidth>
  );
}
