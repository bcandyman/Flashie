import React from "react"

export default function Form({ name , id }) {
    return (
        <input type="text" name={name} id={id}/>
    );
}