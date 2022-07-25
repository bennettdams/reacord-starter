import { Button } from "reacord"
import React from "react"

export function Counter({ initialCount }: { initialCount: number }) {
  const [count, setCount] = React.useState(initialCount)
  return (
    <>
      count: {count}
      <Button label="+1" onClick={(prevCount) => setCount(prevCount + 1)} />
      <Button label="-1" onClick={(prevCount) => setCount(prevCount - 1)} />
      <Button label="reset" onClick={() => setCount(0)} />
    </>
  )
}
