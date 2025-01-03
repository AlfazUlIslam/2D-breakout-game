import { useContext } from "react"
import { Context } from "../../../context/Context"
import "./Ball.css"

const Ball = () => {
    const { x, y, ballDiameter } = useContext(Context)

    const gameBall = {
        width: `${ballDiameter}rem`,
        height: `${ballDiameter}rem`,
        left: `${x}rem`, 
        bottom: `${y}rem`
    }
        
    return (
        // Game ball
        <div className="Game__ball" style={gameBall}></div>
    )
}
export default Ball