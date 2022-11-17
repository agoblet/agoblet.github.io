import * as React from "react";
import { Link as MUILink } from "@mui/material";
import websiteImage from "../public/images/content/website.png";
import whitepaperImage from "../public/images/content/whitepaper.png";
import mlopsCommunityImage from "../public/images/content/mlops-community.jpg";
import metaflowImage from "../public/images/content/metaflow.jpg";
import airflowImage from "../public/images/content/airflow.png";
import haplotypeImage from "../public/images/content/haplotype.png";
import Paragraph from "../components/Paragraph";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { Category, categories } from "./categories";

export type ContentItem = {
  title: string;
  text: ReactNode;
  imagePath: StaticImageData;
  link: string;
  date: string;
  linkText: string;
  priority?: boolean;
  category: Category;
};

export const contentItems: ContentItem[] = [
  {
    title: "This website is open source",
    category: categories.code,
    imagePath: websiteImage,
    text: (
      <Paragraph center={false} gutterBottom={false}>
        I open sourced the code of this website. It is built with React and
        deployed on Github Pages. It might be a bit overengineered for a simple
        website without a backend, but it was a nice opportunity to get to know
        the Material UI package. Github Pages is free for open source projects.
        Feel free to fork the project and adapt it for your own purposes.
      </Paragraph>
    ),
    link: "https://github.com/agoblet/agoblet.github.io",
    date: "5 Jan 2022",
    linkText: "View the code",
    priority: true,
  },
  {
    title: "Next-level ML with Model Serving Platforms",
    category: categories.articles,
    imagePath: whitepaperImage,
    text: (
      <Paragraph center={false} gutterBottom={false}>
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
    linkText: "Read the whitepaper",
    priority: true,
  },
  {
    title: "Scaling machine learning capabilities in large organizations",
    category: categories.talks,
    imagePath: mlopsCommunityImage,
    text: (
      <Paragraph center={false} gutterBottom={false}>
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
    linkText: "Listen to the podcast",
  },
  {
    title: "A Review of Netflix's Metaflow",
    category: categories.articles,
    imagePath: metaflowImage,
    text: (
      <Paragraph center={false} gutterBottom={false}>
        Netflix open sourced their internal machine learning platform Metaflow.
        Due to my interest in MLOps, I wanted to dive into the tool right away.
        Thus, I wrote a review on it. Check it out on Medium.
      </Paragraph>
    ),
    link: "https://medium.com/bigdatarepublic/a-review-of-netflixs-metaflow-65c6956e168d",
    date: "20 Dec 2019",
    linkText: "Read the blog",
  },
  {
    title: "Scheduling machine learning pipelines using Apache Airflow",
    category: categories.talks,
    imagePath: airflowImage,
    text: (
      <Paragraph center={false} gutterBottom={false}>
        At PyData Eindhoven 2019 I gave a workshop on scheduling machine
        learning pipelines using Apache Airflow. In the first plenary part of
        the workshop I explained what Airflow is and why I love the tool. In the
        second part, attendees worked on some exercises in their own Airflow
        cluster, which we deployed for them on AWS. My colleague Dick Abma also
        wrote a{" "}
        <MUILink
          href="https://www.bigdatarepublic.nl/articles/hosting-workshops-aws-using-ecs-ec2-and-terraform/"
          aria-label="Read the blog about workshop setup"
        >
          blog
        </MUILink>{" "}
        on this setup. The plenary session recording is available on Youtube.
      </Paragraph>
    ),
    link: "https://www.youtube.com/watch?v=bkZ3HAQYEEg",
    date: "20 nov 2019",
    linkText: "Watch the recording",
  },
  {
    title:
      "On a Fixed Haplotype Variant of the Minimum Error Correction Problem",
    category: categories.articles,
    imagePath: haplotypeImage,
    text: (
      <Paragraph center={false} gutterBottom={false}>
        During my research internship, we studied the Minimum Error Correction
        problem. This problem has been intensively studied in the computational
        biology literature and is also known in the clustering literature:
        essentially we are required to find two cluster centres such that the
        sum of distances to the nearest centre, is minimized. The paper contains
        proofs about the computational complexity of a variant of the Minimum
        Error Correction problem. It was published in COCOON, the journal of
        computing and combinatorics.
      </Paragraph>
    ),
    link: "https://www.researchgate.net/publication/326064707_On_a_Fixed_Haplotype_Variant_of_the_Minimum_Error_Correction_Problem",
    date: "29 Jun 2018",
    linkText: "Read the paper",
  },
];
