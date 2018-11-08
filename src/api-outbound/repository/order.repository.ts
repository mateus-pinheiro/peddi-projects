export default interface OrderRepository {

    save(order: any): Number;

    update(id: Number, order: any): any

}