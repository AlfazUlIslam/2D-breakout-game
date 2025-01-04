import { useContext } from "react"
import { Context } from "../../../context/Context"
import "./GameWindow.css"

const GameWindow = (props) => {
    const { children } = props
    const { windowWidth, windowHeight } = useContext(Context)
  
    const gameWindow = {
        width: `${windowWidth}rem`,
        height: `${windowHeight}rem`
    }

    return (
        <div className="Game__window" style={gameWindow}>
            {children}
        </div>
    )
}
export default GameWindow