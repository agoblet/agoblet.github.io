import * as React from "react";
import PageTitle from "../components/PageTitle";
import { Link as MUILink } from "@mui/material";
import Paragraph from "../components/Paragraph";
import Link from "next/link";
import PageHead from "../components/PageHead";

export default function About() {
  return (
    <>
      <PageHead
        title="About Axel Goblet | Senior MLOPS Engineer @ TMNL"
        description="Axel Goblet is a senior MLOPS engineer at TMNL. Learn more about him and check out his content."
      />
      <PageTitle title="About" />
      <Paragraph>
        My name is Axel Goblet. I am a senior MLOps engineer at Transactie
        Monitoring Nederland (TMNL). My passion for machine learning engineering
        was born at Mediaan. I did an extensive internship there during my
        Bachelor&apos;s. While working on software engineering and data science
        projects for customers, I discovered that a machine learning model alone
        provides no value. A model only comes to life once it is integrated with
        client systems that use it. I loved end-to-end machine learning
        projects, where I develop a model and then integrate it with the
        customer&apos;s cloud services. After my internship, I continued working
        at Mediaan to gain more industry experience while doing my
        Master&apos;s.
      </Paragraph>
      <Paragraph>
        After graduating from Maastricht University in 2018, I joined BigData
        Republic. As a consultant machine learning engineer, I did projects for
        various customers in a range of business/technical contexts. It taught
        me a lot about my craft and helped me generalize. At BigData Republic, I
        also started coaching colleagues and writing content. Check out my{" "}
        <Link href="/content" legacyBehavior passHref>
          <MUILink>content</MUILink>
        </Link>{" "}
        page if you are interested in my work.
      </Paragraph>
      <Paragraph>
        After some years of consulting work, I was looking for an employer where
        I could iterate over a product for a longer period of time. I found this
        at TMNL. Here, I build user-friendly, performant and secure machine
        learning infrastructure. TMNL uses machine learning to combat financial
        crime. It feels very good to be able to use my expertise to make the
        Netherlands a safer place.
      </Paragraph>
      <Paragraph gutterBottom={false}>
        I spend much of my free time outside enjoying nature together with my
        partner and dog. I love hiking through the beautiful area around my
        hometown Valkenburg. When the weather allows it, you can find me on the
        water windsurfing. I also love meeting up with friends for board games.
        My favourite game? Probably Terra Mystica.
      </Paragraph>
    </>
  );
}
