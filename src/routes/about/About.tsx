import * as React from "react";
import PageTitle from "../../components/PageTitle";
import PageWidth from "../../components/PageWidth";
import { Link as MUILink } from "@mui/material";
import { Link } from "react-router-dom";
import Page from "../../components/Page";
import Paragraph from "../../components/Paragraph";

export default function About() {
  return (
    <PageWidth>
      <Page>
        <PageTitle title="About" />
        <Paragraph>
          My name is Axel Goblet. I am a machine learning engineer at BigData
          Republic. My passion for machine learning engineering was born at
          Mediaan. I did an extensive internship there during my
          Bachelor&apos;s. While working on software engineering and data
          science projects for customers, I discovered that a machine learning
          model alone does not provide any value. A model only comes alive once
          it is integrated with client systems that can actually leverage its
          power. I loved end-to-end machine learning projects, where I develop a
          model and then integrate it with the customer&apos;s cloud services.
          After my internship, I continued working at Mediaan to gain more
          industry experience while doing my Master&apos;s.
        </Paragraph>
        <Paragraph>
          After graduating from Maastricht University in 2018, I joined BigData
          Republic. I found a great employer to continue my growth as a machine
          learning engineer. The challenging customer projects and great
          colleagues brought my knowledge to the current level. Aside from
          helping my current customer bol.com, I coach colleagues and help with
          internal and external knowledge sharing. I love researching and
          working on MLOps topics. Check out my{" "}
          <MUILink component={Link} to="/content">
            content
          </MUILink>{" "}
          page if you are interested in my work.
        </Paragraph>
        <Paragraph gutterBottom={false}>
          I spend much of my free time outside enjoying nature. I love hiking
          through the beautiful area around my hometown Valkenburg. When the
          weather allows it, you can find me on the water windsurfing. I also
          love meeting up with friends for board games. My favourite game?
          Probably Terra Mystica.
        </Paragraph>
      </Page>
    </PageWidth>
  );
}
