import mongoose from "mongoose";

const perifericosSchema = new mongoose.Schema(
    {
        numSerie: {
            type: String,
            default:0,
            required: true
        },
        tipo: {
            type: String,
            required:true
        },
        descripcion: {
            type: String,
            required: true
        },
        modelo: {
            type: String,
            required:true
        },
        estatus:{
            type:String,
            required: true, 
            default: "Activo"
        },
        cantidad:{
            type:Number,
            default: 1,
            required:true
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
); //fin de perifericosSchema

export default mongoose.model( 'Perifericos', perifericosSchema);