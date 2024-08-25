import  { useState, useEffect, useCallback } from 'react'

const OptimizedComponent = () => {
  const [theme, setTheme] = useState("light")
  const [count, setCount] = useState(0)
  const [ myTime, setMyTime ] = useState(0)

  const handleClick = () => {
    console.log('Change theme')
    setTheme(theme === "light" ? "dark" : "light")
  }

  const computeValue = useCallback(() => {
    console.log('Calculation...')
    setCount((prevState) => prevState + 1)
  }, [])

  useEffect(() => {
    console.log('re-render Calculation...')
  }, [computeValue])

  useEffect(() => {
    console.log('MyTime')

    const timer = setInterval(() => {
          setMyTime(myTime + 1)
      }, 1000)

      return () => clearInterval(timer)
  }, [myTime])

  return (
    <div>
      <div className="wrapper" id={theme}>
      <div>
      <button className="container-theme"
        onClick={handleClick}
      >
        Change theme
      </button>
      </div>
      <div className="container">
        <div id="sun" className="shape"></div>
        <div id="moon" className="shape"></div>
      </div>

      <div className="container-calculation">
      <p  className="text-value" style={{color: theme === "light" ? "black" : "white"}}>Result value: {count}</p>
      <button onClick={computeValue}>Increase</button>
    </div>

    <div className="container-time">
    <section className="text-time">My own time! 😎 {myTime}</section>
    </div>
      </div>
    </div>
  )
}

export default OptimizedComponent