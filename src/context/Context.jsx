import { createContext, useState } from "react"

export const Context = createContext({
    count: 0,
    setCount: () => {},
    start: false,
    setStart: () => {}
})

export const Provider = (props) => {
    const { children } = props
    const [count, setCount] = useState(0)
    const [start, setStart] = useState(false)

    return (
        <Context.Provider value={{count, setCount, start, setStart}}>
            {children}
        </Context.Provider>
    )
}