// const { BaseDTO, fields } = require('dtox')

// Define order mapping
// const ORDER_MAPPING = {
//     table: Number(),
//     guests: Number(),
//     amount_price: Number(),
//     status: Number(),
//     restaurant_id_cloud: Number(),
//     // waiter: fields.WaiterDTO()
// };

// const WAITER_MAPPING = {
//     cloud_id: fields.number(),
//     mgmt_id: fields.string(),
//     name: fields.string()
// };

// // Define a DTO which represents a single order
// export default class OrderDTO extends BaseDTO {
//     constructor(data: any) {
//         super(data, ORDER_MAPPING);
//     }
// }

// class WaiterDTO extends BaseDTO {
//     constructor(data: any) {
//       super(data, WAITER_MAPPING);
//     }
// }

export default class OrderModel {
    public mongo_id?: String;
    public table: Number;
    public guests: Number;
    public order_price: Number;
    public status: Number;
    public restaurant_id: Number;
    public waiter_mgmt_id: Number;
    public created_at: String;
    public updated_at: String;
    public consumers: ConsumerModel;

    constructor(incoming: OrderModel) {
        this.mongo_id = incoming.mongo_id;
        this.table = incoming.table;
        this.guests = incoming.guests;
        this.order_price = incoming.order_price;
        this.status = incoming.status;
        this.restaurant_id = incoming.restaurant_id;
        this.waiter_mgmt_id = incoming.waiter_mgmt_id;
        this.created_at = incoming.created_at;
        this.updated_at = incoming.updated_at;
        this.consumers = incoming.consumers;

    }

}

export class ConsumerModel {

    public card: String;
    public items: Array<ItemModel>;

    constructor(incoming: ConsumerModel) {
        this.card = incoming.card;
        this.items = incoming.items;
    }

}

export class ItemModel {

    public base_mgmt_id: Number;
    public item_price: Number;
    public ingredients: Array<IngredientModel>;

    constructor(incoming: ItemModel) {
        this.base_mgmt_id = incoming.base_mgmt_id;
        this.item_price = incoming.item_price;
        this.ingredients = incoming.ingredients;
    }

}

export class IngredientModel {

    public ingredient_mgmt_id: Number;
    public action: Number;
    public ingredient_price: Number;

    constructor(incoming: IngredientModel) {
        this.ingredient_mgmt_id = incoming.ingredient_mgmt_id;
        this.action = incoming.action;
        this.ingredient_price = incoming.ingredient_price;
    }

}


//Contract
// {  
//     "table":3,
//     "guests":2,
//     "amount_price":66.30,
//     "status":1,
//     "restaurant_id_cloud":1,
//     "waiter_id_cloud":1,
//     "created_at":"12/02/2018 12:50",
//     "updated_at":"12/02/2018 12:51",
//     "consumers":[  
//        {  
//           "cloud_id":508,
//           "items":[  
//              {  
//                 "cloud_id":33,
//                 "ingredients":null
//              },
//              {  
//                 "cloud_id":101,
//                 "ingredients":null
//              }
//           ]
//        },
//        {  
//           "cloud_id":603,
//           "items":[  
//              {  
//                 "cloud_id":10,
//                 "ingredients":[  
//                    1
//                 ]
//              },
//              {  
//                 "cloud_id":71,
//                 "ingredients":[  
//                    5,
//                    14
//                 ]
//              }
//           ]
//        }
//     ]
//  }



