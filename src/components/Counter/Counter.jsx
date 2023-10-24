import { useState } from "react";
import PropTypes from 'prop-types'

const Counter = (props) => {
    const { onCounterChange } = props;
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
        onCounterChange(count + 1);
    };

    const handleDecrement = () => {
        if (count <= 0) {
            return;
        } else {
            setCount(count - 1);
            onCounterChange(count - 1);
        }
    };
    
    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
}

Counter.propTypes = {
    onCounterChange: PropTypes.func.isRequired,
};

export default Counter;
