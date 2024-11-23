import { useEffect,useState } from "react";
import style from '../style/developer.module.css'

let imgsGuitar =["../../public/img/stream1.jpg",
    "../../public/img/stream2.jpg",
    "../../public/img/stream3.jpg"
  ]

export default function Developer() {
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
    <div className={style.aboutDeveloperContainer}>
    <div className={style.cardDeveloperContainer}>
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

      <div className={style.textDeveloperContainer}>
        {
        <p>Cuando hago streams me gusta 
         dar un toque de humor a cada línea de código, porque en la programación también hay espacio para un poco de falopa. Al final, lo importante es que todos se prendan y aprendan algo nuevo, con ganas y sin complicarse la vida. ¡Eso es lo que más me gusta
        </p>
        }
        
      </div>
    </div>
  </div>
  )
}
