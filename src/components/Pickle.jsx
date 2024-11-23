
import style from '../style/pickle.module.css'

export default function Pickle() {
  return (
    <div className={style.aboutPickleContainer}>
    <div className={style.cardPickleContainer}>
      <picture>
        <img src="/img/pepinillo-bikini.jpeg" alt="" />
      </picture>
      <div className={style.textPickleContainer}>
        <p>Soy el que siempre tiene un pepinillo a mano para meterle onda a la charla. ¿Quién no va a soltar una poronga cuando tenés algo tan jugoso entre las manos? Me encanta tirar falopa, todo en joda, obvio. Al final, ¿quién no se prende a un toque travieso con un pepinillo bien crujiente? ¡Es la receta del éxito!</p>
      </div>
    </div>
  </div>
  )
}
