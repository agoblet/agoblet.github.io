import * as React from "react";
import { Grid, Button, Stack, Box, Typography } from "@mui/material";
import meImg from "../../assets/me.jpg";
import { content, ContentCard } from "./content/Content";
import { ProjectCard, projects } from "./projects/Projects";
import PageWidth from "../components/PageWidth";
import { ContactButtons } from "../components/ContactButtons";
import Page from "../components/Page";
import { Link } from "react-router-dom";
import useBreakpoint from "../hooks/useBreakpoint";

export default function Home() {
  const isBigScreen = useBreakpoint("md");

  return (
    <PageWidth>
      <Page>
        <Grid container>
          <Grid item container md={8} xs={12} sx={{ alignItems: "center" }}>
            <Stack
              sx={{
                ml: {
                  xs: "auto",
                  md: 0,
                },
                mr: {
                  xs: "auto",
                  md: 0,
                },
              }}
            >
              <Typography variant="h2">Hi, I&apos;m Axel! 👋</Typography>
              <Typography variant="subtitle1">
                Machine learning engineer @ BigData Republic{" "}
              </Typography>
              <Typography mb={4} variant="subtitle2">
                Valkenburg aan de Geul, Netherlands 🇳🇱
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
              >
                {isBigScreen && (
                  <Typography variant="overline">Get in touch</Typography>
                )}
                <ContactButtons />
                <Button component={Link} to="/about">
                  more about me
                </Button>
              </Box>
            </Stack>
          </Grid>
          <Grid
            container
            item
            md={4}
            xs={12}
            sx={{
              height: "300px",
              overflow: "hidden",
              justifyContent: "center",
            }}
          >
            <img src={meImg} alt="me" style={{ maxWidth: 300 }} />
          </Grid>
          <Grid item md={6} xs={12} pl={{ md: 2 }} pr={{ md: 2 }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h2" mt={20} mb={3}>
                Current Project
              </Typography>
              <Button component={Link} to="/projects" sx={{ mb: 3 }}>
                more projects
              </Button>
            </Box>
            <ProjectCard project={projects[0]} />
          </Grid>
          <Grid item md={6} xs={12} pl={{ md: 2 }} pr={{ md: 2 }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h2" mt={20} mb={3}>
                Latest Content
              </Typography>
              <Button component={Link} to="/content" sx={{ mb: 3 }}>
                more content
              </Button>
            </Box>
            <ContentCard content={content[0]} />
          </Grid>
        </Grid>
      </Page>
    </PageWidth>
  );
}
