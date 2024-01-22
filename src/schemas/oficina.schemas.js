import {z} from 'zod';

export const oficinaSchema = z.object({
    numSerie: z.string({
        required_error: 'Número de serie requerido'
    }),
    tipo: z.string({
        required_error: 'Tipo requerido'
    }),
    proveedor: z.string({
        required_error: 'Proveedor requerido'
    }),
    descripcion: z.string({
        required_error: 'Descricpcion requerida' 
    }),
    estatus: z.string({
        required_error: 'Estatus requerido'
    }).optional(),
    cantidad: z.number ({
        required_error: 'Cantidad debe ser 1'
    }).optional(),
    responsable: z.string({
        required_error: 'Responsable requerido'
    }),
    ubicacion: z.string({
        required_error: 'Ubicación requerido'
    })
}); //Fin de productSchema