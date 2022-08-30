import styled from "styled-components";
import { useState } from "react";

const Button = styled.button`
    margin: 16px 0;
`;

function App() {
    //useStateでsetCount関数が変化したときcountが変わる
    const [count, setCount] = useState(0);
    const add = () => setCount((prevCount) => prevCount + 1);
    const doubleAdd = () => {
        add();
        add();
    };
    return (
        <>
            {count === 3 ? (
                <>
                    <Button onClick={() => setCount(0)}>clear!</Button>
                    <br />
                </>
            ) : (
                <p>You Clicked {count} times</p>
            )}
            <button onClick={add}>+1</button>
            <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={doubleAdd}>Double Add</button>
        </>
    );
}

export default App;
