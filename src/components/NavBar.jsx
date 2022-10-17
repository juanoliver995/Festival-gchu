import { NavbarWrapper } from "../styles/NavBarStyles";


function Navbar({ open, handleClick }) {
    return (
        <NavbarWrapper className="container-nav" open={open}>
            <a to="description" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>
                Description
            </a>
            <a to="demos" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>
                Demos
            </a>
            <a to="packs" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>
                Services
            </a>
        </NavbarWrapper>
    );
}

export default Navbar;