import { productPost, productsGet,ProductGet, productPut, dlProduct } from "../services/products.servives"
import { handleHttp } from "../utils/error.handle"

const getProduct = async({ params }:Request|any,res:Response|any) =>{
    try{
        const {id}=params
        const responseItem = await ProductGet(id)
        const data = responseItem? responseItem:"NOT FOUND"
        res.send(data)
    }catch (e){
        handleHttp(res,'ERROR_GET_ITEM',e)
    }

}
const getProducts = async(req:Request,res:Response|any) =>{
    try{
        const responseItem = await productsGet()
        res.send(responseItem)
    }catch (e){
        handleHttp(res,'ERROR_GET_ITEMS',e)
    }
}
const postProduct = async({body}:Request | any,res:Response|any)=>{
    try{
        const responseItem = await productPost(body)
        res.send(responseItem)
    }catch (e){
        handleHttp(res,'ERROR_POST_ITEM',e)
    }
}
const putProduct = async({params,body}:Request|any,res:Response|any) =>{
    try{
        const {id}=params
        const responseItem = await productPut(id,body)
        res.send(responseItem)
    }catch (e){
        handleHttp(res,'ERROR_UPDATE_ITEM',e)
    }
}
const deleteProduct = async({params}:Request|any,res:Response|any) =>{
    try{
        const {id}=params
        const responseItem = await dlProduct(id)
        res.send(responseItem)
    }catch (e){
        handleHttp(res,'ERROR_DELETE_ITEM',e)
    }
}

export {getProduct,getProducts,postProduct,putProduct,deleteProduct}