import { useDispatch, useSelector } from "react-redux"
import { decrement, dynamicvalue, increment, selectcount } from "./counterreducer";

function Counter() {
    const dispatch = useDispatch();
    const data = useSelector(selectcount)
    return (
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <p>
                {data}
            </p>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(dynamicvalue(10))}>10</button>
        </div>
    )
}
export default Counter