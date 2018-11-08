"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_entity_1 = require("../../entity/order.entity");
const inversify_1 = require("inversify");
let OrderRepositoryImpl = class OrderRepositoryImpl {
    save(order) {
        let data = new order_entity_1.OrderEntity(order);
        data.save();
        return data._id;
    }
    update(id, order) {
        let data = new order_entity_1.OrderEntity(order);
        console.log(data, id);
        let newData = data.update({ _id: '5be342c0cb2c28334bf666e5' }, data);
        console.log(newData);
        return data.update();
    }
};
OrderRepositoryImpl = __decorate([
    inversify_1.injectable()
], OrderRepositoryImpl);
exports.default = OrderRepositoryImpl;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktb3V0Ym91bmQvcmVwb3NpdG9yeS9pbXBsZW1lbnRhdGlvbi9vcmRlci5yZXBvc2l0b3J5aW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBLDREQUF3RDtBQUN4RCx5Q0FBdUM7QUFHdkMsSUFBcUIsbUJBQW1CLEdBQXhDLE1BQXFCLG1CQUFtQjtJQUVwQyxJQUFJLENBQUMsS0FBVTtRQUNYLElBQUksSUFBSSxHQUFHLElBQUksMEJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxFQUFVLEVBQUUsS0FBVTtRQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLDBCQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSwwQkFBMEIsRUFBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUVKLENBQUE7QUFoQm9CLG1CQUFtQjtJQUR2QyxzQkFBVSxFQUFFO0dBQ1EsbUJBQW1CLENBZ0J2QztrQkFoQm9CLG1CQUFtQiIsImZpbGUiOiJhcGktb3V0Ym91bmQvcmVwb3NpdG9yeS9pbXBsZW1lbnRhdGlvbi9vcmRlci5yZXBvc2l0b3J5aW1wbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPcmRlclJlcG9zaXRvcnkgZnJvbSBcIi4uL29yZGVyLnJlcG9zaXRvcnlcIjtcbmltcG9ydCB7IE9yZGVyRW50aXR5IH0gZnJvbSBcIi4uLy4uL2VudGl0eS9vcmRlci5lbnRpdHlcIjtcbmltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyUmVwb3NpdG9yeUltcGwgaW1wbGVtZW50cyBPcmRlclJlcG9zaXRvcnkge1xuICAgIFxuICAgIHNhdmUob3JkZXI6IGFueSk6IE51bWJlciB7XG4gICAgICAgIGxldCBkYXRhID0gbmV3IE9yZGVyRW50aXR5KG9yZGVyKTtcbiAgICAgICAgZGF0YS5zYXZlKCk7XG4gICAgICAgIHJldHVybiBkYXRhLl9pZDtcbiAgICB9XG5cbiAgICB1cGRhdGUoaWQ6IE51bWJlciwgb3JkZXI6IGFueSk6IGFueSB7XG4gICAgICAgIGxldCBkYXRhID0gbmV3IE9yZGVyRW50aXR5KG9yZGVyKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSwgaWQpO1xuICAgICAgICBsZXQgbmV3RGF0YSA9IGRhdGEudXBkYXRlKHtfaWQ6ICc1YmUzNDJjMGNiMmMyODMzNGJmNjY2ZTUnfSwgZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0RhdGEpO1xuICAgICAgICByZXR1cm4gZGF0YS51cGRhdGUoKTtcbiAgICB9XG5cbn0iXX0=
