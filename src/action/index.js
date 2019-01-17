import * as actionType from "./actionTypes"

export const actFetchInfor=()=>{
    return {
        type: actionType.GET_INFOR
    }
}
export const actcReateInfor=(data)=>{
    return {
        type: actionType.CREAT_DATA,
        data
    }
}


// action sent by redux-sage
// export const actFetchInfor_Success=(data)=>{
//     return {
//         type: actionType.GET_SUCCESS,
//         data
//     }
// }
// export const actFetchInfor_Fail=(err)=>{
//     return {
//         type: actionType.GET_FAIL,
//         err
//     }
// }
