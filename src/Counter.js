import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./utils/counterSlice";
const CounterInfo = () => {
  const count = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <>
      <div className="button-div">
        <button className="button-inc" onClick={() => dispatch(increment(1))}>
          Increment
        </button>
      </div>

      <span className="span">{count}</span>

      <div className="button-div">
        <button className="button-dec" onClick={() => dispatch(decrement(1))}>
          Decrement
        </button>
      </div>

      <div>
        <button className="reset" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </>
  );
};
export default CounterInfo;
