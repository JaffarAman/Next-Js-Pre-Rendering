import React from "react";
import { useRouter } from "next/router";

const BlogId = ({ blog }) => {
  const router = useRouter();
  if (router.isFallback) return <h1>LOADING....</h1>;

  console.log(blog);
  return (
    <div>
      <h1>{blog.id}</h1>
      <h1>{blog.title}</h1>
    </div>
  );
};

////getStaticPath()

export async function getStaticPaths() {
  const paths = ["/blog/1", "/blog/2", "/blog/3"];

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ query, params }) {
  console.log(query, params);
  const { blogid } = query || params;
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + blogid
  );
  const blog = await res.json();
  return {
    props: {
      blog,
    },
  };
}

export default BlogId;
