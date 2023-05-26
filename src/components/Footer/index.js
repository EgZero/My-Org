import  './footer.css'

const Footer = ()=>{
    return <footer className="footer" style = {{backgroundImage: "url(img/Footer.png)"}}>
            <div className="socials">
                <a className='icono' href='https://google.com'>
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a className='icono' href='https://linkedIn.com/angel-orellana'>
                    <i className="fa-brands fa-linkedin"></i>   
                </a>
                <a className='icono' href='https://google.com'>
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
            <img className="logo" src="img/Logo.png" alt="ORG - Logo"/>
            <strong className="autor">Desarrollado por Angel Orellana</strong>
        </footer>
}

export default Footer