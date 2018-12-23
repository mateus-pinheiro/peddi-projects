import { injectable, inject } from "inversify";
import OrderPortInbound from "../port/inbound/order.inbound-port";
import OrderPortOutbound from "../port/outbound/order.outbound-port"
import RestaurantPortOutbound from "../port/outbound/restaurant.outbound-port"
import OrderModel from "../commons/model/order.model";
// import ResponseApi from "../commons/envelopes/response.model";

@injectable()
export default class OrderHandler implements OrderPortInbound {


    constructor(
        @inject("OrderPortOutbound")
        private orderPortOutbound: OrderPortOutbound,
        @inject("RestaurantPortOutbound")
        private restaurantPortOutbound: RestaurantPortOutbound) { }

    save(order: OrderModel): any {

        
        let response = {
            //save and get the id value
            id: this.orderPortOutbound.save(order),
            //try to send the order to EPOC e wait for the response
            msg: Object()
        };
        this.orderPortOutbound.sellItem(order).then((r) => response.msg = r);

        console.log("Response Outbound:");
        console.log(response.msg);
        
        return response;
    }

    update(id: String, order: OrderModel): void {
        this.orderPortOutbound.update(id, order);
    }

    send(id: String): void {
        console.log("Chegou na camada core");

        // order : OrderDTO;
        let order = new OrderModel(this.orderPortOutbound.getById(id));

        let restaurantToken = "";
        //get restaurant infos to make the authenticate of peddi cloud api
        // restaurantToken = this.restaurantPortOutbound.getById(order.restaurant_id_cloud).hash;

        //tranfer order and restaurant infos from controller to the outside of the application
        this.orderPortOutbound.send(order, order.restaurant_id, restaurantToken);

        // return new Number();
        // this.orderPortOutbound.save(order);
        // throw new Error("Method not implemented.");
    }

    get(): Array<OrderModel> {
        throw new Error("Method not implemented.");
    }

    getById(id: Number): void {
        // throw new Error("Method not implemented.");
    }


}