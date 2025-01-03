import { useContext } from "react"
import { Context } from "../../../context/Context"
import Ball from "../Ball/Ball"
import Paddle from "../Paddle/Paddle"
import "./GameWindow.css"

const GameWindow = () => {
    const { windowWidth, windowHeight, paddleX } = useContext(Context)
  
    const gameWindow = {
        width: `${windowWidth}rem`,
        height: `${windowHeight}rem`
    }

    return (
        <div className="Game__window" style={gameWindow}>
            {`windowWidth: ${windowWidth}`} <br />
            {`paddleX: ${paddleX}`}
            <Ball />
            <Paddle />
        </div>
    )
}
export default GameWindow