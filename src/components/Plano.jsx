import plano from "../assets/Render_Axo.jpg"
import uno from "../assets/1.png"
import dos from "../assets/2.png"
import tres from "../assets/3.png"
import cuatro from "../assets/4.png"

const Plano = () => {
    return (
        <div className="container-plano">
            <h1>Plano general del evento</h1>
            <div className="container-info-plano">
                <img src={plano} className="plano" />
            </div>
            <div className="container-info-entradas">
                <div className="info-plano">
                    <div>
                        <h3>Palcos VIP</h3>
                        <div className="item-info-plano">
                            <div className="info-plano-ubi">
                                <img src={uno} />
                                <p>Norte</p>
                            </div>
                            <div className="button-plano">
                                <a href="https://walink.co/f5f3db">Mas Informacion</a>
                            </div>
                        </div>
                        <div className="item-info-plano">
                            <div className="info-plano-ubi">
                                <img src={dos} />
                                <p>Sur</p>
                            </div>
                            <div className="button-plano">
                                <a href="https://walink.co/f5f3db">Mas Informacion</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Campo</h3>
                        <div className="item-info-plano">
                            <div className="info-plano-ubi">
                                <img src={tres} />
                                <p>Preferencial</p>
                            </div>
                            <div className="button-plano">
                                <a href="https://www.passline.com/eventos/gualeguaychu-festival">Comprar Online</a>
                            </div>
                        </div>
                        <div className="item-info-plano">
                            <div className="info-plano-ubi">
                                <img src={cuatro} />
                                <p>General</p>
                            </div>
                            <div className="button-plano">
                                <a href="https://www.passline.com/eventos/gualeguaychu-festival">Comprar Online</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plano