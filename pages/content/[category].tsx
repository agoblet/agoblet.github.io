import * as React from "react";

import { useRouter } from "next/router";
import { categories } from "../../cms/categories";
import NotFound from "../404";
import Content from "./index";
import { contentItems } from "../../cms/contentItems";

export default function Cat() {
  const slug = useRouter().query.category as string;
  const category = Object.values(categories).filter((c) => c.slug == slug);
  if (category.length === 0) {
    return <NotFound />;
  }

  return (
    <Content
      items={contentItems.filter((c) => c.category === category[0])}
      title={category[0].title}
    />
  );
}
