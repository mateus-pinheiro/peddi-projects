import OrderPortOutbound from "../../api-core/port/outbound/order.outbound-port";
import { injectable, inject } from "inversify";
import OrderDTO from "../../api-core/commons/dto/order.dto";
import OrderRepository from "../repository/order.repository";
import PeddiCloudIntegrationPort from "../integration/external-peddi-api/peddi-cloud.integration-port";
import { GeradorToken } from "../util/token-config";

@injectable()
export default class OrderAdapterOutbound implements OrderPortOutbound {

    private tokenManager : GeradorToken;


    constructor(
        @inject('OrderRepository') private orderRepository: OrderRepository,
        @inject('PeddiCloudIntegrationPort') private peddiCloudIntegration: PeddiCloudIntegrationPort
    ) {
        this.tokenManager = new GeradorToken();
    };

    save(order: OrderDTO): Number {
        return this.orderRepository.save(order);
        // return new OrderDTO();
    }
    update(id: Number, order: OrderDTO): void {
        this.orderRepository.update(id, order);
    }

    async send(order: OrderDTO, restaurantIdCloud: Number, restaurantToken: String): Promise<Object> {
        console.log("Chegou na camada outbound");
        // object to be authenticate
        let authenticateObject = {
            restaurant_id_cloud : 1,
            token: "P21v1I85uM"
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