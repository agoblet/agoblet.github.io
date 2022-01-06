import * as React from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import About from "./routes/about/About";
import { Projects } from "./routes/projects/Projects";
import Home from "./routes/Home";
import { Content } from "./routes/content/Content";
import Footer from "./Footer";
import NotFound from "./routes/notfound/NotFound";
import { Stack } from "@mui/material";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Stack>
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
