import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getPerifericos,
  createPeriferico,
  getPeriferico,
  deletePeriferico,
  editPeriferico,
} from "../controllers/perifericos.controller.js";

//Importamos el validatorSchema
import {validateSchema} from '../middlewares/validator.middleware.js';
//Importamos los esquemas de validacion
import {perifericosSchema} from '../schemas/perifericos.schemas.js';

const router = Router();

//Obtener todos los productos
router.get('/perifericos', authRequired, getPerifericos);

//Agregar un producto
router.post('/perifericos', authRequired, validateSchema(perifericosSchema),createPeriferico);

//Obtener un producto por id
router.get('/perifericos/:id', authRequired, getPeriferico);

//Eliminar un producto
router.delete('/perifericos/:id', authRequired, deletePeriferico);

//Actualizar un producto
router.put('/perifericos/:id', authRequired, editPeriferico);

export default router;
