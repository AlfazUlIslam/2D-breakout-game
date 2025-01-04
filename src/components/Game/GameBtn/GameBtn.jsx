import { useContext } from "react"
import { Context } from "../../../context/Context"
import "./GameBtn.css"

const GameBtn = () => {
    const { start, setStart } = useContext(Context)

    const handleClick = (e) => {
        e.preventDefault()
        setStart(prev => !prev)
    }

    return (
        <button className="Game__btn" onClick={handleClick}>
            {start ? "PAUSE" : "START"}
        </button>
    )
}
export default GameBtn