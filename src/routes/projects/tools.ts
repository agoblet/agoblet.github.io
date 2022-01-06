import PythonIcon from "../../../assets/tools/python.svg";
import KubernetesIcon from "../../../assets/tools/kubernetes.svg";
import GCPIcon from "../../../assets/tools/google-cloud.svg";
import AnsibleIcon from "../../../assets/tools/ansible.svg";
import AWSIcon from "../../../assets/tools/aws.svg";
import ReactIcon from "../../../assets/tools/react.svg";
import KotlinIcon from "../../../assets/tools/kotlin.svg";
import OpenstackIcon from "../../../assets/tools/openstack-icon.svg";
import TerraformIcon from "../../../assets/tools/terraform-icon.svg";
import GitlabIcon from "../../../assets/tools/gitlab.svg";
import GoIcon from "../../../assets/tools/gopher.svg";
import AirflowIcon from "../../../assets/tools/airflow.svg";
import JenkinsIcon from "../../../assets/tools/jenkins.svg";
import AzureIcon from "../../../assets/tools/azure.svg";
import TensorflowIcon from "../../../assets/tools/tensorflow.svg";
import RIcon from "../../../assets/tools/r.svg";
import CSharpIcon from "../../../assets/tools/c-sharp.svg";
import AngularIcon from "../../../assets/tools/angular-icon.svg";
import PrometheusIcon from "../../../assets/tools/prometheus.svg";
import { ReactElement, SVGProps } from "react";

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
};
