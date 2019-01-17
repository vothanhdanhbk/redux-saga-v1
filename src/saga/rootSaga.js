

//saga effects
import {fork} from "redux-saga/effects";
import {watchGetData,watchCreateData} from "./productManager_Saga"
// call : chay 1 saga
//all: chay 1 luc nhieu saga ,nhung chay lan luot
// fork : chay nhieu saga ,nhung chayj cung luc

export default function* rootSaga(){
    yield [
       fork(watchGetData),
       fork(watchCreateData)
  
    ]
}
