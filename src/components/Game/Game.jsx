import { useContext } from "react"

import GameWindow from "./GameWindow/GameWindow"
import GameBtn from "./GameBtn/GameBtn"
import CountTracker from "./CountTracker/CountTracker"
import { Context } from "../../context/Context"
import "./Game.css"

const Game = () => {
    const { start } = useContext(Context)

    return (
        <div className="Game">
            <GameWindow />
            <GameBtn />
            {/* Conditionally mount/unmount CountTracker */}
            {start && <CountTracker />}
        </div>
    )
}
export default Game