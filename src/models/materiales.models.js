import mongoose from "mongoose";

const materialesSchema = new mongoose.Schema(
    {
        numSerie: {
            type: Number,
            default:0,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        }, 
        proveedor:{
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
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required:true
        }
    },  {
        timestamps: true
    }
); //fin de materialesSchema

export default mongoose.model( 'Materiales', materialesSchema);