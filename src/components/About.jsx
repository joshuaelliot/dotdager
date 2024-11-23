
import style from '../style/about.module.css'

export default function About({children}) {
  return (
    <div className={style.aboutContainer} id='sobre-mi'>
        <div className={style.aboutTitleContainer}>
        <h2 className={style.aboutTitle}> Sobre Él</h2>
        </div>
        <div className={style.aboutSectionContainer}>
        {children}
        </div>
        

    </div>
  )
}
