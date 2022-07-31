import React, { useState } from "react"

// El usestate nos regresa un valor, y una funcion

// Destructuracion de arreglos
// Cuando destructuramos arreglos, importa la posicion no el nombre que le demos

// Posicion 0: El valor es tu estado con el valor.
// Posicion 1: La funcion que modifica este mismo valor
// Setear de cambiar
// Que si no pasan un valor inciial a su estado, este al principio va a ser undefined
// Los eventos onClick, onChange, onKeyUp -> event

const Input = ({ handleInputChange }) => {
  // Estado local

  
  return (
    <>
      <input onChange={handleInputChange} type="text" />
    </>
  )
}

export default Input