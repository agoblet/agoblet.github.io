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
