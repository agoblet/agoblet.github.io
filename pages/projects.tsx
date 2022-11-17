import * as React from "react";
import {
  Box,
  CardContent,
  Chip,
  Typography,
  Stack,
  Card,
  SxProps,
} from "@mui/material";
import PageTitle from "../components/PageTitle";
import useBreakpoint from "../hooks/useBreakpoint";
import ExportedImage from "next-image-export-optimizer";
import PageHead from "../components/PageHead";
import { Project, projects } from "../cms/projects";

export default function Projects() {
  return (
    <>
      <PageHead
        title="Projects by Axel Goblet | ML engineer @ BigData Republic"
        description="Axel has worked with various companies on a wide range of products. Explore the products developed and the tools used."
      />
      <PageTitle title="Projects" />
      <Stack spacing={0}>
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            project={p}
            sx={{ ml: { sm: 2 }, mr: { sm: 2 }, mb: 8 }}
          />
        ))}
      </Stack>
    </>
  );
}

type ProjectCardProps = {
  project: Project;
  sx?: SxProps;
};

export function ProjectCard({ project, sx }: ProjectCardProps) {
  const isLargeLogo = useBreakpoint("sm");

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack direction="row">
          <Box flexGrow={1}>
            <Typography variant="overline">
              {project.from} {project.from !== project.to && `- ${project.to}`}
            </Typography>
            <Typography variant="h3" component="h2">
              {project.organization}
            </Typography>
          </Box>
          <Box
            width={isLargeLogo ? 150 : 75}
            height={isLargeLogo ? 60 : 30}
            position="relative"
            flexShrink={0}
          >
            <ExportedImage
              src={project.logoPath}
              alt={project.organization}
              fill
              style={{ objectFit: "scale-down", objectPosition: "right top" }}
            />
          </Box>
        </Stack>
        <Typography variant="subtitle2" mb={6}>
          {project.role}
        </Typography>
        {project.description}
        {project.tools.length > 0 && (
          <Box sx={{ flexWrap: "wrap", display: "flex", mt: 8 }}>
            {project.tools.map((t, i) => (
              <Chip
                key={i}
                icon={t.icon({ height: 20, width: 20 })}
                label={t.name}
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
