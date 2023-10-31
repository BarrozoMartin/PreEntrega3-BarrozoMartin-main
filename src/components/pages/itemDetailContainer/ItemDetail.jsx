import React from "react";
import { Link } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetailStyles.css";

export const ItemDetail = ({ productSelected, onAdd, initial, showCounter }) => {
  returnn (
    <section>
      <img src={productSelected.img} alt={productSelected.title} />

      <div className="common-details">
        <h1>{productSelected.title}</h1>
        <p>Precio: ${productSelected.price}</p>
        <p>Detalles: {productSelected.details}</p>
        <button className="btnComprar" onClick={() => onAdd(1)}>
          Comprar
        </button>
      </div>

      {productSelected.category === "indumentaria" && (
        <div className="indumentaria">
          <h1>{productSelected.description}</h1>
          <p>Talle: {productSelected.size}</p>
          <p>Color: {productSelected.color}</p>
        </div>
      )}

      {productSelected.category === "electronica" && (
        <div className="electronica">
          <h1>{productSelected.title}</h1>
          <p>Marca: {productSelected.brand}</p>
          <p>Precio: ${productSelected.price}</p>
          <p>Detalles: {productSelected.details}</p>
          <button className="btnComprar" onClick={() => onAdd(1)}>
            Comprar
          </button>
        </div>
      )}

      {productSelected.category === "farmacia" && (
        <div className="farmacia">
          <h1>{productSelected.title}</h1>
          <p>Marca: {productSelected.brand}</p>
          <p>Precio: ${productSelected.price}</p>
          <p>Detalles: {productSelected.details}</p>
          <button className="btnComprar" onClick={() => onAdd(1)}>
            Comprar
          </button>
        </div>
      )}

      {productSelected.category === "ferreteria" && (
        <div className="ferreteria">
          <h1>{productSelected.title}</h1>
          <p>Marca: {productSelected.brand}</p>
          <p>Precio: ${productSelected.price}</p>
          <p>Detalles: {productSelected.details}</p>
          <button className="btnComprar" onClick={() => onAdd(1)}>
            Comprar
          </button>
        </div>
      )}

      {initial && <h4>Ya tienes {initial} unidades</h4>}
       

      {showCounter ?  <div style={{ display: "flex", justifyContent: "center" }}>
          <CounterContainer
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </div> :  <Link to="/cart">Terminar compra</Link>}

     

     
      {/* Agrega más categorías y detalles según sea necesario */}
    </section>
  );
};


