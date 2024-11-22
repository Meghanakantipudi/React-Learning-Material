import React from 'react'
import Parents from './Parents'

function Grandparents() {
  return (
    <div className="border-2 border-green-400 w-[300px] h-[300px] m-6">
      Grandparents
      <Parents />
    </div>
  )
}

export default Grandparents
