import OrderRepository from "../order.repository";
import { OrderEntity } from "../../entity/order.entity";
import { injectable } from "inversify";

@injectable()
export default class OrderRepositoryImpl implements OrderRepository {
    
    save(order: any): Number {
        let data = new OrderEntity(order);
        data.save();
        return data._id;
    }

    update(id: Number, order: any): any {
        let data = new OrderEntity(order);
        console.log(data, id);
        let newData = data.update({_id: id}, data);
        console.log(newData);
        return data.update();
    }

}