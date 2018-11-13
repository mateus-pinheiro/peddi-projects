import PeddiCloudIntegrationPort from "../peddi-cloud.integration-port";
import { injectable } from "inversify";
import { resolve } from "url";
import { rejects } from "assert";
import request = require('request');
import { Request } from "express";
import { json } from "body-parser";


@injectable()
export default class PeddiCloudIntegrationAdapter implements PeddiCloudIntegrationPort {


    authenticate(tokenWithRestaurantInformation: any): Promise<Object> {
        console.log("Chegou na camada de integração");
        console.log(tokenWithRestaurantInformation);

        return new Promise((resolve, reject) => {
            request.post({
                headers: {
                    'Authorization': tokenWithRestaurantInformation
                },
                url: 'http://192.168.0.23:3000/api/authenticate/local'
            }, async (err, resp, req: Request) => {
                if (!err) {
                    let headerValue = await resp.headers['authorization'];
                    // body = await this.tokenDecoder(body);
                    // console.log(req.headers['authorization']);
                    // let headerValue = req.headers['authorization'];
                    console.log("Header Value Integration");
                    console.log(headerValue);
                    return resolve(headerValue);
                }
                else {
                    return reject(err);
                }
            });
        });
    }

    sendOrder(order: Object, token: any): Promise<Object> {
        console.log(order);
        console.log(token);
        let jsonOrder = JSON.stringify(order);
        console.log(jsonOrder)


        return new Promise((resolve, reject) => {
            request.post({
                headers: {
                    'authorization' : token,
                    'Content-Type' : 'application/json'
                },
                url: 'http://192.168.0.23:3000/api/bills',
                body: jsonOrder
            }, async (err, resp, body) => {
                if (!err) {
                    // body = await this.tokenDecoder(body);
                    console.log(body);
                    return resolve(body);
                }
                else {
                    return reject(err);
                }
            });
        });
    }

}