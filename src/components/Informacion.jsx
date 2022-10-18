import Accordion from "./Accordion"

const Informacion = () => {
    return (
        <div className='container-faq' id="informacion">
            <h2>Informacion importante</h2>
            <Accordion title="¿A que hora comienza el evento?" content="El evento comienza 21hs" />
            <Accordion title="¿Es apto para todo publico?" content="Si, el evento es apto para todo publico" />
            <Accordion title="¿Habra otros espectaculos ademas de L-Gante?" content="Si, el line up contara con otras bandas, djs y artistas que confirmaremos con el correr del tiempo" />
            <Accordion title="¿A partir de que edad se abona entrada?" content="Menores de 6 años no abonan entrada" />
            <Accordion title="¿El valor de las entradas es fijo?" content="No, el valor de las entradas ira aumentando con el correr del tiempo, te recomendamos comprarla lo antes posible" />
            <Accordion title="¿Que valor tienen los palcos VIP?" content="El valor de los palcos vips varia segun la ubicacion, puedes comunicarte con nosotros en nuestras redes sociales para obtener mas informacion" />
            <Accordion title="¿Tienen puntos de venta fuera de Gualeguaychu?" content="Si, proximamente veran los nuevos puntos de venta en nuestras redes o en la seccion de puntos de ventas" />
        </div>
    )
}

export default Informacion