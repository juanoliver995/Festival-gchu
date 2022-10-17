import LogoFestival from "../assets/LOGO GCHU FEST.png"

const Hero = () => {
    return (
        <div className="container-hero">
            <div className="container-texto">
                <h1>¿TE LO VAS A PERDER?</h1>
                <h1>TENEMOS PREPARADO</h1>
                <div className="lista">
                    <div className="item">
                        <p>Show L-GANTE</p>
                    </div>
                    <div className="item">
                        <p>Bandas en Vivo</p>
                    </div>
                    <div className="item">
                        <p>Djs en Vivo</p>
                    </div>
                    <div className="item">
                        <p>Animacion en Vivo</p>
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