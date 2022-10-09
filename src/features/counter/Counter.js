import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

import { useState } from "react";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
        type="text"
      />
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add amount
        </button>
        <button onClick={() => dispatch(resetAll)}>reset</button>
      </div>
    </section>
  );
};

export default Counter;
