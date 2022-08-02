import Knight from "./Knight";
import Square from "./Square";
import React, {useEffect} from "react";
import {moveKnight,canMoveKnight,observe} from "./Game";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import BoardSquare from "./BoardSquare";
import Knight2 from "./Knight2";



function renderSquare(i, knightPosition,knightPosition2) {
    const x = i % 8
    const y = Math.floor(i / 8)

    // function handleSquareClick(toX, toY) {
    //     if (canMoveKnight(toX, toY)) {
    //         moveKnight(toX, toY)
    //     }
    // }
    function renderPiece(x, y, [knightX, knightY]) {
        if (x === knightX && y === knightY) {
            return <Knight />
        }
    }
    function renderPiece2(x, y, [knightX, knightY]) {
        if (x === knightX && y === knightY) {
            return <Knight2 />
        }
    }
    return (
        <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
            <BoardSquare x={x} y={y}>
                {renderPiece(x, y, knightPosition)}
                {renderPiece2(x, y, knightPosition2)}
            </BoardSquare>
        </div>
    )
}

const Board=({knightPosition,knightPosition2})=>{
    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition,knightPosition2))
    }
  return (
      <DndProvider backend={HTML5Backend}>
          <div
              style={{
                  width: '100%',
                  height: '100vh',
                  display: 'flex',
                  flexWrap: 'wrap'
              }}
          >
              {squares}
          </div>
      </DndProvider>

  );
}
export default Board;
