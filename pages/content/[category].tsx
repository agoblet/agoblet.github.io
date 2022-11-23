import * as React from "react";

import { useRouter } from "next/router";
import { categories, Category } from "../../cms/categories";
import Content from "./index";
import { contentItems } from "../../cms/contentItems";

export default function Cat() {
  const slug = useRouter().query.category as string;
  const category = Object.values(categories).find(
    (c) => c.slug == slug
  ) as Category;

  return (
    <Content
      items={contentItems.filter((c) => c.category === category)}
      title={category.title}
    />
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.values(categories).map((c) => {
      return { params: { category: c.slug } };
    }),
    fallback: false,
  };
}

export async function getStaticProps() {
  return { props: {} };
}
