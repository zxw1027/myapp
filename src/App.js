import './App.css';
import Board from "./components/Board";
import {observe} from "./components/Game";
import React,{useState} from "react";

function App() {
    const [position, setPosition] = useState([1, 7]);
    const [position2, setPosition2] = useState([1, 7]);
    observe({['Knight']:setPosition});
    observe({['Knight2']:setPosition2});
    return <Board knightPosition={position} knightPosition2={position2}/>;
}

export default App;
