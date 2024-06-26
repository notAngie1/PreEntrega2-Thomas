// import Productos from "./Productos"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Productos.css"
import useHeaderEffects from "../hooks/useHeaderEffects";


const Shop = () => {
    const url = "../src/productosjson.json"
    const [producto, setProducto] = useState(null)
    const [cargandoData, setCargandoData] = useState(true)
    const { cursorX, cursorY, handleMouseMove } = useHeaderEffects();

    useEffect(() => {

        fetch(url)
            .then(response => response.json())
            .then(info => {
                setProducto(info)
                setCargandoData(false)
            })
            .catch((error) => <Link to="/*"></Link>)

    }, [])


    return (
        <div>
            <header className="header" onMouseMove={handleMouseMove}>
                <div className="header-background" />
                <div className="header-content header-container">
                    <h1>Tienda Oficial de TekyaRP</h1>
                    <p>Bienvenidos a la tienda oficial de TekyaRP
                        <br />
                        antes de realizar alguna compra es necesario y
                        obligatorio que hallas leído los terminos y condiciones que se encuentran en el discord de TekyaRP
                        <br />
                        si todavia no entraste te pedimos que entres y leas los terminos y condiciones para evitar problemas
                        en un futuro. </p>
                    <a href="https://discord.gg/Txpz554FTk" target='blank' className="headerA">Discord</a>
                </div>
                <div className="container">
                    <div id="circulo"><img src="../public/bloborganic.gif" alt="" /></div>
                    <div id="circulo2"><img src="../public/bloborganic.gif" alt="" /></div>
                    <div id="circulo3"><img src="../public/bloborganic.gif" alt="" /></div>
                    <div id="circulo4"><img src="../public/bloborganic.gif" alt="" /></div>
                </div>

                <div className="cursor"
                    style={{
                        top: `${cursorY - 100}px`,
                        left: `${cursorX + 5}px`,
                    }}><img src="../public/bloborganic.gif" alt="" /></div>
            </header>

            <div>
                {
                    cargandoData ?
                        <div>
                            <img src="../public/cargando.gif" alt="gif cargando" className="error" />
                            Cargando productos...
                        </div>
                        :
                        <div>
                            {
                                producto !== null && producto?.length > 0 ?
                                    <div>
                                        <div className="containerShop">
                                            <div className="titulo">
                                                <h1>Vips</h1>
                                                <p>En el discord podras encontrar los beneficios.</p>
                                                <br />
                                                <p>Los reclamas via ticket de donaciones en el discord.</p>
                                            </div>
                                            <div className="divProductos">
                                                {producto
                                                    .filter((element) => element.categoria === "Vips")
                                                    .map((element) => (
                                                        <Link to={`/producto/${element.id}${element.nombre}`} key={element.id}>
                                                            <div className="container-items">
                                                                <div className="item">
                                                                    <div><img src={element.imagen} alt={element.nombre} /></div>
                                                                    <div className="info-producto">{element.nombre} ${element.precio}
                                                                        <button className="botonComprar" data-id="1">Ver detalles</button></div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                            </div>
                                        </div>

                                        <div className="containerShop">
                                            <div className="titulo">
                                                <h1>Autos</h1>
                                                <p>Los reclamas via ticket de donaciones en el discord.</p>
                                            </div>
                                            <div className="divProductos">
                                                {producto
                                                    .filter((element) => element.categoria === "Autos")
                                                    .map((element) => (
                                                        <Link
                                                            to={`/producto/${element.id}${element.nombre}`}
                                                            key={element.id}
                                                        >
                                                            <div className="container-items">
                                                                <div className="item">
                                                                    <div><img src={element.imagen} alt={element.nombre} /></div>
                                                                    <div className="info-producto"> {element.nombre} ${element.precio}
                                                                        <button className="botonComprar" data-id="1"> Ver detalles </button></div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                            </div>
                                        </div>

                                        <div className="containerShop">
                                            <div className="titulo">
                                                <h1>Casa</h1>
                                                <p>Los reclamas via ticket de donaciones en el discord.</p>
                                            </div>
                                            <div className="divProductos">
                                                {producto
                                                    .filter((element) => element.categoria === "Casa")
                                                    .map((element) => (
                                                        <Link
                                                            to={`/producto/${element.id}${element.nombre}`}
                                                            key={element.id}
                                                        >
                                                            <div className="container-items">
                                                                <div className="item">
                                                                    <div><img src={element.imagen} alt={element.nombre} /></div>
                                                                    <div className="info-producto"> {element.nombre} ${element.precio}
                                                                        <button className="botonComprar" data-id="1"> Ver detalles </button></div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                            </div>
                                        </div>

                                        <div className="containerShop">
                                            <div className="titulo">
                                                <h1>Otros</h1>
                                                <p>Los reclamas via ticket de donaciones en el discord.</p>
                                            </div>
                                            <div className="divProductos">
                                                {producto
                                                    .filter((element) => element.categoria === "Otros")
                                                    .map((element) => (
                                                        <Link to={`/producto/${element.id}${element.nombre}`} key={element.id} >
                                                            <div className="container-items">
                                                                <div className="item">
                                                                    <div><img src={element.imagen} alt={element.nombre} /></div>
                                                                    <div className="info-producto"> {element.nombre} ${element.precio}
                                                                        <button className="botonComprar" data-id="1"> Ver detalles </button></div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                            </div>
                                        </div>

                                    </div>

                                    :
                                    <div>
                                        <h2>
                                            No hay datos
                                        </h2>
                                    </div>
                            }
                        </div>
                }
            </div>

        </div>

    )
}

export default Shop 