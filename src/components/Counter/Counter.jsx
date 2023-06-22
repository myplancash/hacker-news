import React, { useState } from 'react'
import './Counter.scss';

const Counter = () => {

  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <div className='counter'>
      <button 
        disabled={count === 0}
        onClick={handleDecrement} 
        className='counter-btn'>-
      </button>
        <span className={`counter-value ${count > 0 ? 'positive' : count < 0 ? 'negative' : null}`}>{count}</span>
      <button 
        className='counter-btn' 
        onClick={handleIncrement}>+
      </button>
    </div>
  )
}

export default Counter