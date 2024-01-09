import {Router} from 'express';
import {authRequired} from '../middlewares/validateToken.js';
import {
    getOficinas,
    createOficina,
    getOficina,
    deleteOficina,
    editOficina,
  } from "../controllers/oficina.controllers.js";
  
  //Importamos el validatorSchema
  import {validateSchema} from '../middlewares/validator.middleware.js';
  //Importamos los esquemas de validacion
  import {oficinaSchema} from '../schemas/oficina.schemas.js';
  
  const router = Router();
  
  //Obtener todos los productos
  router.get('/oficina', authRequired, getOficinas);
  
  //Agregar un producto
  router.post('/oficina', authRequired, validateSchema(oficinaSchema),createOficina);
  
  //Obtener un producto por id
  router.get('/oficina/:id', authRequired, getOficina);
  
  //Eliminar un producto
  router.delete('/oficina/:id', authRequired, deleteOficina);
  
  //Actualizar un producto
  router.put('/oficina/:id', authRequired, editOficina);
  
  export default router;
  
