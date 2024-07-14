

const initialState={
    data:null
}

const dataReducer=(state=initialState,action)=>{
      switch(action.type){
        case "FETCH_DATA_RESPONSE":
            return {
                ...state,
                data:action.payload
            }
        default : 
              return state;
      }
}

export default dataReducer;