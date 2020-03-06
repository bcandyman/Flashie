import React from "react"


export default function Form({className , name, children}) {
    return (
        <form className={className} name={name}>
        {children}
        </form>
    );
}

