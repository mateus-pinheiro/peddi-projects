import OrderDTO from "../../commons/dto/order.dto";

export default interface OrderPortOutbound {
    save(order: OrderDTO): Number;

    update(id: Number, order: OrderDTO): void;
}