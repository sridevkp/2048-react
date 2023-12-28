// import useTimeout from '../hooks/useTimeout'
import './Tile.css'

const Tile = ({ val, x, y, merged }) => {
    const style = () => {
        const [i,j] = [x,y]// [x-1,y-1]
        return {
            top : `calc(${j}00% + ${j*.25}em)`,
            left : `calc(${i}00% + ${i*.25}em)`
        }
    }
    return <div className={`Tile tile-${val} ${merged?'merged':''}`} style={style()}>{val}</div>
}

export default Tile