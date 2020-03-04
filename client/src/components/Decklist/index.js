import React from "react"
import API from "../"
import "./style.css";

export default function Decklist(props){

    return (
    <div className="decklist">
        <div className="deck">
            Deck Name: {props.DeckName}
        </div>
    </div>
    );
}

