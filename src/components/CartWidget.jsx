// src/components/CartWidget.jsx
import React from "react";

const CartWidget = () => {
  return (
    <div>
      <i className="bi bi-cart"></i> {/* Icono de carrito, asegúrate de tener Bootstrap Icons o FontAwesome */}
      <span>0</span> {/* Número de productos en el carrito */}
    </div>
  );
};

export default CartWidget;
