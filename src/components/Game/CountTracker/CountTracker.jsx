import { useContext, useEffect, useState } from "react"
import { Context } from "../../../context/Context"

const CountTracker = () => {
  const { x, setX, y, setY, windowWidth, windowHeight, ballDiameter, isForwardsX, setIsForwardsX, isForwardsY, setIsForwardsY } = useContext(Context)

  const xForwardsLimit = windowWidth - ballDiameter
  const xBackwardsLimit = 0
  const yForwardsLimit = windowHeight - ballDiameter
  const yBackwardsLimit = 0

  useEffect(() => {
    const intID = setInterval(() => {
      if (isForwardsX) {
        if (x < xForwardsLimit) {
          setX(prev => prev + 0.1)
        } else {
          setIsForwardsX(false)
        }
      } else {
        // x
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
      
      // if (x <= xForwardsLimit) {
      //   setX(prev => prev + 0.1)
      // } else {
      //   setX(prev => prev - 0.1)
      // }

      // if (y <= yForwardsLimit) {
      //   setY(prev => prev + 0.1)
      // } else {
      //   setY(prev => prev - 0.1)
      // }

    }, 5)

    return () => clearInterval(intID)
    // isForwardsX, isForwardsY
  }, [x, y])
      
  return (
    <div style={{background: "#663399"}}>
      x:{isForwardsX ? "true" : "false"} <br />
      y:{isForwardsY ? "true" : "false"} <br />
    </div>
  )
}
export default CountTracker