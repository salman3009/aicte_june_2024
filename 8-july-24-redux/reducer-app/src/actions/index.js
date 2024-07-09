
export const fetchDataSuccess = (data) => {
     return {
          type: "FETCH_DATA_SUCCESS",
          payload: data
     }

}


export const apiDataRequest = (data) => {
     return {
          type: "API_DATA_REQUEST",
          payload: data
     }

}