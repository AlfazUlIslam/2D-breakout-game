import { useContext, useEffect } from "react"
import { Context } from "../../../context/Context"

const CountTracker = () => {
    const { count, setCount } = useContext(Context)

    useEffect(() => {
        const intervalKey = setInterval(() => {
          setCount(prevCount => prevCount + 1)
        }, 2)
    
        return () => {
          clearInterval(intervalKey)
        }
      }, [])
        
    return (
      <></>
    )
}
export default CountTracker