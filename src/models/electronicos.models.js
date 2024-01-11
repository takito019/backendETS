import mongoose from "mongoose";

const electronicosSchema = new mongoose.Schema(
    {
        numSerie: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required:true
        },
        modelo: {
            type: String,
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
); //fin de electronicosSchema

export default mongoose.model( 'Electronicos', electronicosSchema);