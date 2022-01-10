import * as React from "react";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Link,
  Typography,
  Card,
  SxProps,
} from "@mui/material";
import PageTitle from "../../components/PageTitle";
import { Masonry } from "@mui/lab";
import PageWidth from "../../components/PageWidth";
import Page from "../../components/Page";
import websiteImage from "../../../assets/content/website.png";
import whitepaperImage from "../../../assets/content/whitepaper.png";
import mlopsCommunityImage from "../../../assets/content/mlops-community.jpg";
import metaflowImage from "../../../assets/content/metaflow.png";
import airflowImage from "../../../assets/content/airflow.png";
import Paragraph from "../../components/Paragraph";
import useCounter from "../../hooks/useCounter";

export function Content() {
  // Workaround to hopefully fix masonry layout breaking.
  // Issue seems related or equal to https://github.com/mui-org/material-ui/issues/29692
  const [_count, increment] = useCounter();

  return (
    <PageWidth>
      <Page>
        <PageTitle title="Content" />
        <Masonry columns={{ xs: 1, md: 2 }} spacing={0}>
          {content.map((c, i) => (
            <Box key={i}>
              <ContentCard
                increment={increment}
                content={c}
                sx={{ ml: { sm: 2 }, mr: { sm: 2 }, mb: 4 }}
              />
            </Box>
          ))}
        </Masonry>
      </Page>
    </PageWidth>
  );
}

type ContentCardProps = {
  content: ContentItem;
  sx?: SxProps;
  increment?: () => void;
};

export function ContentCard({ content, sx, increment }: ContentCardProps) {
  return (
    <Card sx={sx}>
      {content.imagePath && (
        <img
          src={content.imagePath}
          alt={content.title}
          style={{ maxWidth: "100%" }}
          onLoad={() => {
            if (increment) increment();
          }}
        />
      )}
      <CardContent>
        <Typography variant="overline">{content.date}</Typography>
        <Typography variant="h3">{content.title}</Typography>
        <Box mb={4} mt={6}>
          {content.text}
        </Box>
      </CardContent>
      <CardActions>
        <Button>
          <Link variant="inherit" underline="none" href={content.link}>
            Learn more
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export type ContentItem = {
  title: string;
  text: React.ReactNode;
  imagePath?: string;
  link: string;
  date: string;
};

export const content: ContentItem[] = [
  {
    title: "This website is open source",
    imagePath: websiteImage,
    text: (
      <Paragraph gutterBottom={false}>
        I open sourced the code of this website. It is built with React and
        deployed on Github Pages. It might be a bit overengineered for a simple
        website without a backend, but it was a nice opportunity to get to know
        the Material UI package. Github Pages is free for open source projects.
        Feel free to fork the project and adapt it for your own purposes.
      </Paragraph>
    ),
    link: "https://github.com/agoblet/agoblet.github.io",
    date: "5 Jan 2022",
  },
  {
    title: "Whitepaper: Next-level ML with Model Serving Platforms",
    imagePath: whitepaperImage,
    text: (
      <Paragraph gutterBottom={false}>
        I wrote a whitepaper on machine learning model serving. It explains how
        model serving platforms can help organizations scale their machine
        learning capabilities efficiently. The whitepaper contains a conceptual
        description of what I think a model serving platform should look like. I
        deliberately kept out implementation details. These differ from company
        to company. Therefore, they are not useful to all readers. You can
        download the whitepaper for free from BigData Republic&apos;s website.
      </Paragraph>
    ),
    link: "https://www.bigdatarepublic.nl/articles/whitepaper-next-level-ml-model-serving-platforms/",
    date: "30 Nov 2021",
  },
  {
    title:
      "Podcast: Scaling machine learning capabilities in large organizations",
    imagePath: mlopsCommunityImage,
    text: (
      <Paragraph gutterBottom={false}>
        My colleague Bertjan Broeksema and I were invited to Demetrios
        Brinkmann&apos;s MLOps Community Podcast. We talked about the hurdles
        large organizations face when scaling their machine learning
        capabilities. We also discussed how these hurdles can be tackled. We had
        a great time. Not only could we share our vision on the topic with the
        MLOps community, but also the questions from the community helped us
        polish this vision. The podcast recording is available on various
        platforms.
      </Paragraph>
    ),
    link: "https://mlops.community/watch/scaling-machine-learning-capabilities-in-large-organizations-scaling-machine-learning-capabilities-in-large-organizations_5UFTbMh2QR3eSe/",
    date: "Aug 10 2020",
  },
  {
    title: "Blog: A Review of Netflix's Metaflow",
    imagePath: metaflowImage,
    text: (
      <Paragraph gutterBottom={false}>
        Netflix open sourced their internal machine learning platform Metaflow.
        Due to my interest in MLOps, I wanted to dive into the tool right away.
        Thus, I wrote a review on it. Check it out on Medium.
      </Paragraph>
    ),
    link: "https://medium.com/bigdatarepublic/a-review-of-netflixs-metaflow-65c6956e168d",
    date: "20 Dec 2019",
  },
  {
    title:
      "Workshop: Scheduling machine learning pipelines using Apache Airflow",
    imagePath: airflowImage,
    text: (
      <Paragraph gutterBottom={false}>
        At PyData Eindhoven 2019 I gave a workshop on scheduling machine
        learning pipelines using Apache Airflow. In the first plenary part of
        the workshop I explained what Airflow is and why I love the tool. In the
        second part, attendees worked on some exercises in their own Airflow
        cluster, which we deployed for them on AWS. My colleague Dick Abma also
        wrote a{" "}
        <Link href="https://www.bigdatarepublic.nl/articles/hosting-workshops-aws-using-ecs-ec2-and-terraform/">
          blog
        </Link>{" "}
        on this setup. The plenary session recording is available on Youtube.
      </Paragraph>
    ),
    link: "https://www.youtube.com/watch?v=bkZ3HAQYEEg",
    date: "20 nov 2019",
  },
];
