import plano from "../assets/Planta.jpg"
import perspectiva from "../assets/Perspectiva.jpg"


const Plano = () => {
    return (
        <div className="container-plano">
            <h1>Plano del evento</h1>
            <div className="container-info-plano">
                <img src={plano} className="plano" />
                <img src={perspectiva} className="plano" />
            </div>
        </div>
    )
}

export default Plano