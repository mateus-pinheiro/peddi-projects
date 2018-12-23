export default class OrderDTO {
    
    public table: Number;
    public guests: Number;
    public order_price: Number;
    public status: Number;
    public restaurant_id_cloud: Number;
    public waiter_id_cloud: Number;
    public created_at: String;
    public updated_at: String;
    public consumers: ConsumerDTO;

    constructor(incoming: OrderDTO) {
        this.table = incoming.table;
        this.guests = incoming.guests;
        this.order_price = incoming.order_price;
        this.status = incoming.status;
        this.restaurant_id_cloud = incoming.restaurant_id_cloud;
        this.waiter_id_cloud = incoming.waiter_id_cloud;
        this.created_at = incoming.created_at;
        this.updated_at = incoming.updated_at;
        this.consumers = incoming.consumers;

    }

}

export class ConsumerDTO {

    public card: String;
    public items: Array<ItemDTO>;

    constructor(incoming: ConsumerDTO) {
        this.card = incoming.card;
        this.items = incoming.items;
    }

}

export class ItemDTO {

    public base_cloud_id: Number;
    public item_price: Number;
    public ingredients: Array<IngredientDTO>;

    constructor(incoming: ItemDTO) {
        this.base_cloud_id = incoming.base_cloud_id;
        this.item_price = incoming.item_price;
        this.ingredients = incoming.ingredients;
    }

}

export class IngredientDTO {

    public ingredient_cloud_id: Number;
    public action: Number;
    public ingredient_price: Number;

    constructor(incoming: IngredientDTO) {
        this.ingredient_cloud_id = incoming.ingredient_cloud_id;
        this.action = incoming.action;
        this.ingredient_price = incoming.ingredient_price;
    }

}