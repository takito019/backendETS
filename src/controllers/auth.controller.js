//Importamos el modelo de datos
import User from '../models/user.models.js';
import bcryptjs from 'bcryptjs';
import { createAccesToken } from '../libs/jwt.js';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

//Función para registrar usuarios
export const register = async ( req, res) => {
    const {username,email,password}=req.body;
    //console.log(username,email,password);

    try{
        //Validamos que el email no este registrado en la base de datos
        const userFound = await User.findOne({email});
        if (userFound)//Si encontró un usuario que ya tenga ese email
        return res.status(400) //Retorna un mensaje de error
                    .json({ message:["El email ya esta en uso"]})

        const passwordHash=await bcryptjs.hash(password,10);
        const newUser=new User ({
            username,
            email,
            password: passwordHash
        });
        
        const userSaved = await newUser.save()
        //console.log(userSaved);
        const token =await createAccesToken( { id:userSaved._id } )
        res.cookie('token',token ,{
            secure: true,
            httpOnly:true,
            sameSite:'none',
        });
        res.json({
            id:userSaved._id,
            username:userSaved.username,
            email:userSaved.email,
            password:passwordHash,
            createdAt:userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        });
    } catch (error) {
        console.log(error);
    }
}

//Función para iniciar sesión
export const login = async (req, res) => {
    const {email, password } =req.body;
    try{
        const userFound = await User.findOne( {email});
        if (!userFound){
            return res.status(400).json( {message:['Usuario no encontrado']})
        }
        //Comparamos el password que envió el usuario con el de la base de datos
        const isMatch = await bcryptjs.compare(password,userFound.password);
        if(!isMatch){
            return res.status(400).json({message:['Password no coincide']})
        }
        const token = await createAccesToken({id:userFound._id});
        res.cookie('token',token, {
            secure: true,     //Activamos esta opcion para que funcione el https en el deployment
            httpOnly:true,
            sameSite:'none',     //Para activar la opcion de que el back y front esten en diferentes servers
        });
        res.json({
            id:userFound._id,
            username:userFound.username,
            email:userFound.email,
            createdAt:userFound.createdAt,
            updatedAt:userFound.updatedAt
        });
    } catch(error) {
        console.log(error);
    }
}

//Función para cerrar sesión
export const logout = (req, res) => {
    res.clearCookie('token')
    return res.sendStatus(200);
}

//Función para el perfil de usuarios
export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id);

    if(!userFound)
    return res.status(400).json( {message: ["user not found"] });

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email
    })
} //Fin de Profile

//Funcion para validar el token de inicio de sesion
export const verifyToken = async(req, res) => {
    const {token} = req.cookies;
    if (!token)
    return res.status(401).json( {message: ["No Autorizado" ] } );

    jwt.verify(token, TOKEN_SECRET,async (err, user) => {
        if (err) //Si hay un error al validar el token
           return res.status(401).json({message: ["No Autorizado"]});

       const userFound = await User.findById(user.id);
       if (!userFound)
          return res.status(401).json({message: ["No Autorizado"]});
           

        return res.json ({
            id: userFound._id,
            username: userFound.username,
            email:userFound.email,
        })//Fin del return res.json
    })//Fin del jwt.verify
}//Fin de verifyToken