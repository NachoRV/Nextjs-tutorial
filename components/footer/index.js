import style from './index.module.css';
import Twitter from '../svg-icons/twitter'
import Linkedin from '../svg-icons/linkedin';
import Github from '../svg-icons/Github';
import Link from 'next/link';


export default function Footer() {
  return (
    <div className={style.footer}>
      <p>
      Created with 💚 by IRVB follow me on
      <Link href="https://twitter.com/I_R_V_B">
      <a className={style.link} target="_blank">
        <Twitter fill={'#191516'}></Twitter> 
      </a>
      </Link>
      <Link href="https://www.linkedin.com/in/ignacioroyovillanova/">
        <a className={style.link} target="_blank">
        <Linkedin fill={'#191516'}></Linkedin>
        </a>
      </Link>
      <Link href="https://github.com/NachoRV" >
        <a className={style.link} target="_blank">
          <Github fill={'#191516'}></Github>
        </a>
      </Link>
      </p>
    </div>
  )
}
