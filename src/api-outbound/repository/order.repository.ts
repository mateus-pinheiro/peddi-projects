// import  OrderEntity from "../entity/order.entity";

export default interface OrderRepository {

    save(order: any): Number;

    update(id: String, order: any): any

    getById(id : String) : any;

}