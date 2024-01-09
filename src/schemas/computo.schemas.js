import {z} from 'zod';

export const computoSchema = z.object({
    numSerie: z.number({
        required_error: 'Número de serie requerido'
    }),
    tipo: z.string({
        required_error: 'Tipo requerido'
    }),
    modelo: z.string({
        required_error: 'Modelo requerido'
    }),
    sistemaOp: z.string({
        required_error: 'Sistema operativo requerido'
    }),
    procesador: z.string({
        required_error: 'Procesador requerido'
    }),
    ram: z.number({
        required_error: 'Memoria RAM requerido'
    }),
    hd: z.string({
        required_error: 'HD requerido'
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