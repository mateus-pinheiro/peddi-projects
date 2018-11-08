import OrderDTO from "../../commons/dto/order.dto";

export default interface OrderPortInbound {

    get(): Array<OrderDTO>;

    getById(id: Number): void;

    save(order: OrderDTO): Number;

    send(order: OrderDTO): Number;

    //Just keep the id value on Flutter
    update(id: Number, order: OrderDTO): void;

}