import {z} from 'zod';

export const consumiblesSchema = z.object({
    tipo: z.string({
        required_error: 'Tipo requerido'
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
}); //Fin de papeleriaSchema