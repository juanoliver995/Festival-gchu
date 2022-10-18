import LogoFestival from "../assets/LOGO GCHU FEST.png"

const Hero = () => {
    return (
        <div className="container-hero" id="hero">
            <div className="container-texto">
                <h1>Gualeguaychu Festival</h1>
                <div className="lista">
                    <div className="item">
                        <p>SABADO 19 DE NOVIEMBRE</p>
                    </div>
                    <div className="item">
                        <p>CORSODROMO GUALEGUAYCHU</p>
                    </div>
                    <div className="item">
                        <p>SHOW L-GANTE</p>
                    </div>
                    <div className="item">
                        <p>BANDAS, DJS Y ARTISTAS EN VIVO</p>
                    </div>

                </div>
            </div>
            <div className="container-hero-img">
                <img src={LogoFestival} />
            </div>
        </div>
    )
}

export default Hero