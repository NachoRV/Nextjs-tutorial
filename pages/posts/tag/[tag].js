import Head from "next/head";
import Layout, { siteTitle } from "../../../components/layout";
import utilStyles from "../../../styles/utils.module.css";
import { getSortedPostsData, getAllPostTags } from "../../../lib/posts";
import Link from "next/link";
import Date from "../../../components/date";
import MainLayout from "../../../components/Main-Layout";


export default function PostTags({ allPostsData, tag }) {
  return (
    <MainLayout>
      <Head>
        <title>{ tag }</title>
      </Head>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostTags()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const allPostsData = getSortedPostsData(params.tag);
  return {
    props: {
      tag: params.tag,
      allPostsData,
    },
  };
}
