import useCounter from "../hooks/useCounter"
import useTimer from "../hooks/useTimer"


const Component = () => {
    const {counter, increment, decrement} = useCounter(0, 1)
    const {timerData, togglePlayPause, handleReset} = useTimer(0, false)
  
  
    return (
      <div>
        <h1>Custom hooks</h1>
        <h3>Counter</h3>
        {counter}<br/>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button><br/>
        <h3>Timer</h3>
        {timerData}<br/>
        <button onClick={togglePlayPause}>Play/Pause</button>
        <button onClick={handleReset}>Reset</button>
        </div>
        
    )
  }

  export default Component