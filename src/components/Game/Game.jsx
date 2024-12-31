import { useContext } from "react"

import GameWindow from "./GameWindow/GameWindow"
import GameBtn from "./GameBtn/GameBtn"
import CounterTracker from "./CounterTracker/CounterTracker"
import { Context } from "../../context/Context"
import "./Game.css"

const Game = () => {
    const { start } = useContext(Context)

    return (
        <div className="Game">
            <GameWindow />
            <GameBtn />
            {/* Conditionally mount/unmount CountTracker */}
            {start && <CounterTracker />}
        </div>
    )
}
export default Game