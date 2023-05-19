import { Schema,model } from 'mongoose';
import { Movies } from './interfaces/movies.interface';

const IntemSchema = new Schema<Movies>(
    {
        titulo:{
            type: String,
            required:true
        },
        data: {
            type: String,
            required:true
        },
        puntuacion:{
            type:Number,
            required:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const ItemModel = model('items',IntemSchema);
export {ItemModel};