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

    public table: Number = 0;
    public guests: Number = 0;
    public amount_price: Number= 0;
    public status: Number = 0;
    public restaurant_id_cloud: Number = 0;
    // waiter: fields.WaiterDTO()

    constructor(incoming: OrderDTO) {
        this.table = incoming.table;
        this.status = incoming.status;
        this.restaurant_id_cloud = incoming.restaurant_id_cloud;
        this.guests = incoming.guests;
        this.amount_price = incoming.amount_price;
    }   

}



