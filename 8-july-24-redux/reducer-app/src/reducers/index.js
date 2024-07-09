

const initialState={
    data:null,
    api:null,
    flag:false
}

const dataReducer=(state=initialState,action)=>{
      switch(action.type){
        case "FETCH_DATA_SUCCESS":
            return {
                ...state,
                data:action.payload
            }
            case "API_DATA_REQUEST":
                return {
                    ...state,
                    api:action.payload
                }
        default : 
              return state;
      }
}

export default dataReducer;