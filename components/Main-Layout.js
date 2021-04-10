import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Nav from './nav/nav'
import Footer from './footer'
import Header from'./header'
import Prism from "prismjs"
import Cookies from './cookies'

const name = 'IRVB'
export const siteTitle = 'Home'
const newCookie = 'CONSENT=Yes'

export default function MainLayout({ children, home }) {

  const [cookie, setCookie ] = useState(false)
  const setNewCookie = () => {
    setCookie(true)
    document.cookie = newCookie
  }

  useEffect(() => {
    Prism.highlightAll();
    const cookies = document.cookie
    const arrayCookies = cookies.replace(/ /g, "").split(";");
    setCookie(arrayCookies.includes(newCookie));

  }, []);


  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header></Header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer></Footer>
      { 
      !cookie && (
         <Cookies setNewCookie={setNewCookie}></Cookies>
      )}
    </div>
  )
}
