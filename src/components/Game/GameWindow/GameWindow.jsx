import { useContext } from "react"
import { Context } from "../../../context/Context"
import "./GameWindow.css"

const GameWindow = () => {
    const { x, y } = useContext(Context)
  
    const gameBall = {
        left: `${x}rem`, 
        bottom: `${y}rem`
    }

    return (
        <div className="Game__window">
            <div className="Game__ball" style={gameBall}></div>
        </div>
    )
}
export default GameWindow