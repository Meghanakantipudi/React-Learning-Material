import React from 'react'
import Child from './child'

function parents() {
  return (
    <div className="border-2 border-gray-400 w-[200px] h-[200px] m-5">
     Parent
     <Child />
    </div>
  )
}

export default parents
