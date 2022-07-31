import React from "react"
import './index.css';

// Un componente es una funcipn
// props es un objeto
// Un componente recibe como parametro las propiedades -> objeto

// Destructarion
const Button = ({ text, className, onClick }) => {

  // border-black + lo que sea qiue le mande
  return (
    <button onClick={onClick} className={`primary-button ${className}`} >{text}</button>
  )
}

export default Button
