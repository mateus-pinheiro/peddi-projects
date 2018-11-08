import OrderPortOutbound from "../../api-core/port/outbound/order.outbound-port";
import { injectable, inject } from "inversify";
import OrderDTO from "../../api-core/commons/dto/order.dto";
import OrderRepository from "../repository/order.repository";

@injectable()
export default class OrderAdapterOutbound implements OrderPortOutbound {
    
    constructor(@inject('OrderRepository') private orderRepository: OrderRepository) {};
    
    save(order: OrderDTO) : Number {
        return this.orderRepository.save(order);
        // return new OrderDTO();
    }
    update(id: Number, order: OrderDTO): void {
        this.orderRepository.update(id, order);
    }
    
}