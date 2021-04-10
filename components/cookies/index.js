import style from './index.module.css';
import { useEffect } from 'react'

export default function Cookies({setNewCookie}) {
  return(
    <div className={style.container}>
      Utilizamos cookies propias y de terceros para mejorar la experiencia del usuario a través de su navegación. Si continúas navegando aceptas su uso.
      <div className={style.btnRow}>
        <a onClick={setNewCookie} className={style.btn}> [ Acepto ] </a>
      </div>
    </div>
  )
}