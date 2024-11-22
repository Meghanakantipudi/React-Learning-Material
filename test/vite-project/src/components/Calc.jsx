import { useState } from "react";

function Calc(){
    const [count, setStateCount] = useState(0);
    const [factor, setFactor] = useState(1);
    function IncreaseCount(){
        setStateCount(count + factor);
    }
    function DecreaseCount(){
        setStateCount(count - factor);
    }
    function IncreaseFactor(){
        setFactor(factor + 1);
    }
    function DecreaseFactor(){
        setFactor(factor - 1);
    }
    return (
        <>
            <div>
                <button onClick={IncreaseFactor}> Increment Factor</button>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={DecreaseFactor}> Decrement Factor</button>
            </div>
            <h1>Factor: {factor}</h1>
            <div>
                <button onClick={IncreaseCount}> Increment Count</button>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={DecreaseCount}> Decrement Count</button>
            </div>
            <h1>Count: {count}</h1>
        </>
    )
}

export default Calc;