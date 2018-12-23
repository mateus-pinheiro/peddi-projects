import OrderRepository from "../order.repository";
import { OrderEntity } from "../../entity/order.entity";
import { injectable } from "inversify";
import { resolve } from "path";

@injectable()
export default class OrderRepositoryImpl implements OrderRepository {
    
    getById(id: String): any {
        let order;
        OrderEntity.findById(id).then(resolve => order = resolve);
        console.log("Order buscada para envio: " + order);

        return order;
    }
    
    save(order: any): Number {
        let data = new OrderEntity(order);
        data.save();
        return data._id;
    }

    update(id: String, order: any): any {

        // let data = new OrderEntity(order);

        OrderEntity.findById(id, function(err: Error, doc: any) {  
            if (err) {  
              console.error('error, no entry found');  
            }  
            doc.products = order.products;  
            console.log(doc);
            console.log(order);
            doc.save();  
          })  
        return order.update();

        // console.log(data, id);
        // let newData = data.update({"_id": "ObjectId(" + id + ")"}, {"table": data.table});
        // console.log(newData);
        // return data.update();
    }



}