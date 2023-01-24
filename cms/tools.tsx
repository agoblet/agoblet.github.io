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

type IconComponent = (props: SVGProps<SVGElement>) => ReactElement;

type Tool = {
  name: string;
  icon: IconComponent;
};

type ToolCategory = {
  name: string;
  tools: Tool[];
};

export const tools: ToolCategory[] = [
  {
    name: "Languages & Frameworks",
    tools: [
      { name: "Python", icon: PythonIcon },
      { name: "Go", icon: GoIcon },
      { name: "Kotlin", icon: KotlinIcon },
      { name: "React", icon: ReactIcon },
      { name: "R", icon: RIcon },
      { name: "C#", icon: CSharpIcon },
      { name: "Angular", icon: AngularIcon },
    ],
  },
  {
    name: "Cloud & Infrastructure",
    tools: [
      { name: "Kubernetes", icon: KubernetesIcon },
      { name: "AWS", icon: AWSIcon },
      { name: "Terraform", icon: TerraformIcon },
      { name: "Azure", icon: AzureIcon },
      { name: "GCP", icon: GCPIcon },
      { name: "Gitlab", icon: GitlabIcon },
      { name: "Prometheus", icon: PrometheusIcon },
      { name: "Linux", icon: LinuxIcon },
      { name: "Docker", icon: DockerIcon },
      { name: "Ansible", icon: AnsibleIcon },
      { name: "Openstack", icon: OpenstackIcon },
      { name: "Jenkins", icon: JenkinsIcon },
    ],
  },
  {
    name: "Data & Machine Learning",
    tools: [
      { name: "Airflow", icon: AirflowIcon },
      { name: "Tensorflow", icon: TensorflowIcon },
    ],
  },
];
