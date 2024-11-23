
import style from '../style/header.module.css'
export default function Header() {
  return (
    <header className={style.headerContainer}>
      <div className={style.logoContainer}>
        <img src="../../public/img/pepino.jpg" alt="" />
        <span>DotDager</span>
      </div>
        <nav className={style.navContainer}>
            <ul className={style.listNavContainer}>
                <li>Inicio</li>
                <li><a href="#sobre-mi">Sobre Mi</a></li>
                <li><a href="#contactame">Contactame</a></li>
            </ul>
            <ul className={style.listRedesContainer}>
              <li>
                <a  target='_blank' href="https://www.youtube.com/@DotDager" className={style.youtube}>
                <i className={`fa-brands fa-youtube ${style.youtube}`}></i>
                </a>
               </li>
              <li>
              <a  target='_blank' href="https://www.tiktok.com/@elantrodedager" className={style.tiktok}>
              <i className= {`fa-brands fa-tiktok ${style.tiktok}`}></i>
              </a>
                </li>
              <li>
              <a  target='_blank' href="https://www.twitch.tv/dagerxiv" className={style.instagram}>
              <i className={`fa-brands fa-instagram ${style.instagram}`}></i>
              </a>
                </li>
              <li>
              <a target='_blank' href="https://discord.com/invite/4NFk6TamAB" className={style.discord}>
              <i className={`fa-brands fa-discord ${style.discord}`}></i>
              </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}
