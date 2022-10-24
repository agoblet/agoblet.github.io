import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import * as React from "react";
import { ContactButtons } from "../components/ContactButtons";
import meImg from "../public/images/me.jpg";
import useBreakpoint from "../hooks/useBreakpoint";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { ProjectCard, projects } from "./projects";
import { content, ContentCard } from "./content";
import PageHead from "../components/PageHead";

export default function Home() {
  const isBigScreen = useBreakpoint("md");

  return (
    <>
      <PageHead
        title="Axel Goblet | Machine learning engineer @ BigData Republic"
        description="Axel Goblet is a machine learning engineer and consultant at BigData Republic. Learn more about the projects he has done and check out his content."
      />
      <Grid container>
        <Grid item container md={7} xs={12} sx={{ alignItems: "center" }}>
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
          position="relative"
          md={5}
          xs={12}
          height="400px"
          sx={{
            justifyContent: "center",
          }}
        >
          <ExportedImage
            src={meImg}
            alt="me"
            layout="fill"
            objectFit="scale-down"
            useWebp={true}
            priority
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
    </>
  );
}
