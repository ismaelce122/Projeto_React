import { useState } from "react";

function Contador() {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <h1>Contador:</h1>
            <p>{count}</p>

            <button onClick={() => decrement()} >Subtrair</button>
            <button onClick={() => increment()} >Somar</button>

            <button onClick={() => setCount(0)} >Zerar</button>
        </div>
    )
}

export default Contador