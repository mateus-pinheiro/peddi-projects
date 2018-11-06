export default interface OrderPortInbound {

    get(): String;

    getById(id: Number): void;

    insert(order: String) : Number;

    update(order: String) : void;

}