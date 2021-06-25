import MainLayout from "../../components/Main-Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";

export default function Post({ postData }) {
  return (
    <MainLayout>
      <Head>
        <title>{postData.title}</title>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"
        ></link>
      </Head>
      <article className={utilStyles.article}>
        <div className={utilStyles.img}>
          <Image src={postData.img} alt="picture" width={700} height={300} />
        </div>
        <h1 className={utilStyles.headingL}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
          {console.log(postData)}
        </div>
        <div
          className={utilStyles.article}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
