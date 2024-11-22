import './App.css'
import Family from './Family'
import { MessageContext } from './MessageContext'

function App() {
  return (
    <>
      <MessageContext.Provider value={"Message from App"}>
        <div className="border-2 border-blue-400 w-[500px] h-[500px] m-10">
          
        <Family />
        </div>
      </MessageContext.Provider>
    </>
  )
}

export default App
