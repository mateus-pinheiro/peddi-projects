const { BaseDTO, BaseListDTO, fields } = require('dtox')

// Define order mapping
const ORDER_MAPPING = {
    table: fields.number(),
    guests: fields.number(),
    amount_price: fields.number(),
    status: fields.number(),
    restaurant_id_cloud: fields.number(),
    waiter: fields.WaiterDTO()
};

const WAITER_MAPPING = {
    cloud_id: fields.number(),
    mgmt_id: fields.string(),
    name: fields.string()
};

// Define a DTO which represents a single order
export default class OrderDTO extends BaseDTO {
    constructor(data: any) {
        super(data, ORDER_MAPPING);
    }
}

class WaiterDTO extends BaseDTO {
    constructor(data: any) {
      super(data, WAITER_MAPPING);
    }
}

