import { createContext, useState } from "react"

export const Context = createContext({
    start: false,
    setStart: () => {},
    x: 0,
    setX: () => {},
    y: 0,
    setY: () => {},
    windowWidth: 0,
    setWindowWidth: () => {},
    windowHeight: 0,
    setWindowHeight: () => {},
    ballDiameter: 0,
    setBallDiameter: () => {}
})

export const Provider = (props) => {
    const { children } = props
    const [start, setStart] = useState(false)
    const [windowWidth, setWindowWidth] = useState(50)
    const [windowHeight, setWindowHeight] = useState(35)
    const [ballDiameter, setBallDiameter] = useState(1)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const value = {
        start, 
        setStart, 
        x, 
        setX, 
        y, 
        setY,
        windowWidth, 
        windowHeight,
        ballDiameter,
        setWindowWidth,
        setWindowHeight,
        setBallDiameter
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}