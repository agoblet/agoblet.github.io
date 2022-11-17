import * as React from "react";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Link as MUILink,
  Typography,
  Card,
  SxProps,
  Chip,
} from "@mui/material";
import PageTitle from "../../components/PageTitle";
import { Masonry } from "@mui/lab";
import ExportedImage from "next-image-export-optimizer";
import PageHead from "../../components/PageHead";
import { Stack } from "@mui/system";
import Link from "next/link";
import { contentItems, ContentItem } from "../../cms/contentItems";

type ContentProps = {
  items?: ContentItem[];
  title?: string;
};

export default function Content({
  items = contentItems,
  title = "Content",
}: ContentProps) {
  return (
    <>
      <PageHead
        title="Content by Axel Goblet | ML engineer @ BigData Republic"
        description="Axel produces free content for tech community. Topics are often ML related and range from articles to code and talks"
      />
      <PageTitle title={title} />
      {items.length !== contentItems.length && (
        <Box display="flex" justifyContent="center" mb={6}>
          <Link href="/content" style={{ textDecoration: "none" }}>
            <Button>View all content</Button>
          </Link>
        </Box>
      )}
      <Masonry columns={{ xs: 1, md: 2 }} spacing={0}>
        {items.map((c, i) => (
          <Box key={i}>
            <ContentCard
              content={c}
              sx={{ ml: { sm: 2 }, mr: { sm: 2 }, mb: 4 }}
            />
          </Box>
        ))}
      </Masonry>
    </>
  );
}

type ContentCardProps = {
  content: ContentItem;
  sx?: SxProps;
};

export function ContentCard({ content, sx }: ContentCardProps) {
  return (
    <Card sx={sx}>
      <ExportedImage
        src={content.imagePath}
        alt={content.title}
        style={{ width: "100%", height: "auto" }}
        priority={content.priority}
      />
      <CardContent>
        <Stack>
          <Box>
            <Link
              href={`/content/${content.category.slug}`}
              style={{ textDecoration: "none" }}
            >
              <Chip
                onClick={() => {}}
                icon={content.category.icon}
                label={content.category.label}
              />
            </Link>
          </Box>
          <Typography variant="overline">{content.date}</Typography>
          <Typography variant="h3" component="h2">
            {content.title}
          </Typography>
          <Box mb={4} mt={6}>
            {content.text}
          </Box>
        </Stack>
      </CardContent>
      <CardActions>
        <Button>
          <MUILink
            variant="inherit"
            underline="none"
            href={content.link}
            aria-label={content.linkText}
          >
            {content.linkText}
          </MUILink>
        </Button>
      </CardActions>
    </Card>
  );
}
