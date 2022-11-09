import { Link } from "react-scroll"

const Entradas = () => {
    return (
        <div className='bg-entradas' id='entradas'>
            <div className='container-entradas'>
                <h2>Informacion sobre Entradas</h2>
                <div className='container-precios'>
                    <div className='informacion-precios generales'>
                        <h3>Valor de las Entradas</h3>
                        <div>
                            <h4>Campo General <span>$1500</span></h4>
                        </div>
                        <div>
                            <h4>Campo Preferencial <span>$2500</span></h4>
                        </div>
                    </div>
                    <div className='informacion-precios vips'>
                        <h3>Informacion Palcos VIPS</h3>
                        <div>
                            <h4>Para adquirir tu palco dirigete a <Link to="vips" spy={true} smooth={true} offset={50} duration={500}>esta seccion</Link></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entradas