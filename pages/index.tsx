import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";
import { ContactButtons } from "../components/ContactButtons";
import meImg from "../public/images/me.jpg";
import useBreakpoint from "../hooks/useBreakpoint";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { contentItems } from "../cms/contentItems";
import { ContentCard } from "./content";
import PageHead from "../components/PageHead";
import { tools } from "../cms/tools";
import { Fragment } from "react";

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
              <Link href="/about" style={{ textDecoration: "none" }}>
                <Button>more about me</Button>
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
            fill
            style={{ objectFit: "scale-down" }}
            priority
          />
        </Grid>
        <Grid item md={6} xs={12} pr={{ md: 2 }} height="100%">
          <Box sx={{ textAlign: "center", height: { md: 150 } }}>
            <Typography variant="h2" mt={20} mb={3}>
              Tools I used
            </Typography>
          </Box>
          <Card>
            <CardContent>
              <Stack>
                {tools.map((t, i) => (
                  <Fragment key={i}>
                    <Typography>{t.name}</Typography>
                    <Box
                      sx={{ flexWrap: "wrap", display: "flex", mt: 1, mb: 3 }}
                    >
                      {t.tools.map((t, i) => (
                        <Chip
                          key={i}
                          icon={t.icon({ height: 20, width: 20 })}
                          label={t.name}
                          sx={{ mr: 1, mb: 1 }}
                        />
                      ))}
                    </Box>
                  </Fragment>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6} xs={12} pl={{ md: 2 }}>
          <Box sx={{ textAlign: "center", height: 150 }}>
            <Typography variant="h2" mt={20} mb={3}>
              Latest Content
            </Typography>
            <Link href="/content" style={{ textDecoration: "none" }}>
              <Button sx={{ mb: 3 }}>more content</Button>
            </Link>
          </Box>
          <ContentCard content={contentItems[0]} />
        </Grid>
      </Grid>
    </>
  );
}
