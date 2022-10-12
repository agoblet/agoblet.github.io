import * as React from "react";
import {
  Box,
  CardContent,
  Chip,
  Typography,
  Stack,
  Card,
  SxProps,
  Link,
} from "@mui/material";
import PageTitle from "../components/PageTitle";
import useBreakpoint from "../hooks/useBreakpoint";
import bolLogo from "../public/images/organizations/bol.png";
import politieLogo from "../public/images/organizations/politie.png";
import rmcLogo from "../public/images/organizations/rmc.png";
import kpnLogo from "../public/images/organizations/kpn.png";
import nutrecoLogo from "../public/images/organizations/nutreco.png";
import mediaanLogo from "../public/images/organizations/mediaan.png";
import bdrLogo from "../public/images/organizations/bdr.png";
import managedGridLogo from "../public/images/organizations/managedgrid.png";
import Paragraph from "../components/Paragraph";
import PythonIcon from "../public/images/tools/python.svg";
import KubernetesIcon from "../public/images/tools/kubernetes.svg";
import GCPIcon from "../public/images/tools/google-cloud.svg";
import AnsibleIcon from "../public/images/tools/ansible.svg";
import AWSIcon from "../public/images/tools/aws.svg";
import ReactIcon from "../public/images/tools/react.svg";
import KotlinIcon from "../public/images/tools/kotlin.svg";
import OpenstackIcon from "../public/images/tools/openstack-icon.svg";
import TerraformIcon from "../public/images/tools/terraform-icon.svg";
import GitlabIcon from "../public/images/tools/gitlab.svg";
import GoIcon from "../public/images/tools/gopher.svg";
import AirflowIcon from "../public/images/tools/airflow.svg";
import JenkinsIcon from "../public/images/tools/jenkins.svg";
import AzureIcon from "../public/images/tools/azure.svg";
import TensorflowIcon from "../public/images/tools/tensorflow.svg";
import RIcon from "../public/images/tools/r.svg";
import CSharpIcon from "../public/images/tools/c-sharp.svg";
import AngularIcon from "../public/images/tools/angular-icon.svg";
import PrometheusIcon from "../public/images/tools/prometheus.svg";
import LinuxIcon from "../public/images/tools/linux-tux.svg";
import DockerIcon from "../public/images/tools/docker-icon.svg";
import { ReactElement, SVGProps } from "react";
import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import Head from "next/head";

export type IconComponent = (props: SVGProps<SVGElement>) => ReactElement;

export type Tool = {
  name: string;
  icon: IconComponent;
};

export const tools = {
  python: { name: "Python", icon: PythonIcon },
  kubernetes: { name: "Kubernetes", icon: KubernetesIcon },
  gcp: { name: "GCP", icon: GCPIcon },
  react: { name: "React", icon: ReactIcon },
  ansible: { name: "Ansible", icon: AnsibleIcon },
  go: { name: "Go", icon: GoIcon },
  kotlin: { name: "Kotlin", icon: KotlinIcon },
  openstack: { name: "Openstack", icon: OpenstackIcon },
  aws: { name: "AWS", icon: AWSIcon },
  terraform: { name: "Terraform", icon: TerraformIcon },
  gitlab: { name: "Gitlab", icon: GitlabIcon },
  airflow: { name: "Airflow", icon: AirflowIcon },
  jenkins: { name: "Jenkins", icon: JenkinsIcon },
  azure: { name: "Azure", icon: AzureIcon },
  r: { name: "R", icon: RIcon },
  tensorflow: { name: "Tensorflow", icon: TensorflowIcon },
  csharp: { name: "C#", icon: CSharpIcon },
  angular: { name: "Angular", icon: AngularIcon },
  prometheus: { name: "Prometheus", icon: PrometheusIcon },
  linux: { name: "Linux", icon: LinuxIcon },
  docker: { name: "Docker", icon: DockerIcon },
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Axel Goblet</title>
        <meta property="og:title" content="Projects | Axel Goblet" />
      </Head>
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
            {project.logoPath && (
              <ExportedImage
                src={project.logoPath}
                alt={project.organization}
                useWebp={true}
                layout="fill"
                objectFit="scale-down"
                objectPosition="right top"
              />
            )}
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

type Project = {
  organization: string;
  from: string;
  to: string;
  description: React.ReactNode;
  tools: Tool[];
  role: string;
  logoPath: StaticImageData;
  logoWidth: number;
  logoHeight: number;
};

export const projects: Project[] = [
  {
    organization: "bol.com (via BigData Republic)",
    logoPath: bolLogo,
    logoWidth: 1013,
    logoHeight: 213,
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
    logoWidth: 293,
    logoHeight: 208,
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
    logoWidth: 2365,
    logoHeight: 869,
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
    logoWidth: 444,
    logoHeight: 183,
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
    logoWidth: 1669,
    logoHeight: 756,
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
    logoWidth: 2362,
    logoHeight: 794,
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
    logoWidth: 965,
    logoHeight: 358,
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
    logoWidth: 1181,
    logoHeight: 930,
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
