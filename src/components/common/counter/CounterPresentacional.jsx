import React from "react";
import "./CounterStyles.css";

const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <div>
        <div className="mrBotones">
        <button className="btnSum" variant="contained" onClick={sumar}>
          +
        </button>
        <h4> {contador} </h4>
        <button className="btnRes" variant="contained" onClick={restar}>
          -
        </button>
        </div>
    </div>
  );
};

export default CounterPresentacional;
