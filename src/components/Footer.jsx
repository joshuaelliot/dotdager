import '../style/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-about">
        <h3>Pensamiento del dia</h3>
        <p>La tecnología es el lienzo donde podemos pintar nuestras ideas.
           Programar es más que escribir código; es disfrutar el proceso y 
           crear soluciones que cambian el mundo. <em>Mariano Villa</em> </p>
      </div>
      
      <div className="footer-links">
        <h3>Links de Ayuda</h3>
        <ul>
          <li><a href="#">Politica de Privacidad</a></li>
          <li><a href="#">Termino de Servicios</a></li>
          <li><a href="#">Soporte</a></li>
        </ul>
      </div>
      
      <div className="footer-contact" id='contactame'>
        <h3>Contactame</h3>
        <p>Email: MarianoVilla@developer.com</p>
        
      </div>
      
      <div className="footer-social">
        <h3>Sigueme</h3>
        <ul>
        <i className="fa-brands fa-discord"></i>
          <li><a href="https://discord.com/invite/4NFk6TamAB">Discord</a></li>
          <i className="fa-brands fa-twitch"></i>
          <li>
            <a href="https://www.twitch.tv/dagerxiv">Twitch</a>
            </li>
            <i className="fa-brands fa-instagram"></i>
          <li>
            <a href="https://www.instagram.com/dager.32/">Instagram</a>
            </li>
            <i className="fa-brands fa-tiktok"></i>
            <li>
                <a href="https://www.tiktok.com/@elantrodedager">TikTok</a>
            </li>
        </ul>
      </div>
    </div>
  
    <div className="footer-bottom">
      <p>&copy; 2024 Your Website. All Rights Reserved.</p>
    </div>
  </footer>
  
  )
}
