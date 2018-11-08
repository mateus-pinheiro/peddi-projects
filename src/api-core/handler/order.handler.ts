import { injectable, inject } from "inversify";
import OrderPortInbound from "../port/inbound/order.inbound-port";
import OrderPortOutbound from "../port/outbound/order.outbound-port"
import OrderDTO from "../commons/dto/order.dto";

@injectable()
export default class OrderHandler implements OrderPortInbound {


    constructor(
        @inject("OrderPortOutbound")
        private orderPortOutbound: OrderPortOutbound) { }

    save(order: OrderDTO): Number {
        return this.orderPortOutbound.save(order);
    }
    update(id: Number, order: OrderDTO): void {
        this.orderPortOutbound.update(id, order);
    }
    send(order: OrderDTO): Number {
        this.orderPortOutbound.save(order);
        throw new Error("Method not implemented.");
    }

    get(): Array<OrderDTO> {
        throw new Error("Method not implemented.");
    }
    getById(id: Number): void {
        // throw new Error("Method not implemented.");
    }


}