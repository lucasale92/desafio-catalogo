import React, { useState } from "react";

const ItemCount = ({inicial, max, onAdd}) => {

    const [count, setCount] = useState(inicial)

    const sumar = () =>{
    count < max ? setCount (count + 1) : alert ('No hay más stock')
    }
    const restar = () => {
    count > inicial ? setCount (count - 1) : alert('No se pueden quitar más productos')
    }
    const reset = () => {
    setCount (inicial)
    }
    return (
    <div>
    <h3>{count}</h3>
    <button onClick={sumar} className='botonUno' >+</button>
    <button onClick={restar} className='botonDos'>-</button>
    <button onClick={reset}className='botonTres'>Reset</button>
    <button onClick={() => {onAdd (count); reset() }} className='botonCuatro'>Agregar al carrito</button>
    </div>
);
}
export default ItemCount;
