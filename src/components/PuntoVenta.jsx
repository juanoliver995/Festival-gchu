import React from 'react'
import Instagram from "../assets/instagram.svg"

const PuntoVenta = () => {
    return (
        <div className='bg-puntos' id='puntos'>
            <div className='contaier-puntos-venta'>
                <h2>¿Donde adquirir mis entradas?</h2>
                <div className='entradas-fisicas'>
                    <h3><span>Entradas fisicas</span> en nuestros puntos de venta</h3>
                </div>
                <div className='container-puntos'>
                    <div className='punto-venta'>
                        <h3>Gualeguaychu Festival</h3>
                        <h5>Gualeguaychu</h5>
                        <a target="_blank" href='https://walink.co/04b693' className='ubi'>Tel: 3446-614304</a>
                        <a className='link-venta' target="_blank" href='https://www.instagram.com/gualeguaychufestival/?hl=es-la'><img src={Instagram} />@gualeguaychufestival</a>
                    </div>
                    <div className='punto-venta'>
                        <h3>La Bodega</h3>
                        <h5>Gualeguaychu</h5>
                        <a target="_blank" href='https://goo.gl/maps/3nW8PivNyNu84xmc6' className='ubi'>Avenida Del Valle 1265, Gualeguaychu</a>
                        <a className='link-venta' target="_blank" href='https://www.instagram.com/labodegagchu/?hl=es-la'><img src={Instagram} />@labodegagchu</a>
                    </div>
                    <div className='punto-venta'>
                        <h3>Francesco</h3>
                        <h5>Gualeguaychu</h5>
                        <a target="_blank" href='https://goo.gl/maps/bdiebYgfa4J6GDDP8' className='ubi'>Rivadavia 1124, Gualeguaychu</a>
                        <a className='link-venta' target="_blank" href='https://www.instagram.com/franchesco_gchu/?hl=es-la'><img src={Instagram} />@franchesco_gchu</a>
                    </div>
                    <div className='punto-venta'>
                        <h3>Wonder Bike</h3>
                        <h5>La Roque</h5>
                        <a target="_blank" href='https://goo.gl/maps/bdiebYgfa4J6GDDP8' className='ubi'>Magnasco y Urquiza, La Roque</a>
                        <a className='link-venta' target="_blank" href='https://www.instagram.com/wonderbikelque/?hl=es-la'><img src={Instagram} />@wonderbikelque</a>
                    </div>
                </div>
                <div className='container-online'>
                    <h3>Entradas Online a traves de <span><a target="_blank" href='https://www.passline.com/eventos/gualeguaychu-festival'>Passline haciendo click aqui</a></span></h3>
                </div>
            </div>
        </div>
    )
}

export default PuntoVenta