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

//Ruta para renderizar la página de busqueda
router.get('/computo/search',authRequired,(req,res) =>{
    res.render('computo/buscar-computo');
});//Fin de get computo

//Ruta para la busqueda de notas en el formulario
router.post('/notes/search',authRequired, async(req,res)=> {
    // console.log(req.body.search);
    // res.send('WORKS');
    const user = req.user._id;
    const search = req.body.search;

    if(search){
        await computo.find({
            usuario:user,
            $text:{
                $search:search,
                $caseSensitive:false
            }
        })//Finn del find
        .sort({date:'desc'})
        .then( (computo)=>{
            console.log(computo);
            res.render('computo/buscar-computo',
            {
                search,
                computo
            }
            );//render
        })//fin del then
        .catch( (err)=>{
            console.log(err);
            res.redirect('/error');
        });//catch
    }//if
});//Fin de post

export default router;