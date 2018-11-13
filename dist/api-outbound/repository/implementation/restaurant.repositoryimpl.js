"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const restaurant_entity_1 = require("../../entity/restaurant.entity");
const inversify_1 = require("inversify");
let RestaurantImpl = class RestaurantImpl {
    getByCloudId(id) {
        let restaurant;
        restaurant_entity_1.RestaurantEntity.findOne({ 'restaurant_id_cloud': id }).then((resolve) => restaurant = resolve);
        console.log(restaurant);
        return restaurant;
    }
};
RestaurantImpl = __decorate([
    inversify_1.injectable()
], RestaurantImpl);
exports.default = RestaurantImpl;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktb3V0Ym91bmQvcmVwb3NpdG9yeS9pbXBsZW1lbnRhdGlvbi9yZXN0YXVyYW50LnJlcG9zaXRvcnlpbXBsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esc0VBQWtFO0FBQ2xFLHlDQUF1QztBQUd2QyxJQUFxQixjQUFjLEdBQW5DLE1BQXFCLGNBQWM7SUFFL0IsWUFBWSxDQUFDLEVBQVU7UUFDbkIsSUFBSSxVQUFVLENBQUM7UUFDZixvQ0FBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxxQkFBcUIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ2hHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztDQUVKLENBQUE7QUFUb0IsY0FBYztJQURsQyxzQkFBVSxFQUFFO0dBQ1EsY0FBYyxDQVNsQztrQkFUb0IsY0FBYyIsImZpbGUiOiJhcGktb3V0Ym91bmQvcmVwb3NpdG9yeS9pbXBsZW1lbnRhdGlvbi9yZXN0YXVyYW50LnJlcG9zaXRvcnlpbXBsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc3RhdXJhbnRSZXBvc2l0b3J5IGZyb20gXCIuLi9yZXN0YXVyYW50LnJlcG9zaXRvcnlcIjtcbmltcG9ydCB7IFJlc3RhdXJhbnRFbnRpdHkgfSBmcm9tIFwiLi4vLi4vZW50aXR5L3Jlc3RhdXJhbnQuZW50aXR5XCI7XG5pbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSBcImludmVyc2lmeVwiO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN0YXVyYW50SW1wbCBpbXBsZW1lbnRzIFJlc3RhdXJhbnRSZXBvc2l0b3J5IHtcblxuICAgIGdldEJ5Q2xvdWRJZChpZDogTnVtYmVyKSB7XG4gICAgICAgIGxldCByZXN0YXVyYW50O1xuICAgICAgICBSZXN0YXVyYW50RW50aXR5LmZpbmRPbmUoeyAncmVzdGF1cmFudF9pZF9jbG91ZCc6IGlkIH0pLnRoZW4oKHJlc29sdmUpID0+IHJlc3RhdXJhbnQgPSByZXNvbHZlKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdGF1cmFudCk7XG4gICAgICAgIHJldHVybiByZXN0YXVyYW50O1xuICAgIH1cblxufSJdfQ==
