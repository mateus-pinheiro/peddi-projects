import OrderPortOutbound from "../../api-core/port/outbound/order.outbound-port";
import { injectable, inject } from "inversify";
import OrderModel from "../../api-core/commons/model/order.model";

import OrderRepository from "../repository/order.repository";
import PeddiCloudIntegrationPort from "../integration/external-peddi-api/peddi-cloud.integration-port";
import { GeradorToken } from "../util/token-config";
import EpocIntegrationPort from "../integration/epoc-api/epoc.integration-port";
import ResponseEpoc from "../envelopes/response.epoc";

@injectable()
export default class OrderAdapterOutbound implements OrderPortOutbound {
  

    private tokenManager: GeradorToken;


    constructor(
        @inject('OrderRepository') private orderRepository: OrderRepository,
        @inject('PeddiCloudIntegrationPort') private peddiCloudIntegration: PeddiCloudIntegrationPort,
        @inject('EpocIntegrationPort') private epocIntegration: EpocIntegrationPort
    ) {
        this.tokenManager = new GeradorToken();
    };

    getById(id: String): OrderModel {
        //it must makes a convert from model core to a dto;
        return this.orderRepository.getById(id);
    }

    sellItem (order: OrderModel) : Promise<ResponseEpoc>{
        let result;
        var setSys = () =>  {
            return this.epocIntegration.sistemaAuth();
        };
        
        result = this.epocIntegration.tokenGenerator(setSys).then((r) => {
            return r;
        });;
        
        console.log(result);
        return result;
    }

    save(order: OrderModel): Number {
        return this.orderRepository.save(order);
    }

    update(id: String, order: OrderModel): void {
        this.orderRepository.update(id, order);
    }

    async send(order: OrderModel): Promise<Object> {
        console.log("Chegou na camada outbound");
        // object to be authenticate
        let authenticateObject = {
            // restaurant_id_cloud: 1,
            // token: "P21v1I85uM"
            restaurant_id_cloud: order.restaurant_id,
            token: order
        }



        // console.log(authenticateObject);
        //make the hash to cloud api authentication 

        let hashToAuthenticate = this.tokenManager.generateToken(authenticateObject);
        // console.log(hashToAuthenticate);
        // const hashToAuthenticate: String ;

        //authenticate
        let tokenAuthenticated = await this.peddiCloudIntegration.authenticate(hashToAuthenticate);
        console.log("token retornado");
        console.log(tokenAuthenticated);

        //send the order
        console.log("Enviando pedido:")
        let sentOrder = await this.peddiCloudIntegration.sendOrder(order, tokenAuthenticated);
        return sentOrder;

        // this.orderRepository.save(order);



        // this.peddiCloudIntegration.authentication();
    }

}