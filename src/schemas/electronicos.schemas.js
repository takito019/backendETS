import {z} from 'zod';

export const electronicosSchema = z.object({
    numSerie: z.number({
        required_error: 'Número de serie requerido'
    }),
    descripcion: z.string({
        required_error: 'Tipo requerido'
    }),
    modelo: z.string({
        required_error: 'Modelo requerido'
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
    }),
    proveedor: z.string({
        required_error: 'Proveedor requerido'
    })
}); //Fin de productSchema