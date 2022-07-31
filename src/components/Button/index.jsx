import React from "react"
import './index.css';

// Un componente es una funcipn
// props es un objeto
// Un componente recibe como parametro las propiedades -> objeto

// Destructarion
const Button = ({ text, className, agregarAlCarrito }) => {

  // border-black + lo que sea qiue le mande
  return (
    <button onClick={agregarAlCarrito} className={`primary-button ${className}`} >{text}</button>
  )
}

export default Button
