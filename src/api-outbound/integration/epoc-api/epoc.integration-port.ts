export default interface EpocIntegrationPort {

    tokenGenerator(systemAuth: any): Promise<Object>; 

    venderItem(order: any): String;

    getExtrato(objExtrato: any): String;

    getProducts(): String;



}