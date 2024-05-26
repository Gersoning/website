
export default function Header() {


    return (
        <header className="header" id="home">
            <div className="header__contenedor">
                <div className="header__barra">       
                    <div className="header__image">
                        <figure className="header__img">
                            <img src="/src/assets/img/logo.png" alt="" />
                        </figure>
                        <h2>Gerson</h2>             
                    </div>
               

                    <nav className="navigation">
                        <a className="navigation__link" href="#home">Inicio</a>
                        <a className="navigation__link" href="#about">Acerca de mi</a>
                        <a className="navigation__link" href="#projects">Proyectos</a>
                    </nav>

                    <button className="header__action">
                        Contactame
                    </button>
                </div>
            </div>        
        </header>

    )
}