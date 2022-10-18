import delta from '../assets/DELTA GROUP LOGO.png'
import gchu from '../assets/LOGO GUALEGUAYCHU.png'

const Footer = () => {
    return (
        <div className='container-footer'>
            <div className='container-info-footer'>
                <h4>Contacto</h4>
                <a href='https://walink.co/04b693'>Telefono: 3446-614304</a>
                <a href='https://www.instagram.com/gualeguaychufestival/?hl=es-la'>Instagram: @gualeguaychufestival</a>
            </div>
            <div className='container-img-footer'>
                <div>
                    <a href='https://www.instagram.com/deltagroup.gualeguaychu/?hl=es-la'><img src={delta} /></a>
                </div>
                <div>
                    <a href='https://www.instagram.com/munigchu/?hl=es-la'><img src={gchu} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer