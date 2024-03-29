import mongoose from "mongoose";

const oficinaSchema = new mongoose.Schema(
    {
        numSerie: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required:true
        },        
        proveedor:{
            type:String,
            required: true
        },
        descripcion: {
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
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required:true
        }
    },  {
        timestamps: true
    }
); //fin de oficinaSchema

export default mongoose.model( 'Oficina', oficinaSchema);