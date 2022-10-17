import React from 'react'

const Entradas = () => {
    return (
        <div className='container-entradas'>
            <h2>Informacion sobre Entradas</h2>
            <div className='container-precios'>
                <div className='informacion-precios'>
                    <h3>Valor de las Entradas</h3>
                    <div>
                        <h4>Campo General <span>$1000</span></h4>
                    </div>
                    <div>
                        <h4>Campo Preferencial <span>$1700</span></h4>
                    </div>
                </div>
                <div className='informacion-precios'>
                    <h3>Informacion Palcos VIPS</h3>
                    <div>
                        <h4>Para adquirir tu palco vip comunicate con nosotros
                            a traves de nuestras <span><a href='https://www.instagram.com/gualeguaychufestival/?hl=es-la'>redes sociales</a></span></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entradas