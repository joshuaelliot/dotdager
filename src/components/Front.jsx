import style from '../style/front.module.css'

export default function Front() {
  return (
    <div className={style.frontContainer}>
        <div className={style.frontTextContainer}>
            <div className = {style.frontTitleContainer}>
                <h1> Soy <span className={style.name}>Mariano Villa</span></h1>
            </div>
            <div className={style.frontTextDescriptionContainer}>
            <p>Apasionado por la filosofía, la guitarra y la programación. Comparto mis proyectos en vivo en YouTube y Twitch. Si no estoy entre líneas de código o con la guitarra, seguro estoy con mi gato. Porque nada mejor que su compañía mientras exploro ideas."

¡Y claro, ¡vos no! 😜</p>
            
            </div>{/*
            <div className={style.frontBtnsContainer}>
                <button id="uno">uno</button>
                <button id="dos">dos</button>
            </div>*/}
        </div>
        <div className={style.frontImageContainer}>
            <img src="/img/rostro.png" alt="" />
        </div>
    </div>
  )
}
