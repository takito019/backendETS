import {Router} from 'express';
import {authRequired} from '../middlewares/validateToken.js';
import {
    getEscolares,
    createEscolar,
    getEscolar,
    deleteEscolar,
    editEscolar,
  } from "../controllers/escolar.controllers.js";
  
  //Importamos el validatorSchema
  import {validateSchema} from '../middlewares/validator.middleware.js';
  //Importamos los esquemas de validacion
  import {escolarSchema} from '../schemas/escolar.schemas.js';
  
  const router = Router();
  
  //Obtener todos los productos
  router.get('/escolar', authRequired, getEscolares);
  
  //Agregar un producto
  router.post('/escolar', authRequired, validateSchema(escolarSchema),createEscolar);
  
  //Obtener un producto por id
  router.get('/escolar/:id', authRequired, getEscolar);
  
  //Eliminar un producto
  router.delete('/escolar/:id', authRequired, deleteEscolar);
  
  //Actualizar un producto
  router.put('/escolar/:id', authRequired, editEscolar);
  
  export default router;
  