import heredero from "../assets/logos/heredero.png"
import sernova from "../assets/logos/cernova.png"
import branca from "../assets/logos/branca.png"

const Vips = () => {
    return (
        <div className="main-palcos">
            <h1>Informacion sobre <span>palcos vips</span></h1>
            <div className="info-palcos">
                <p>- Palcos Vips disponibles para 4 a 6 personas</p>
                <p>- Cada palco incluye entradas para 4 personas y ubicacion sentada</p>
                <p>- Opcional: podes agregar hasta 2 personas sin silla</p>
                <p>- Primera Tanda Limitada</p>
            </div>
            <div className="container-palcos-vips">
                <div className="palco-vip">
                    <h3>Palco Heredero</h3>
                    <p className="precio">Precio: <span>$18.000</span></p>
                    <p className="persona-extra">Persona extra <span>$3.000</span></p>
                    <img src={heredero} />
                    <div className="comprar">
                        <p>Comprar</p>
                        <div className="info-compra">
                            <a href="https://walink.co/a98627">CECILIA</a>
                            <a href="https://walink.co/6f7706">IGNACIO</a>
                        </div>
                    </div>
                </div>
                <div className="palco-vip">
                    <h3>Palco Sernova</h3>
                    <p className="precio">Precio: <span>$25.000</span></p>
                    <p className="persona-extra">Persona extra <span>$3.000</span></p>
                    <img src={sernova} />
                    <div className="comprar">
                        <p>Comprar</p>
                        <div className="info-compra">
                            <a href="https://walink.co/151d44">CECILIA</a>
                            <a href="https://walink.co/7b32a8">IGNACIO</a>
                        </div>
                    </div>
                </div>
                <div className="palco-vip">
                    <h3>Palco Branca</h3>
                    <p className="precio">Precio: <span>$30.000</span></p>
                    <p className="persona-extra">Persona extra <span>$3.000</span></p>
                    <img src={branca} />
                    <div className="comprar">
                        <p>Comprar</p>
                        <div className="info-compra">
                            <a href="https://walink.co/51e193">CECILIA</a>
                            <a href="https://walink.co/0d293c">IGNACIO</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="combos-bebidas">
                <h2>Completa tu palco</h2>
                <p>Combo opcional de Bebida por $4000</p>
                <ul>
                    <li>- Fernet Branca + 6 gaseosas</li>
                    <li>- Vodka Sernova + 6 energizantes</li>
                    <li>- Gin Heredeo + 6 aguas tonicas</li>
                </ul>
            </div>
        </div>
    )
}

export default Vips