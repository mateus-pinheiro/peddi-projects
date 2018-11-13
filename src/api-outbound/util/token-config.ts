import * as jwt from 'jsonwebtoken';
import { token } from 'morgan';
import fs = require('fs');
export class GeradorToken {

	private privateKey: any;
	private publicKey: any;

	constructor(){
		this.privateKey = fs.readFileSync('./jwt/private.key', 'utf8');
		this.publicKey = fs.readFileSync('./jwt/public.key', 'utf8');
	}

    /**
     * @param payload dados que deseja codificar para base64.
     */
    public gerarToken(payload: any) {
        // let token = jwt.sign(payload, process.env.SECRET, {expiresIn: 8640});
        // return token;
    }
    
	/**
	 *
	 * @param token a ser decodificado.
	 */
	public decodificaToken(token: any) {
		let decoded = jwt.decode(token, {complete:true});
		return decoded;
	}

	public generateToken = (payload: any) => {
        const signOptions = {
            issuer: process.env.TOKEN_ISSUER,
            subject: process.env.TOKEN_SUBJECT,
            audience: process.env.TOKEN_AUDIENCE,
            expiresIn: '10m',
            algorithm: 'RS256'
		}
		try {
			return 'Bearer ' + jwt.sign(payload, this.privateKey, signOptions);
		} catch (error) {
			console.log(error);
		}
        return token;
    }


	public async verificarToken(token: string) {
		return new Promise((resolve) => {
			// if(!token) throw new Error('Token Inválido!');
			// jwt.verify(token, process.env.EPOC_KEY, (err, decoded) => {
				// if(err) throw err;
				// return resolve(decoded);
			// });
		});
	}
}
