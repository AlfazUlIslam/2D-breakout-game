import { useContext, useEffect } from "react"
import { Context } from "../../../context/Context"

const CounterTracker = () => {
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
        <div>CounterTracker{count}</div>
    )
}
export default CounterTracker