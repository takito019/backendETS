import {z} from 'zod';

export const materialesSchema = z.object({
    numSerie: z.string({
        required_error: 'Número de serie requerido'
    }),
    descripcion: z.string({
        required_error: 'Descripción requerida'
    }),
    proveedor: z.string({
        required_error: 'Proveedor requerido'
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
        required_error: 'Ubicación requerida'
    })
}); //Fin de materialeschema