
import { useState } from 'react';
export function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
          <h2>Counter Component :  {count}</h2>
          <button onClick={() => setCount((count) => count + 1)}>Order one more</button>
      <p>This is a simple counter component.</p>
    </>
  )
}