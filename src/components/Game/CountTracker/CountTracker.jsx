import { useContext, useEffect, useState } from "react"
import { Context } from "../../../context/Context"

const CountTracker = () => {
  const { x, setX, y, setY, windowWidth, windowHeight, ballDiameter } = useContext(Context)
  const [isForwardsX, setIsForwardsX] = useState(true)
  const [isForwardsY, setIsForwardsY] = useState(true)

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
    }, 5)

    return () => clearInterval(intID)
  }, [x, y, isForwardsX, isForwardsY])
      
  return (
    <></>
  )
}
export default CountTracker