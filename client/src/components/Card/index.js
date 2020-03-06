import React from "react"
import "./style.css";

export default function Card(props){

    // const nextCard = (i) => {
    //     cardArray[i--]
    // }

    // const prevCard = (i) => {
    //     cardArray[i++]
    // }

    // const cardFlip = () => {

    // }

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
            <button className="btn-prev">←</button>
            <button className="btn-flip">⟳</button>
            <button className="btn-next">→</button>
        </div>
    </div>
    );
}

