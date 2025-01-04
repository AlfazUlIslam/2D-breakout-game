import { useContext, useEffect } from "react"
import { Context } from "../../../context/Context"
import "./GameBtn.css"

const GameBtn = () => {
    const { start, setStart, x, setX, y, setY, windowWidth, windowHeight, ballDiameter, isForwardsX, setIsForwardsX, isForwardsY, setIsForwardsY } = useContext(Context)

    const xForwardsLimit = windowWidth - ballDiameter
    const xBackwardsLimit = 0
    const yForwardsLimit = windowHeight - ballDiameter
    const yBackwardsLimit = 0

    useEffect(() => {
        let interval;
    
        if (start) {
          interval = setInterval(() => {
            if (isForwardsX) {
                if (x < xForwardsLimit) {
                  setX(prev => prev + 0.1)
                } else {
                  setIsForwardsX(false)
                }
              } else {
                if (x > xBackwardsLimit) {
                  setX(prev => prev - 0.1)
                } else {
                  setIsForwardsX(true)
                }
              }
              
              if (isForwardsY) {
                if (y < yForwardsLimit) {
                  setY(prev => prev + 0.1)
                } else {
                  setIsForwardsY(false)
                }
              } else {
                if (y > yBackwardsLimit) {
                  setY(prev => prev - 0.1)
                } else {
                  setIsForwardsY(true)
                }
              }
          }, 5);
        } else {
          clearInterval(interval);
        }
    
        return () => {
          if (interval) clearInterval(interval);
        };
    }, [start, x, y, isForwardsX, isForwardsY]);

    const handleClick = () => {
        setStart(prev => !prev)
    }

    return (
        <button className="Game__btn" onClick={handleClick}>
            {start ? "PAUSE" : "START"}
        </button>
    )
}
export default GameBtn