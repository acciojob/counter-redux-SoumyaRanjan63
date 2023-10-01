import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import { decrement, increment } from '../redux/action/counterAction';

const CounterApp = () => {
    const count=useSelector(state=>state.count);
    const dispatch=useDispatch();
    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={()=>dispatch(increment())}>INCREMENT</button>
            <button onClick={()=>dispatch(decrement())}>DECREMENT</button>

        </div>
    );
}

export default CounterApp;



