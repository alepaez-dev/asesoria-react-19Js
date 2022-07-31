import React, { useEffect, useState } from "react"
import './App.css';
import Button from "./components/Button"
import Input from "./components/Input"
import Text from "./components/Text"
import Koder from "./components/Koder"
import { Outlet, useNavigate } from "react-router-dom";

// Esto es un componente

// App es el papa
// Button es su hijo
// UseEffect -> escucha
function App() {
  // 1 parametro -> callback
  // 2 paramtro -> lo que va o van a escuchar
  // cuando lo que va a escuchar es un arreglo vacio -> no va a escuchar nada pero se va a hacer cada que el componente se renderice

  // Hooks
  const navigate = useNavigate();

  // Constantes
  // Local state
  const [nombre, setNombre] = useState("")  
  const [apellido, setApellido] = useState("")
  const [koders, setKoders] = useState([{
    nombre: "Alejandra",
    apellido: "Paez"
  }])

  // useEffect(() => {
  //   // console.log("codigo de nombreeeee")
  //   console.log("variableQueVoyACambiar en el useEffect", variableQueVoyACambiar)
  // }, [variableQueVoyACambiar])

  // Handler
  const handleNombreInputChange = (event) => {
    setNombre(event.target.value)

    // setTimeout(() => {
    //   console.log("cada 2 segundos")
    //   const newVariable = variableQueVoyACambiar + 12
    //   setVariableQueVoyACambiar(newVariable)
    //   console.log("variableQueVoyACambiar despues", )
    // }, 10000)
  
  }

  useEffect(() => {
    // peticion al firebase
    // setean lo que traiga firebase
  })

  const handleInputChange2 = (event) => {
    setApellido(event.target.value)
  }

  const handlerAgregarAlCarrito = () => {
    console.log("estoy haciendo click")
    const newKoders = [...koders]
    newKoders.push({
      nombre,
      apellido
    })
    console.log("newKoders", newKoders)
    setKoders(newKoders)
  }

  return (
    <div>
      <Button 
        text="Aplica hoy"
        className="border-white"
      />
      <Button 
        text="Agregar al carrito"
        className="border-blue"
        onClick={handlerAgregarAlCarrito}
      />
      <Button 
        text="Koders"
        className="border-blue"
        onClick={() => navigate("/koders")}
      />
      <Button 
        text="Mentores"
        className="border-blue"
        onClick={() => navigate("/mentors")}
      />
      <Text nombre={nombre} label="Nombre"/>
      <Input handleInputChange={handleNombreInputChange}/>
      <Text nombre={apellido} label="Apellido"/>
      <Input handleInputChange={handleInputChange2}/>

      {koders.map(koder => {
        return (
          <Koder 
            nombre={koder.nombre}
            apellido={koder.apellido}
          />
        )
      })}
      <div>
        {/* si tienen rutas hijas */}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
