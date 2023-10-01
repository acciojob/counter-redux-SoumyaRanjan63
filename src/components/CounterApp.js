import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import { decrement, increment } from '../redux/action/counterAction';

const CounterApp = () => {
    const count=useSelector(state=>state.count);
    const dispatch=useDispatch();
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrease</button>

        </div>
    );
}

export default CounterApp;



