import { useContext } from "react"
import { Context } from "../../../context/Context"
import Ball from "../Ball/Ball"
import Paddle from "../Paddle/Paddle"
import "./GameWindow.css"

const GameWindow = () => {
    const { windowWidth, windowHeight, paddleX, x, y } = useContext(Context)
    let { refX, refY } = useContext(Context)
  
    const gameWindow = {
        width: `${windowWidth}rem`,
        height: `${windowHeight}rem`
    }

    return (
        <div className="Game__window" style={gameWindow}>
            {`x: ${x}`} <br />
            {`y: ${y}`} <br />
            {`refX: ${refX}`} <br />
            {`refY: ${refY}`} <br />
            <Ball />
            <Paddle />
        </div>
    )
}
export default GameWindow