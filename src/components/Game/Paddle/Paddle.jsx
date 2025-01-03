import { useContext, useEffect } from "react"
import { Context } from "../../../context/Context"
import "./Paddle.css"

const Paddle = () => {
    const { windowWidth, start, paddleDimensions, paddleX, setPaddleX } = useContext(Context)

    const gamePaddle = {
        width: `${paddleDimensions.w}rem`,
        height: `${paddleDimensions.h}rem`,
        left: `${paddleX}rem`,
        bottom: 0
    }

    const handleKeypress = (e) => {
        if (e.key === "Right" || e.key === "ArrowRight") {
            setPaddleX(prev => {
                if (prev < (windowWidth - paddleDimensions.w)) {
                   return prev + 1
                } else {
                    return prev
                }
            })
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
            setPaddleX(prev => {
                if (prev > 0) {
                   return prev - 1
                } else {
                    return prev
                }
            })
        }
    }

    useEffect(() => {
        if (start) {
            // window.addEventListener("keydown", keyDownHandler)
            // window.addEventListener("keyup", keyUpHandler)
            window.addEventListener("keydown", handleKeypress)
        }

        return () => {
            if (start) {
                // window.removeEventListener("keydown", keyDownHandler)
                // window.removeEventListener("keyup", keyUpHandler)
                window.removeEventListener("keydown", handleKeypress)
            }
        }
    }, [start])
        
    return (
        // Game paddle
        <div className="Game__paddle" style={gamePaddle}>
            {/* {start ? "Running" : "Paused"}
            {leftPressed ? "Left Pressed" : ""}
            {rightPressed ? "Right Pressed" : ""} */}
            {/* {paddleX}
            {windowWidth - paddleDimensions.w} */}
            {paddleX}
        </div>
    )
}
export default Paddle