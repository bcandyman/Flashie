import React from "react"

export default function Form({className}) {
    return (
        <form className={className}>
        <label>
            Name:
            <input type="text" name="deckname" />
        </label>
        </form>
    );
}

