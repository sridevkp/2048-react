import { useRef } from 'react'
import './Grid.css'
import Tile from './Tile'

const Grid = ( {tiles} ) => {
    const grid = useRef()

    return <div className="Grid-container">
                <div className="Grid-bg grid" ref={grid}>
                    {
                        [...Array(4*4).keys()].map( key => <div key={key} className='Grid-bg-cell'></div> )
                    }
                </div>
                <div className="Grid grid">
                    {
                        tiles.map( tile => {
                            return <Tile val={tile.val} x={tile.x} y={tile.y} key={tile.key} merged={tile.merged}/>
                        })
                    }
                </div>
            </div>
}

export default Grid