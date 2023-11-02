import React from "react";
import { Link } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetailStyles.css";

export const ItemDetail = ({ productSelected, onAdd, initial, showCounter }) => {
  return (
    <section>
      <img src={productSelected.img} alt={productSelected.title} />

      <div className="common-details">
        <h1>{productSelected.title}</h1>
        <p>Marca: {productSelected.brand}</p>
        <p>Precio: ${productSelected.price}</p>
        <p>Detalles: {productSelected.details}</p>
        <div className="mrBotones">
        <button className="btnAdd" onClick={() => onAdd(1)}>
          Agregar al Carrito
        </button>
        </div>

      {initial && <h4>Ya tienes {initial} unidades</h4>}
       

      {showCounter ?  <div>
          <CounterContainer
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </div> :  <Link to="/cart">Terminar compra</Link>}

     

     
      {/* Agrega más categorías y detalles según sea necesario */}
      </div>
    </section>
  );
};


