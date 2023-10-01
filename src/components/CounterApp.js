import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import { decrement, increment } from '../redux/action/counterAction';

const CounterApp = () => {
    const count=useSelector(state=>state.count);
    const dispatch=useDispatch();
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>

        </div>
    );
}

export default CounterApp;



