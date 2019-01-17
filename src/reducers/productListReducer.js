import * as actionType from "../action/actionTypes"


const productListInitialState = []
const  productList= (state = productListInitialState, action) => {
    switch (action.type) {
        case actionType.GET_SUCCESS:
            state=action.data;
            return [...state]
        
        case actionType.GET_FAIL:
        alert('some wrong in request !!!');
            return state
      
        default:
            return state
    }
}
export default productList;