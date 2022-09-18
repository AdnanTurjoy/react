import React, { useEffect, useState } from 'react';
function Hooks() {
  const [count, setCount] = useState(0);
  const [changeColor, setChangeColor] = useState(false);
  const handleIncrease = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    if (count>5) {
       setChangeColor(true)
    }
    else{
      setChangeColor(false)
    }
     
  }, [count])
  const handleDecrease = () => {
    
    if (count >= 0) {
      setCount(0);
    }
    setCount(count - 1)
  }
  const handleReset = () => {
    setCount(0);
  }
  console.log(count);
  return (
    <div>
      <h2>Hooks</h2>
      <p>{count}</p>
      <button className='count' style={{
        backgroundColor: changeColor ? "red" : ""
      }} onClick={handleIncrease}>+</button>
      <button className='count' onClick={handleDecrease}>-</button>
      <button className='count' onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Hooks;