import RestaurantRepository from "../restaurant.repository";
import { RestaurantEntity } from "../../entity/restaurant.entity";
import { injectable } from "inversify";

@injectable()
export default class RestaurantImpl implements RestaurantRepository {

    getByCloudId(id: Number) {
        let restaurant;
        RestaurantEntity.findOne({ 'restaurant_id_cloud': id }).then((resolve) => restaurant = resolve);
        console.log(restaurant);
        return restaurant;
    }

}