import OrderPortOutbound from "../../api-core/port/outbound/order.outbound-port";
import { injectable } from "inversify";

@injectable()
export default class OrderAdapterOutbound implements OrderPortOutbound {

    

    save(): String {
        throw new Error("Method not implemented.");
    }

}