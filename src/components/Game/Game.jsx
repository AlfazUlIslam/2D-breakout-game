import GameWindow from "./GameWindow/GameWindow"
import Ball from "./Ball/Ball"
import Paddle from "./Paddle/Paddle"
import GameBtn from "./GameBtn/GameBtn"
import "./Game.css"

const Game = () => {
    return (
        <div className="Game">
            <GameWindow>
                <Ball />
                <Paddle />
            </GameWindow>
            <GameBtn />
        </div>
    )
}
export default Game