import { NavbarWrapper } from "../styles/NavBarStyles";
import { Link } from 'react-scroll'

function Navbar({ open, handleClick }) {
    return (
        <NavbarWrapper className="container-nav" open={open}>
            <Link to="line" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>
                Line Up
            </Link>
            <Link to="plano" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>
                Plano
            </Link>
            <Link to="entradas" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>
                Entradas
            </Link>
            <Link to="puntos" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>
                Puntos de Venta
            </Link>
            <Link to="vips" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>
                Palcos Vips
            </Link>
            <Link to="informacion" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>
                Informacion
            </Link>
        </NavbarWrapper>
    );
}

export default Navbar;