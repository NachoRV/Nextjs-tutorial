import styles from './header.module.css'
import Link from 'next/link'
import Nav from '../nav/nav';
import Menu from '../svg-icons/menu'
import { useState } from 'react';

const title = 'IRVB'
const subTitle = 'FrontEnd Developer'


export default function Header() {
  const [ stateMenu, setStateMenu ] = useState(false)
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
      <Link href={`/`}>
        <a>
          <div className={styles.logo}>
            <span>{title}</span>
            <span>{subTitle}</span>
          </div>
        </a>
      </Link>
      <Menu onClick={ ()=> setStateMenu(!stateMenu)}></Menu>
      </div>
      {
        stateMenu && <Nav></Nav>
      }
      

    </header>
  )
}