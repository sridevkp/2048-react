import { useState } from "react";
import TileModel from "../models/TileModel";

export default function useBoard( list=[] ){
    const [tiles,setTile] = useState( list )
    const [board,setBoard] = useState( getBoard( list ) )

    let key = list.length

    const resetBoard = () => {
        setTile([])
    }
    const addNewTile = ({ val, x, y }) => {
        key += 1
        const tile = new TileModel( val, x, y, key )
        setTile( prev => [...prev,tile])
    }
    function getBoard(list) {
        const board = Array(4).fill().map(() => Array(4).fill(null) ) 
        list.forEach( tile => {
            board[tile.y][tile.x] = tile
        })
        console.table(board)
        return board
    }
    const move = () => {

    }
    return [tiles,addNewTile,setTile,resetBoard,move]
}