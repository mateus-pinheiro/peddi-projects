import OrderModel from '../../commons/model/order.model';

export default interface OrderPortOutbound {
    save(order: OrderModel): Number;

    update(id: String, order: OrderModel): void;

    getById(id : String) : OrderModel;

    send(order: OrderModel, restaurant_id_cloud: Number, restaurantToken: String) : Promise<Object>;

    sellItem(order: OrderModel) : Promise<Object>;
}