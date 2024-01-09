import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

//Función para generar un token de inicio de sesión
export function createAccesToken (playload){
    return new Promise ( (resolve,reject) => {
        jwt.sign(
            playload,
            TOKEN_SECRET,
            {
                expiresIn: "1d"
            },
            (err,token)=> {
                if(err) {
                    reject(err);
                    console.log(err)
                }
                resolve(token)
            }
        )
    })
}