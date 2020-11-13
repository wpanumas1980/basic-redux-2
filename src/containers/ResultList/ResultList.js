import React from 'react'
import { connect } from 'react-redux'
import { deleteResult, storeResult } from '../../store/action'

function ResultList({ rl,onAdd, ctn, onDelete}) {
    return (
        <div style={{ textAlign: "center" }}>
             <button  onClick={() => onAdd(ctn)}>Store current counter</button>
            <h1>These are result you saved</h1>

            <ul  style={{
                  width: "123px",
                  margin: "0 auto",
                  fontSize: "23px",
                  fontWeight: "bold",
                  listStyleType: "square",
                  color: "purple",
            }}>
                {rl.map(({ id, result }) => <li>{result}
                <button onClick={()=>onDelete(id)}>delete</button>
                </li>)}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        rl: state.resCombine.resultList,
        ctn:state.ctrCombine.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onAdd: (value) => dispatch(storeResult(value)),
      onDelete:(id)=>dispatch(deleteResult(id))
    };
  };


export default connect(mapStateToProps,mapDispatchToProps)(ResultList)
