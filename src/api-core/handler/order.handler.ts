import { injectable, inject } from "inversify";
import OrderPortInbound from "../port/inbound/order.inbound-port";
import OrderPortOutbound from "../port/outbound/order.outbound-port"
import RestaurantPortOutbound from "../port/outbound/restaurant.outbound-port"
import OrderDTO from "../commons/dto/order.dto";

@injectable()
export default class OrderHandler implements OrderPortInbound {


    constructor(
        @inject("OrderPortOutbound")
        private orderPortOutbound: OrderPortOutbound,
        @inject("RestaurantPortOutbound")
        private restaurantPortOutbound: RestaurantPortOutbound) { }

    save(order: OrderDTO): Number {

        //send the order to EPOC (manager system of restaurant)

        //treat the return and see if everithing was send

        //save on local database
        return this.orderPortOutbound.save(order);
    }
    update(id: Number, order: OrderDTO): void {
        this.orderPortOutbound.update(id, order);
    }
    send(order: OrderDTO): void {
        console.log("Chegou na camada core");
        let restaurantToken = "";
        //get restaurant infos to make the authenticate of peddi cloud api
        // restaurantToken = this.restaurantPortOutbound.getById(order.restaurant_id_cloud).hash;
        
        //tranfer order and restaurant infos from controller to the outside of the application
        this.orderPortOutbound.send(order, order.restaurant_id_cloud, restaurantToken);

        // return new Number();
        // this.orderPortOutbound.save(order);
        // throw new Error("Method not implemented.");
    }

    get(): Array<OrderDTO> {
        throw new Error("Method not implemented.");
    }
    getById(id: Number): void {
        // throw new Error("Method not implemented.");
    }


}