import { Movies } from "../models/interfaces/movies.interface"
import { ItemModel } from "../models/item"

const insertMovies = async(item:Movies)=>{
    const responseInsert = await ItemModel.create(item)
    return responseInsert
}
const getMovies = async ()=>{
    const responseItem = await ItemModel.find({})
    return responseItem
}
const getMovie = async (id: string)=>{
    const responseItem = await ItemModel.findOne({ _id: id})
    return responseItem
}
const updateMovie = async(id:string, data: Movies) => {
    const responseItem = await ItemModel.findOneAndUpdate({ _id: id}, data, {new:true})
    return responseItem
}
const deleteMovie = async(id: string)=>{
    const responseItem = await ItemModel.deleteOne({ _id: id})
    return responseItem
}
export{insertMovies, getMovies, getMovie,updateMovie,deleteMovie}