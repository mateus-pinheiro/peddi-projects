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

export default class OrderDTO {

    public table: Number;
    public guests: Number;
    public amount_price: Number;
    public status: Number;
    public restaurant_id_cloud: Number;
    public waiter_id_cloud: Number;
    public consumers: ConsumerDTO;
    // waiter: fields.WaiterDTO()

    constructor(incoming: OrderDTO) {
        this.table = incoming.table;
        this.guests = incoming.guests;
        this.amount_price = incoming.amount_price;
        this.status = incoming.status;
        this.restaurant_id_cloud = incoming.restaurant_id_cloud;
        this.waiter_id_cloud = incoming.waiter_id_cloud;
        this.consumers = incoming.consumers;

    }

}

export class ConsumerDTO {

    public cloud_id: Number;
    public items: Array<ItemDTO>;
    // waiter: fields.WaiterDTO()

    constructor(incoming: ConsumerDTO) {
        this.cloud_id = incoming.cloud_id;
        this.items = incoming.items;
    }

}

export class ItemDTO {

    public cloud_id: Number;
    public ingredients: Array<IngredientDTO>;
    // waiter: fields.WaiterDTO()

    constructor(incoming: ItemDTO) {
        this.cloud_id = incoming.cloud_id;
        this.ingredients = incoming.ingredients;
    }

}

export class IngredientDTO {

    public cloud_id: Array<Number>;
    // waiter: fields.WaiterDTO()

    constructor(incoming: IngredientDTO) {
        this.cloud_id = incoming.cloud_id;
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



