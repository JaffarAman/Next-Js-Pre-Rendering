import styles from "../styles/Home.module.css";

export default function Home({ blogs }) {
  return (
    <div className={styles.container}>
      <h1>HELLO WORLD</h1>
      {blogs.map((val, ind) => {
        return (
          <div key={ind}>
            <h2 style={{ margin: "0" }}>{val.id}</h2>
            <p style={{ margin: "0" }}>{val.title}</p>
          </div>
        );
      })}
    </div>
  );
}

// export async function getStaticProps(context) {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const blogs = await res.json();
//   return {
//     props: {
//       blogs,
//     },
//   };
// }

///Redirect :
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await res.json();
  // if (!blogs) {
  //   return {
  //     redirect: {
  //       destination: "./about",
  //       parmanent: false,
  //     },
  //   };
  // }

  ///NOT FOUND
  // if (!blogs) {
  //   return {
  //     notFound: true,
  //   };
  // }

  ///ISR (Incremental static regeneration)
  return {
    props: {
      blogs,
    },
    revalidate: 10,
  };
}
