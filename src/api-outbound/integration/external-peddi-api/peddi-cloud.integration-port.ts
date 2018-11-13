export default interface PeddiCloudIntegrationPort {

    authenticate(tokenWithRestaurantInformation : any): Promise<Object>;

    sendOrder(order: Object, token: any): Promise<Object>;

}