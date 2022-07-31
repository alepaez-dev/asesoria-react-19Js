import React from "react"

const Text = ({ nombre, label }) => {

  return (
    <span>{label}: {nombre} </span>
  )
}

export default Text