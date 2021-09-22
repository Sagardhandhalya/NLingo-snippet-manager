import { useState } from 'react'

import Button from '../Button/Button'

const Counter = () => {
  const sam = 'sagar'
  console.log(sam)

  const [c, setC] = useState(0)
  const logger = () => {
    alert('You clicked log it')
  }
  return (
    <div>
      <Button onClick={setC} text={`count ${c}`} />
      <Button onClick={logger} text="Log it" />
    </div>
  )
}

export default Counter
