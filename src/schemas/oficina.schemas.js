import {z} from 'zod';

export const oficinaSchema = z.object({ 
    numeroserie: z.number({
        required_error: 'Número de serie requerido'
    }),
    tipo: z.string({
        required_error: 'Tipo requerido'
    }),
    proveedor: z.string({
        required_error: "Proveedor requerido"
    }),
    descripcion: z.string({
        required_error: 'Descricpcion requerida'
    }),
    estatus: z.string({
        required_error: 'Estatus requerido'
    }).optional(),
    cantidad: z.number({
        required_error: 'Cantidad requerida'
    }).optional(),
    responsable: z.string({
        required_error: 'Nombre del responsable requerido'
    }),
    ubicacion: z.string({
        required_error: 'Ubicacion requerida'
    }),
});