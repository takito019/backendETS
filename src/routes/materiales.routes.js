import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getMateriales,
  createMateriales,
  getMaterial,
  deleteMateriales,
  editMateriales,
} from "../controllers/materiales.controller.js";

//Importamos el validatorSchema
import {validateSchema} from '../middlewares/validator.middleware.js';
//Importamos los esquemas de validacion
import {materialesSchema} from '../schemas/materiales.schemas.js';

const router = Router();

//Obtener todos los productos
router.get('/materiales', authRequired, getMateriales);

//Agregar un producto
router.post('/materiales', authRequired, validateSchema(materialesSchema),createMateriales);

//Obtener un producto por id
router.get('/materiales/:id', authRequired, getMaterial);

//Eliminar un producto
router.delete('/materiales/:id', authRequired, deleteMateriales);

//Actualizar un producto
router.put('/materiales/:id', authRequired, editMateriales);

export default router;