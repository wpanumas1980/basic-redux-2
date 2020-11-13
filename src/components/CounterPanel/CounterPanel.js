import React from 'react';
import { connect } from 'react-redux'
import { plus, descrement, increment, sub } from '../../store/action';
import "./counter.css";
function CounterPanel({onCrementCounter,deCrementCounter, addCounter,subCounter}) {

    return (
        <div>
            <button className="btn-codecamp" onClick={onCrementCounter}>INCREASE</button>
            <button className="btn-codecamp" onClick={deCrementCounter}>DECREASE</button>
            <button className="btn-codecamp" onClick={()=>addCounter(5)}>ADD</button>
            <button className="btn-codecamp" onClick={()=>subCounter(10)}>SUBTRACK</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onCrementCounter: () => dispatch(increment()),
        deCrementCounter: () => dispatch(descrement()),
        addCounter: (value) => dispatch(plus(value)),
        subCounter: (value) => dispatch(sub(value)),
    };
};

export default connect(null, mapDispatchToProps)(CounterPanel);//HOF Function ที่ Return เป็น Funtion 
