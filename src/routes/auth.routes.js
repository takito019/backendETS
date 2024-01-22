import {Router} from 'express';
import { login, 
    register,
    logout,
    profile,
    verifyToken
} from '../controllers/auth.controller.js';
import { authRequired } from '../middlewares/validateToken.js';

//Importamos el validatorSchema
import {validateSchema} from '../middlewares/validator.middleware.js'
//Importamos los esquemas de validación
import {registerSchema, loginSchema} from '../schemas/auth.schemas.js';

const router = Router();

router.get('/verify',verifyToken);
router.post('/register', validateSchema (registerSchema), register);
router.post('/login', validateSchema (loginSchema) ,login);
router.post('/logout',logout);
router.get('/profile',authRequired,profile);

router.get('/computo/search',isAuthenticated,(req,res) =>{
    res.render('computo/buscar-computo');
});//Fin de get computo


export default router;