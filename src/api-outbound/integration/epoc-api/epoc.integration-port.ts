import ResponseEpoc from "../../envelopes/response.epoc";
import { SistemaAuth } from "../../dto/epoc.dto";

export default interface EpocIntegrationPort {

    tokenGenerator(systemAuth: any): Promise<ResponseEpoc>;

    venderItem(order: any): Promise<ResponseEpoc>;

    getExtrato(objExtrato: any): String;

    getProducts(): String;

    sistemaAuth(): SistemaAuth;

}