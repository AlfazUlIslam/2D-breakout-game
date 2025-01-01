import { createContext, useState } from "react"

export const Context = createContext({
    start: false,
    setStart: () => {},
    x: 0,
    setX: () => {},
    y: 0,
    setY: () => {},
})

export const Provider = (props) => {
    const { children } = props
    const [start, setStart] = useState(false)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const value = {
        start, 
        setStart, 
        x, 
        setX, 
        y, 
        setY,
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}