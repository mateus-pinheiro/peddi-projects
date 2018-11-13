import RestaurantPortOutbound from "../../api-core/port/outbound/restaurant.outbound-port";
import { injectable, inject } from "inversify";
import RestaurantRepository from "../repository/restaurant.repository";

@injectable()
export default class RestaurantAdapterOutbound implements RestaurantPortOutbound {

    constructor(@inject('RestaurantRepository') private restaurantRepository: RestaurantRepository) { };

    getById(id: Number) {
        this.restaurantRepository.getByCloudId(id);
    }


}