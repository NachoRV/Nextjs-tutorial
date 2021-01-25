import MainLayout from '../../components/Main-Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Image from 'next/image'
  


export default function Post({ postData }) {
  return (<>
    <MainLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={utilStyles.article}>
       <div className={utilStyles.img}>
       <Image
        src={postData.img}
        alt="picture"
        width={700}
        height={300}
      />
       </div>
        <h1 className={utilStyles.headingL}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
          {
            console.log(postData)
          }
        </div>
        <div className={utilStyles.article} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </MainLayout>
    <style jsx>{`
      pre {
        white-space: pre-wrap;       /* Since CSS 2.1 */
        white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
        white-space: -pre-wrap;      /* Opera 4-6 */
        white-space: -o-pre-wrap;    /* Opera 7 */
        word-wrap: break-word;       /* Internet Explorer 5.5+ */
      }
    `}
    </style>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  console.log(paths)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData =  await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}