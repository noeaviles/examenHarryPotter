const agregarFavorito = (item)=>{
    return {
        type:"ADD_FAVORITOS",
        payload:item
    }
}
const eliminarFavorito = (item)=>{
    return {
        type:"DELETE_FAVORITOS",
        payload:item
    }
}

export {agregarFavorito,eliminarFavorito}