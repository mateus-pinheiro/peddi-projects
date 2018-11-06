export default interface OrderPortInbound {

    get(): String;

    getById(id: Number): void;

    send(order: String) : Number;

    update(order: String) : void;

}