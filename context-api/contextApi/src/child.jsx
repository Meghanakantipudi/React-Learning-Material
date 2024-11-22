import React, { useContext } from 'react';
import { MessageContext } from './MessageContext';

function child() {
    const message = useContext(MessageContext);
  return (
    <div className="border-2 border-red-400 w-[150px] h-[150px] m-5">
      Child - {message}
    </div>
  )
}

export default child
