import * as React from "react";
import { Link } from "@mui/material";
import bolLogo from "../public/images/organizations/bol.png";
import politieLogo from "../public/images/organizations/politie.png";
import rmcLogo from "../public/images/organizations/rmc.png";
import kpnLogo from "../public/images/organizations/kpn.png";
import nutrecoLogo from "../public/images/organizations/nutreco.png";
import mediaanLogo from "../public/images/organizations/mediaan.png";
import bdrLogo from "../public/images/organizations/bdr.png";
import managedGridLogo from "../public/images/organizations/managedgrid.png";
import Paragraph from "../components/Paragraph";
import { StaticImageData } from "next/image";
import { Tool, tools } from "./tools";

export type Project = {
  organization: string;
  from: string;
  to: string;
  description: React.ReactNode;
  tools: Tool[];
  role: string;
  logoPath: StaticImageData;
};

export const projects: Project[] = [
  {
    organization: "bol.com (via BigData Republic)",
    logoPath: bolLogo,
    role: "Data Engineer",
    from: "2021",
    to: "2022",
    description: (
      <Paragraph center={false}>
        My team keeps the platform free of unwanted products. We do this by
        enabling moderators to quickly search and clean the product catalog via
        a web application. In addition, we automate parts of the moderation
        process using machine learning.
      </Paragraph>
    ),
    tools: [
      tools.python,
      tools.react,
      tools.kubernetes,
      tools.gcp,
      tools.prometheus,
      tools.gitlab,
      tools.kotlin,
    ],
  },
  {
    organization: "Managed Grid (via BigData Republic)",
    logoPath: managedGridLogo,
    role: "Team Lead",
    from: "2021",
    to: "2021",
    description: (
      <Paragraph center={false}>
        I lead a team of machine learning engineers during the development of a
        predictive system in the energy domain. My responsiblities were system
        design, project management and coaching of team members.
      </Paragraph>
    ),
    tools: [tools.python, tools.ansible, tools.linux, tools.docker],
  },
  {
    organization: "Politie (via BigData Republic)",
    logoPath: politieLogo,
    role: "MLOps Engineer",
    from: "2020",
    to: "2021",
    description: (
      <Paragraph center={false}>
        My team built a data science platform helping hundreds of data
        scientists work secure and efficiently. The platform is based on
        Kubeflow, and integrated with all important police systems. My former
        colleague Steven Reitsma published an interesting (Dutch){" "}
        <Link
          href="https://reitsma.io/blog/aap"
          aria-label="Read the blog about the platform"
        >
          blog
        </Link>{" "}
        about it.
      </Paragraph>
    ),
    tools: [
      tools.kubernetes,
      tools.ansible,
      tools.go,
      tools.terraform,
      tools.python,
      tools.openstack,
      tools.prometheus,
      tools.gitlab,
      tools.linux,
    ],
  },
  {
    organization: "RMC (via BigData Republic)",
    role: "Cloud Engineer",
    from: "2020",
    to: "2020",
    logoPath: rmcLogo,
    description: (
      <Paragraph center={false}>
        I migrated RMC&apos;s sensor data pipelines from legacy software to a
        modern cloud stack. The modernized stack allows RMC to add new features
        to the platform, improving the service for their customers.
      </Paragraph>
    ),
    tools: [tools.python, tools.aws, tools.terraform, tools.go, tools.airflow],
  },
  {
    organization: "KPN (via BigData Republic)",
    role: "Machine Learning Engineer",
    from: "2019",
    to: "2020",
    logoPath: kpnLogo,
    description: (
      <Paragraph center={false}>
        As part of the Finance Analytics team, I helped make KPN Finance more
        data driven. We did this by creating machine learning models for
        financial forecasting. The models were integrated with the financial
        planning system.
      </Paragraph>
    ),
    tools: [tools.python, tools.airflow, tools.kubernetes, tools.jenkins],
  },
  {
    organization: "Nutreco (via BigData Republic)",
    logoPath: nutrecoLogo,
    role: "Machine Learning Engineer",
    from: "2018",
    to: "2019",
    description: (
      <Paragraph center={false}>
        I worked on various machine learning initiatives concerning feed quality
        and animal health. I also helped Nutreco find valuable machine learning
        use cases and set up projects that implement them.
      </Paragraph>
    ),
    tools: [tools.python, tools.kubernetes, tools.azure, tools.tensorflow],
  },
  {
    organization: "BigData Republic",
    logoPath: bdrLogo,
    role: "Machine Learning Engineer",
    from: "2018",
    to: "Now",
    description: (
      <Paragraph center={false}>
        As a consultant I help customers in various sectors build machine
        learning systems. You can read more about each individual project above.
        Next to my project work I help with the internal and external knowledge
        sharing. I also mentor colleagues in their projects and personal
        development.
      </Paragraph>
    ),
    tools: [],
  },
  {
    organization: "Mediaan",
    logoPath: mediaanLogo,
    role: "Software Engineer & Data Scientist",
    from: "2014",
    to: "2018",
    description: (
      <Paragraph center={false}>
        I joined Mediaan for a 2 year internship of 20 hours per week on average
        during my Bachelor&apos;s. The internship was part of a new program
        focused on connecting Maastricht University students with the businesses
        in the area. I started out as a software engineer building frontend and
        backend applications for various customers. In the latter part of my
        internship I worked on data science projects. After my internship, I
        kept working at Mediaan next to my Master&apos;s doing more end-to-end
        data science{" "}
        <Link
          href="https://mediaan.com/cases/predictive-model-cb"
          aria-label="Read more about an example customer project"
        >
          projects
        </Link>{" "}
        for customers.
      </Paragraph>
    ),
    tools: [
      tools.python,
      tools.kubernetes,
      tools.azure,
      tools.r,
      tools.angular,
      tools.csharp,
    ],
  },
];
