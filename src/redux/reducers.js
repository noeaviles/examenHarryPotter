const initialState = {
    favoritos:[],

}

export default (state=initialState,action) => {
    switch(action.type){
        case "ADD_FAVORITOS":{
            
           return {  
                ...state, favoritos: state.favoritos.concat(action.payload)
            } 
        }
        case "DELETE_FAVORITOS":{
            return {  
                 ...state, favoritos:action.payload
                
             } 
         }
        default: return state;
    }
}