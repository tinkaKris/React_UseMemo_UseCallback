import { useState, useEffect, useMemo } from "react"

const OptimizedComponent = () => {
  const [theme, setTheme] = useState("light")
  const [count, setCount] = useState(0)
  const [myTime, setMyTime] = useState(0)

  const handleClick = () => {
    console.log("Change theme")
    setTheme(theme === "light" ? "dark" : "light")
  }

  const computeExpensiveValue = (num: number) => {
    console.log("Calculation...")
    let value = num
    for (let i = 0; i < 1000; i++) {
      value += num
    }
    return value
  }
  const expensiveValue = useMemo(() => computeExpensiveValue(count), [count])

  useEffect(() => {
    console.log("re-render MyTime")

    const timer = setInterval(() => {
      setMyTime(myTime + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [myTime])

  return (
    <div>
      <div className="wrapper" id={theme}>
        <div>
          <button className="container-theme" onClick={handleClick}>
            Change theme
          </button>
        </div>

        <div className="container">
          <div id="sun" className="shape"></div>
          <div id="moon" className="shape"></div>
        </div>

        <div className="container-calculation">
          <p
            className="text-value"
            style={{ color: theme === "light" ? "black" : "white" }}
          >
            Result value: {expensiveValue}
          </p>
          <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>

        <div className="container-time">
          <section className="text-time">My own time! 😎 {myTime}</section>
        </div>
      </div>
    </div>
  )
}

export default OptimizedComponent