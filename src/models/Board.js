import TileModel from "./TileModel"

function randFromArray( l ){
    return l[ Math.floor( Math.random() * l.length )]
}

class Board{
    board 
    constructor(){
        this.board = this.createBoard()
        this.filled = false
        this.tiles = []
        this.lastKey = 0
    }
    createBoard(){
        return Array(4).fill().map( i => Array(4).fill(null) )
    }
    updateTiles( addNew = false ){
        const available = []
        for( let i = 0; i< 4; i++){
            for( let j = 0; j< 4; j++){
                const tile = this.board[i][j]
                if( ! tile ){
                    available.push({ i, j })
                    continue
                }
                tile.x = j
                tile.y = i
            }
        }
        if( available.length === 0) return this.filled = true 
        if( addNew ){
            const { i, j } = randFromArray( available )
            this.addTile({
                val : randFromArray([2]),
                x : j,
                y : i
            })
        }
        
    }
    addTile({ val, x, y }){
        this.lastKey += 1
        const tile = new TileModel( val, x, y, this.lastKey )
        this.tiles.push( tile )
        this.board[y][x] = tile
    }
    moveUp(){
        for( let col = 0; col < 4; col++){
            const emptyCell = []
            let lastCell = {}
            for( let k = 0; k < 4; k++){
                const tile = this.board[k][col]
                if( ! tile ){
                    emptyCell.unshift( k )
                    continue
                }

                const upperMost = emptyCell.pop()
                const last = lastCell[tile.val]

                if( last == null){//move
                    lastCell = {}
                    lastCell[tile.val]=k

                    if( upperMost != null ){
                        this.board[ upperMost ][col] = tile
                        this.board[ k ][col] = null
                        lastCell[tile.val] = upperMost
                        emptyCell.unshift( k )
                    } 
                }else{//move n merge
                    lastCell = {}

                    this.tiles.splice( this.tiles.indexOf(tile),1)
                    this.tiles.splice( this.tiles.indexOf(this.board[ last ][col]),1)
                    
                    this.addTile({
                        val : tile.val * 2,
                        x : col,
                        y : last
                    })

                    this.board[ k ][col] = null
                    if(upperMost != null) emptyCell.push(upperMost)
                    emptyCell.unshift( k )
                }
            }
        }
        this.updateTiles( true )
        return this
    }
    moveDown(){
        for( let col = 0; col < 4; col++){
            const emptyCell = []
            let lastCell = {}
            for( let k = 3; k >= 0; k-- ){
                const tile = this.board[k][col]
                if( ! tile ){
                    emptyCell.unshift( k )
                    continue
                }
                const lowerMost = emptyCell.pop()
                const last = lastCell[tile.val]

                if( last == null){//move
                    lastCell = {}
                    lastCell[tile.val]=k

                    if( lowerMost != null ){
                        this.board[ lowerMost ][col] = tile
                        this.board[ k ][col] = null
                        lastCell[tile.val] = lowerMost
                        emptyCell.unshift( k )
                    } 
                }else{//move n merge
                    lastCell = {}

                    this.tiles.splice( this.tiles.indexOf(tile),1)
                    this.tiles.splice( this.tiles.indexOf(this.board[ last ][col]),1)
                    
                    this.addTile({
                        val : tile.val * 2,
                        x : col,
                        y : last
                    })

                    this.board[ k ][col] = null
                    if(lowerMost != null) emptyCell.push(lowerMost)
                    emptyCell.unshift( k )
                }
            }
        }
        this.updateTiles( true )
        return this
    }
    moveLeft(){
        for( let row = 0; row < 4; row++){
            const emptyCell = []
            let lastCell = {}
            for( let k = 0; k < 4; k++){
                const tile = this.board[row][k]
                if( ! tile ){
                    emptyCell.unshift( k )
                    continue
                }
                const leftMost = emptyCell.pop()
                const last = lastCell[tile.val]

                if( last == null){//move
                    lastCell = {}
                    lastCell[tile.val]=k

                    if( leftMost != null ){
                        this.board[ row ][ leftMost ] = tile
                        this.board[ row ][ k ] = null
                        lastCell[tile.val] = leftMost
                        emptyCell.unshift( k )
                    } 
                }else{//move n merge
                    lastCell = {}

                    this.tiles.splice( this.tiles.indexOf(tile),1)
                    this.tiles.splice( this.tiles.indexOf(this.board[ row ][ last ]),1)
                    
                    this.addTile({
                        val : tile.val * 2,
                        x : last,
                        y : row
                    })

                    this.board[ row ][ k ] = null
                    if(leftMost != null) emptyCell.push(leftMost)
                    emptyCell.unshift( k )
                }
            }
        }
        this.updateTiles( true )
        return this
    }
    moveRight(){
        for( let row = 0; row < 4; row++){
            const emptyCell = []
            let lastCell = {}
            for( let k = 3; k >= 0; k--){
                const tile = this.board[row][k]
                if( ! tile ){
                    emptyCell.unshift( k )
                    continue
                }
                const rightMost = emptyCell.pop()
                const last = lastCell[tile.val]

                if( last == null){//move
                    lastCell = {}
                    lastCell[tile.val]=k

                    if( rightMost != null ){
                        this.board[ row ][ rightMost ] = tile
                        this.board[ row ][ k ] = null
                        lastCell[tile.val] = rightMost
                        emptyCell.unshift( k )
                    } 
                }else{//move n merge
                    lastCell = {}

                    this.tiles.splice( this.tiles.indexOf(tile),1)
                    this.tiles.splice( this.tiles.indexOf(this.board[ row ][ last ]),1)
                    
                    this.addTile({
                        val : tile.val * 2,
                        x : last,
                        y : row
                    })

                    this.board[ row ][ k ] = null
                    if(rightMost != null) emptyCell.push(rightMost)
                    emptyCell.unshift( k )
                }

            }
        }
        this.updateTiles( true )
        return this
    }
}

export default Board