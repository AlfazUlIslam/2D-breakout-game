import { createContext, useState, useRef } from "react"

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
    setBallDiameter: () => {},
    paddleDimensions: 0,
    setPaddleDimensions: () => {},
    paddleX: 0,
    setPaddleX: () => {},
    isForwardsX: true,
    setIsForwardsX: () => {},
    isForwardsY: true,
    setIsForwardsY: () => {},

    refX: 0,
    refY: 0
})

export const Provider = (props) => {
    const { children } = props
    const [start, setStart] = useState(false)
    const [windowWidth, setWindowWidth] = useState(50)
    const [windowHeight, setWindowHeight] = useState(35)
    const [ballDiameter, setBallDiameter] = useState(1)
    const [paddleDimensions, setPaddleDimensions] = useState({w: 6, h: 1})
    const [paddleX, setPaddleX] = useState((windowWidth - paddleDimensions.w) / 2)
    const [isForwardsX, setIsForwardsX] = useState(true)
  const [isForwardsY, setIsForwardsY] = useState(true)
    
    // const [x, setX] = useState(windowWidth / 2)
    // const [y, setY] = useState(windowHeight - ((windowHeight / 7) * 6))
    const [x, setX] = useState(windowWidth / 2)
    const [y, setY] = useState(windowHeight - ((windowHeight / 7) * 6))

    let refX = useRef(windowWidth / 2).current
    let refY = useRef(windowHeight - ((windowHeight / 7) * 6)).current

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
        setBallDiameter,
        paddleDimensions,
        setPaddleDimensions,
        paddleX,
        setPaddleX,
        isForwardsX,
        setIsForwardsX,
        isForwardsY,
        setIsForwardsY,

        refX,
        refY
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}