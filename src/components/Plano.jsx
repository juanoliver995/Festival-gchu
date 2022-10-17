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
                        <div className="item-info-plano">
                            <img src={uno} />
                            <p>Palco VIP Norte</p>
                        </div>
                        <div className="item-info-plano">
                            <img src={dos} />
                            <p>Palco VIP Sur</p>
                        </div>
                    </div>
                    <div>
                        <div className="item-info-plano">
                            <img src={tres} />
                            <p>Campo Preferencial</p>
                        </div>
                        <div className="item-info-plano">
                            <img src={cuatro} />
                            <p>Campo General</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plano