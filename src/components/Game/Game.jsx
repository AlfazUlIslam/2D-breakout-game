import GameWindow from "./GameWindow/GameWindow"
import GameBtn from "./GameBtn/GameBtn"
import CounterTracker from "./CounterTracker/CounterTracker"
import "./Game.css"

const Game = () => {
  return (
    <div className="Game">
        <GameWindow />
        <GameBtn />
        <CounterTracker />
    </div>
  )
}
export default Game