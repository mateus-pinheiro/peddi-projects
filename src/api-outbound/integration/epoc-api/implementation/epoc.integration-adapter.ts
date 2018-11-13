import EpocIntegrationPort from "../epoc.integration-port";
import request = require('request');
import { injectable } from "inversify";

@injectable()
export default class EpocIntegrationAdapter implements EpocIntegrationPort {
    async tokenGenerator(systemAuth: any): Promise<Object> {
        
        // let sistemaAuth: SistemaAuth = new SistemaAuth();
		// let sistemaAuthString: string;
		// sistemaAuth.hashemp = config.hashemp;
		// sistemaAuth.mac = config.mac;
		// sistemaAuth.service = 'geraToken';
		// sistemaAuth.tokenParceiro = config.tokenParceiro;
		// sistemaAuth.saltParceiro = config.saltParceiro;
		// sistemaAuthString = querystring.stringify(sistemaAuth);
        
        return new Promise((resolve, reject) => {
			request.post({
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Accept': 'application/json'
				},
				url: process.env.EPOC_URL + `/API/mod_valida_parceiro/index.php`,
				// body: sistemaAuthString
            }, (err: Error, resp: any, body: any) => {
				if (!err) {
					return resolve(body);
				}
				else {
					return reject(err);
				}
			});
		})
    } 
    venderItem(order: any): String {
        throw new Error("Method not implemented.");
    }
    getExtrato(objExtrato: any): String {
        throw new Error("Method not implemented.");
    }
    getProducts(): String {
        throw new Error("Method not implemented.");
    }


}