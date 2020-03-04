import React from "react"
import "./style.css";

export default function Card(props){
    return (
    <div className="flashcard">
        <div className="card-title">{props.DeckName}</div>
        <div className="side-a text">
            Side A: {props.SideA}
        </div>
        <div className="side-b text">
            Side B: {props.SideB}
        </div>
        <div className="button-container">
            <button>←</button>
            <button>⟳</button>
            <button>→</button>
        </div>
    </div>
    );
}

