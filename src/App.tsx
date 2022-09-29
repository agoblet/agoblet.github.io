import * as React from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import { Stack } from "@mui/material";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./routes/Home";
import About from "./routes/about/About";
import Projects from "./routes/projects/Projects";
import Content from "./routes/content/Content";
import NotFound from "./routes/notfound/NotFound";

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
