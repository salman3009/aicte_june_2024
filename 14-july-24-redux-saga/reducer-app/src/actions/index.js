
export const fetchDataRequest = (data) => {
     return {
          type: "FETCH_DATA_REQUEST",
          payload: data
     }

}


export const fetchDataResponse = (data) => {
     return {
          type: "FETCH_DATA_RESPONSE",
          payload: data
     }

}