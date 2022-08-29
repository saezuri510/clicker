import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
            <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount((prev) => prev + 2)}>
                Double Add
            </button>
        </>
    );
}

export default App;
