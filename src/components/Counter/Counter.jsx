import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClickValidate = () => {
        if (count <= 0) {
            return;
        } else {
            setCount(count - 1);
        }
    }
    
    return (<>
        <div>
            <button onClick={() => handleClickValidate()}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    </>);
}

export default Counter;