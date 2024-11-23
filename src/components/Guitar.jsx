import { useState , useEffect } from 'react';
import style from '../style/guitar.module.css'



let imgsGuitar =["/img/trovador.jpeg",
  "/img/concierto.jpeg",
  "/img/trovador-guitarra.jpeg"
]

export default function Guitar() {


  const [imgUrls, setImgUrls] = useState(imgsGuitar);

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
    <div className={style.aboutGuitarContainer}>
    <div className={style.cardGuitarContainer}>
     {/*
     <picture>
        <img src="../../public/img/loco-guitarra.png" alt="" />
      </picture>
     */}
      <div className={style.imgsContainer}>
        <img className={style.imgLarge} src={imgUrls[0]}alt="" />
        <img className={style.imgMedium} src={imgUrls[1]} alt="" />
        <img className={style.imgSmall} src={imgUrls[2]} alt="" />
      </div>

      <div className={style.textGuitarContainer}>
        <p>El rock es mi esencia, no solo lo escucho,
           lo vivo. La guitarra me permite crear música 
           que vibra en lo más profundo. Ser parte de una 
           banda me conecta con otros a través de cada nota.
            Y cuando ensayo, mi compañero fiel, mi gato,
             siempre está ahí, como si entendiera cada riff. 
             Juntos, rockeamos la vida.</p>
      </div>
    </div>
  </div>
  )
}
