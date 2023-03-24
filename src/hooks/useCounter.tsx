import React from 'react'

export default  function useCounter(defaultValue=0, amountTochange=1) {
    const [counter, setCounter] = React.useState(defaultValue)

    const increment = () => {
        setCounter(counter+amountTochange)
    }

    const decrement = () => {
        setCounter(counter-amountTochange)
    }
    return {counter, increment, decrement}
}

