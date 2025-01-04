import { useContext } from "react"
import { Context } from "../../../context/Context"
import Ball from "../Ball/Ball"
import Paddle from "../Paddle/Paddle"
import "./GameWindow.css"

const GameWindow = () => {
    const { windowWidth, windowHeight } = useContext(Context)
  
    const gameWindow = {
        width: `${windowWidth}rem`,
        height: `${windowHeight}rem`
    }

    return (
        <div className="Game__window" style={gameWindow}>
            <Ball />
            <Paddle />
        </div>
    )
}
export default GameWindow