import { useState } from 'react';
import './App.css';
import Counter from './containers/Counter/Counter';
import ResultList from './containers/ResultList/ResultList';
import { addSpecialResult } from './store/action';

import {connect} from 'react-redux'

function App({onAddSpecial}) {
  const [showCounter, setShowCounter] = useState(true);
  const [showList, setShowList] = useState(true);
  
  return (
    <div>
      <button onClick={()=>{setShowCounter(!showCounter)}}>counter {showCounter? "Hide":"Show"}</button>
      <button onClick={()=>{setShowList(!showList)}}>ResultList {showList? "Hide":"Show"}</button>
      <button  onClick={() => onAddSpecial()}> Add Special result</button>
      {showList? <Counter/>:null}
      {showCounter? <ResultList/>:null}
      
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    onAddSpecial: () => dispatch(addSpecialResult())
  };
};

export default connect(null, mapDispatchToProps)(App);
