import React from 'react'
import Instagram from "../assets/instagram.svg"
const PuntoVenta = () => {
    return (
        <div className='contaier-puntos-venta'>
            <h2>¿Donde adquirir mis entradas?</h2>
            <div className='entradas-fisicas'>
                <h3>Entradas fisicas en nuestros puntos de venta</h3>
            </div>
            <div className='container-puntos'>
                <div className='punto-venta'>
                    <h3>La Bodega</h3>
                    <a href='https://goo.gl/maps/3nW8PivNyNu84xmc6' className='ubi'>Avenida Del Valle 1265, Gualeguaychu</a>
                    <a href='https://www.instagram.com/labodegagchu/?hl=es-la'><img src={Instagram} /></a>
                </div>
                <div className='punto-venta'>
                    <h3>Francesco</h3>
                    <a href='https://goo.gl/maps/bdiebYgfa4J6GDDP8' className='ubi'>Rivadavia 1124, Gualeguaychu</a>
                    <a href='https://www.instagram.com/franchesco_gchu/?hl=es-la'><img src={Instagram} /></a>
                </div>
            </div>
            <div className='container-online'>
                <h3>Entradas Online haciendo click aqui <span><a href='https://www.passline.com/eventos/gualeguaychu-festival'>Passline</a></span></h3>
            </div>
        </div>
    )
}

export default PuntoVenta