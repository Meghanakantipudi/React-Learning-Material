import { useState } from "react";

function Message(){
    let [showMessage, setShowMessage] = useState(false);
    function handleClick(){
        setShowMessage(!showMessage);
    }
    return (
        <>
            <button onClick = {handleClick}>Click me</button>
            {showMessage && <h1>Hello, I am a message</h1>}
        </>
    )
}

export default Message;