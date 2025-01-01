import { useContext } from "react"
import { Context } from "../../../context/Context"
import "./GameWindow.css"

const GameWindow = () => {
    const { x, y, windowWidth, windowHeight, ballDiameter } = useContext(Context)
  
    const gameWindow = {
        width: `${windowWidth}rem`,
        height: `${windowHeight}rem`
    }

    const gameBall = {
        width: `${ballDiameter}rem`,
        height: `${ballDiameter}rem`,
        left: `${x}rem`, 
        bottom: `${y}rem`
    }

    return (
        <div className="Game__window" style={gameWindow}>
            <div className="Game__ball" style={gameBall}></div>
        </div>
    )
}
export default GameWindow