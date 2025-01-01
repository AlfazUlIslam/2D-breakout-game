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
            <div className="Game__ball" style={gameBall}></div>
        </div>
    )
}
export default GameWindow