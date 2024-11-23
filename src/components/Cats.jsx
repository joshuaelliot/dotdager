import { useState } from 'react'
import style from '../style/cats.module.css'
import { useEffect } from 'react'
let imgsCats = ["/img/gato-piano.png",
  "/img/gatito-cuello.png",
  "/img/gatito-alone.png"
]

export default function Cats() {
  const [imgUrls, setImgUrls] = useState(imgsCats);

  useEffect(() => {
    const cambiaImg = setInterval(() => {
      setImgUrls((prevUrls) => {
        // Mueve el primer URL al final, desplazando los demás
        return [...prevUrls.slice(1), prevUrls[0]];
      });
    }, 2000);

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(cambiaImg);
  }, []);
  return (
    <div className={style.aboutCatsContainer}>
      <div className={style.cardCatContainer}>
      <div className={style.imgsContainer}>
        <img className={style.imgLarge} src={imgUrls[0]} alt="" />
        <img className={style.imgMedium} src={imgUrls[1]} alt="" />
        <img className={style.imgSmall} src={imgUrls[2]} alt="" />
      </div>
        <div className={style.textCatContainer}>
          <p>Los gatos tienen un lugar especial en mi vida. Su independencia y mirada sabia me fascinan. Siempre están ahí, tranquilos, pero listos para hacerte compañía en el momento justo. Ya sea tocando la guitarra o relajándome, mi gato siempre está presente, como un fiel espectador. Con su compañía, todo fluye mejor.</p>
        </div>
      </div>
    </div>
  )
}
