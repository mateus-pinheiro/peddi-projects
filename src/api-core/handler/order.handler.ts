import { injectable, inject } from "inversify";
import OrderPortInbound from "../port/inbound/order.inbound-port";
import OrderPortOutbound from "../port/outbound/order.outbound-port"

@injectable()
export default class OrderHandler implements OrderPortInbound {
    
    constructor( @inject("OrderPortOutbound") private orderPortOutbound: OrderPortOutbound ) {}
    
    get(): String {
        throw new Error("Method not implemented.");
    }
    getById(id: Number): void {
        // throw new Error("Method not implemented.");
    }
    send(order: String): Number {
        this.orderPortOutbound.save();
        throw new Error("Method not implemented.");
    }    
    update(order: String): void {
        throw new Error("Method not implemented.");
    }
}