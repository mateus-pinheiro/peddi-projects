export default class ResponseApi<T> {

    private status: string;
    private data!: Object;
    private err!: Object;

    constructor(incoming: ResponseApi<T>) {
        this.status = incoming.status;
        this.data = incoming.data;
        this.err = incoming.err;
    }
}