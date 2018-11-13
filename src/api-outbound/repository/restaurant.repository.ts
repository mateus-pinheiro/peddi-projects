// import { RestaurantEntity } from '../entity/restaurant.entity';

export default interface RestaurantRepository {

    getByCloudId(id: Number): any;


}