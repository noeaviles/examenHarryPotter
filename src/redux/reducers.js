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
            //const nuevoState = state.filter( state.name !== action.payload.name)
            return {  
                 ...state, favorito:{name:"Noe"}
                
             } 
         }
        default: return state;
    }
}