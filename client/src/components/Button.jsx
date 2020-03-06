import React from "react"

export default function Button({ className, children, name, value, handleOnClick }) {
  return (
    <button className={"btn " + className} name={name} value={value} onClick={handleOnClick}>{children} </button>
  );
}

