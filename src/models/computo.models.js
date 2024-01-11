import mongoose from "mongoose";

const computoSchema = new mongoose.Schema(
    {
        numSerie: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required:true
        },
        modelo: {
            type: String,
            required: true
        },
        sistemaOp: {
            type: String,
            required:true
        },
        procesador:{
            type:String,
            required:true
        },
        ram:{
            type:Number,
            required: true
        },
        hd:{
            type:String,
            required: true
        },
        estatus:{
            type:String,
            required: true, 
            default: "Activo"
        },
        cantidad:{
            type:Number,
            default: 1
        },
        responsable:{
            type:String,
            required: true
        },
        ubicacion:{
            type:String,
            required: true
        },
        proveedor:{
            type:String,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required:true
        }
    },  {
        timestamps: true
    }
); //fin de computoSchema

export default mongoose.model( 'Computo', computoSchema);