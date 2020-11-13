import Axios from "axios";


export const INCREMENT = "INCREMENT";
export const DECREASE = "DECREASE"; 
export const ADD = "ADD"; 
export const SUB = "SUB"; 
export const STORE_RESULT = "STORE_RESULT"; 
export const DELETE_RESULT = "DELETE_RESULT"; 
export const ADD_SPECIAL_RESULT = "ADD_SPECIAL_RESULT";

//Action creater 

export function increment(){
    return{
        type:INCREMENT
    }
}

export function descrement(){
    return{
        type:DECREASE
    }
}

export function plus(value){
    return{
        type:ADD,
        value
    }
}

export function sub(value){
    return{
        type:SUB,
        value
    }
}

export function storeResult(value) {
    return{
        type: STORE_RESULT, 
        counter: value
    }
}
export function deleteResult(id) {
    return{
        type: DELETE_RESULT, 
        id
    }
}
export function addSpecialResult() {
    return dispatch => {
      Axios.get("https://run.mocky.io/v3/c4ef42da-f959-4b00-a0f3-00c11d853c86")
        .then(res => {
          dispatch(addSpecialResultActionCreator(res.data));
        })
        .catch(err => {
          console.log(err);
        });
    };
  }
  
  export function addSpecialResultActionCreator(spL){
    return { type: ADD_SPECIAL_RESULT, spcRL: spL}
  }