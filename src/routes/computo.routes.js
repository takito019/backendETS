import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getComputos,
  createComputo,
  getComputo,
  deleteComputo,
  editComputo,
} from "../controllers/computo.controller.js";

//Importamos el validatorSchema
import {validateSchema} from '../middlewares/validator.middleware.js';
//Importamos los esquemas de validacion
import {computoSchema} from '../schemas/computo.schemas.js';

const router = Router();

//Obtener todos los productos
router.get('/computo', authRequired, getComputos);

//Agregar un producto
router.post('/computo', authRequired, validateSchema(computoSchema),createComputo);

//Obtener un producto por id
router.get('/computo/:id', authRequired, getComputo);

//Eliminar un producto
router.delete('/computo/:id', authRequired, deleteComputo);

//Actualizar un producto
router.put('/computo/:id', authRequired, editComputo);

// router.get('/computo/search',isAuthenticated,(req,res) =>{
//   res.render('computo/buscar-computo');
// });//Fin de get computo

export default router;
