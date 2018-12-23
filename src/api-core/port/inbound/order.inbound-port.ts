import OrderModel from "../../commons/model/order.model";

export default interface OrderPortInbound {

    get(): Array<OrderModel>;

    getById(id: Number): void;

    save(order: OrderModel): Promise<any>;

    send(id: String): void;

    //Just keep the id value on Flutter
    update(id: String, order: OrderModel): void;

}