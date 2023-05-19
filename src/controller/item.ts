import { insertMovies, getMovies, getMovie, updateMovie, deleteMovie } from "../services/item.servives"
import { handleHttp } from "../utils/error.handle"

const getItem = async({ params }:Request|any,res:Response|any) =>{
    try{
        const {id}=params
        const responseItem = await getMovie(id)
        const data = responseItem? responseItem:"NOT FOUND"
        res.send(data)
    }catch (e){
        handleHttp(res,'ERROR_GET_ITEM',e)
    }

}
const getItems = async(req:Request,res:Response|any) =>{
    try{
        const responseItem = await getMovies()
        res.send(responseItem)
    }catch (e){
        handleHttp(res,'ERROR_GET_ITEMS',e)
    }
}
const postItem = async({body}:Request | any,res:Response|any)=>{
    try{
        const responseItem = await insertMovies(body)
        res.send(responseItem)
    }catch (e){
        handleHttp(res,'ERROR_POST_ITEM',e)
    }
}
const updateItem = async({params,body}:Request|any,res:Response|any) =>{
    try{
        const {id}=params
        const responseItem = await updateMovie(id,body)
        res.send(responseItem)
    }catch (e){
        handleHttp(res,'ERROR_UPDATE_ITEM',e)
    }
}
const deleteItem = async({params}:Request|any,res:Response|any) =>{
    try{
        const {id}=params
        const responseItem = await deleteMovie(id)
        res.send(responseItem)
    }catch (e){
        handleHttp(res,'ERROR_DELETE_ITEM',e)
    }
}

export {getItem,getItems,postItem,updateItem,deleteItem}