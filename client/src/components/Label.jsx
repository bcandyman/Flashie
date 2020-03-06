import React from "react"

export default function Form({ children , name , inputName }) {
    return (
        <label name={name} for={inputName}>
            {children}
        </label>
    );
}