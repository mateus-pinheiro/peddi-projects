export default class ResponseEpoc {
    private status: Number;
    private msg: String;
    private data: Object;
    private time: String;

    constructor(incoming: ResponseEpoc){
        this.status = incoming.status;
        this.msg = incoming.msg;
        this.data = incoming.data;
        this.time = incoming.time;
    }

}