import { useContext, useEffect, useState } from "react"
import { Context } from "../../../context/Context"

const CountTracker = () => {
  const { setX, setY } = useContext(Context)

  useEffect(() => {
    const intervalKey = setInterval(() => {
      setX(prev => prev + 0.1)
      setY(prev => prev + 0.1)
    }, 5)

    return () => {
      clearInterval(intervalKey)
    }
  }, [])
      
  return (
    <></>
  )
}
export default CountTracker