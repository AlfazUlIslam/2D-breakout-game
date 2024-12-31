import { useContext } from "react"
import { Context } from "../../../context/Context"
import "./GameWindow.css"

const GameWindow = () => {
    const { count } = useContext(Context)

    const gameBall = {
        left: `${count}px`,
        bottom: `${count}px`
    }

    return (
        <div className="Game__window">
            GameWindow
            <div className="Game__ball" style={gameBall}>GameBall</div>
        </div>
    )
}
export default GameWindow