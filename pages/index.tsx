import Head from "next/head";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import * as React from "react";
import { ContactButtons } from "../components/ContactButtons";
import meImg from "../public/images/me.jpg";
import useBreakpoint from "../hooks/useBreakpoint";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { ProjectCard, projects } from "./projects";
import { content, ContentCard } from "./content";

export default function Home() {
  const isBigScreen = useBreakpoint("md");

  return (
    <>
      <Head>
        <title>Axel Goblet</title>
        <meta property="og:title" content="Axel Goblet" />
      </Head>
      <main>
        <Grid container>
          <Grid item container md={8} xs={12} sx={{ alignItems: "center" }}>
            <Stack>
              <Typography variant="h2" component="h1">
                Hi, I&apos;m Axel! 👋
              </Typography>
              <Typography variant="subtitle1">
                Machine learning engineer @ BigData Republic
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
                <Link href="/about">
                  <Button href="/about">more about me</Button>
                </Link>
              </Box>
            </Stack>
          </Grid>
          <Grid
            container
            item
            md={4}
            xs={12}
            sx={{
              justifyContent: "center",
            }}
          >
            <ExportedImage
              src={meImg}
              alt="me"
              width={300}
              height={400}
              useWebp={true}
            />
          </Grid>
          <Grid item md={6} xs={12} pr={{ md: 2 }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h2" mt={20} mb={3}>
                Current Project
              </Typography>
              <Link href="/projects">
                <Button href="/projects" sx={{ mb: 3 }}>
                  more projects
                </Button>
              </Link>
            </Box>
            <ProjectCard project={projects[0]} />
          </Grid>
          <Grid item md={6} xs={12} pl={{ md: 2 }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h2" mt={20} mb={3}>
                Latest Content
              </Typography>
              <Link href="/content">
                <Button href="/content" sx={{ mb: 3 }}>
                  more content
                </Button>
              </Link>
            </Box>
            <ContentCard content={content[0]} />
          </Grid>
        </Grid>
      </main>
    </>
  );
}
