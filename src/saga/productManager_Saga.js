import * as actionType from "../action/actionTypes";
import {Api} from "./../api/api"
//saga effects
import {put,takeLatest} from "redux-saga/effects";
// takeLatest :  lay data tren mang
// takeEvery : buttong tuong tac
function* getData(){
    try{
        const receivedData= yield Api.getData();// return data
        yield put({type:actionType.GET_SUCCESS,data:receivedData}); // thanh cong se gui vao reduser cai action nay
    }catch (err){
        yield put ({type:actionType.GET_FAIL,err}); // khong thanh con se gui cai nay toi reducer
    }
}

export function* watchGetData(){
    yield takeLatest(actionType.GET_INFOR,getData); // theo doi thang action "GET_INFOR" tu component co duowc bam chua
}

// create data
function* createData(action){
    try{
        const receivedDataCreate= yield Api.createData(action.data);// return  true/fasle
        if(receivedDataCreate){
        yield put({type:actionType.GET_INFOR}); // goi action get_infor
        }
    }catch (err){
        yield alert("create data failed"); // khong thanh cong se lam cai nay
    }
}

export function* watchCreateData(){
    yield takeLatest(actionType.CREAT_DATA,createData);// lang nghe action CREATE_DATA 
}
