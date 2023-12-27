import React from 'react'
import './Game.css'
import Grid from './Grid'
import Board from '../models/Board'

class Game extends React.Component{
    state = {
        board : new Board()
    }

    constructor( props ){
        super( props )
        this.state.board.updateTiles( true )
        this.state.board.updateTiles( true )
    }
    handleKeyDown(e){
        e.preventDefault()
        e.stopImmediatePropagation()
        switch(e.code){
            case 'KeyA' :
            case 'ArrowLeft': 
                this.setState({board:this.state.board.moveLeft()})
                break;
            case 'KeyD' :
            case 'ArrowRight': 
            this.setState({board:this.state.board.moveRight()})
                break;
            case 'KeyW':
            case 'ArrowUp': 
            this.setState({board:this.state.board.moveUp()})
                break;
            case 'KeyS':
            case 'ArrowDown': 
            this.setState({board:this.state.board.moveDown()})
                break;
            default: break;
        }
    }
    componentDidUpdate(){
        console.log("updated")
    }
    componentDidMount(){
        window.addEventListener('keydown', this.handleKeyDown.bind(this) )
    }
    render(){
        return <div className='Game'>
                    <Grid tiles={this.state.board.tiles}/>
                </div>
    }
}

export default Game