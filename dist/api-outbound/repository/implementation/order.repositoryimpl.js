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
        // let data = new OrderEntity(order);
        order_entity_1.OrderEntity.findById(id, function (err, doc) {
            if (err) {
                console.error('error, no entry found');
            }
            doc.products = order.products;
            console.log(doc);
            console.log(order);
            doc.save();
        });
        return order.update();
        // console.log(data, id);
        // let newData = data.update({"_id": "ObjectId(" + id + ")"}, {"table": data.table});
        // console.log(newData);
        // return data.update();
    }
};
OrderRepositoryImpl = __decorate([
    inversify_1.injectable()
], OrderRepositoryImpl);
exports.default = OrderRepositoryImpl;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktb3V0Ym91bmQvcmVwb3NpdG9yeS9pbXBsZW1lbnRhdGlvbi9vcmRlci5yZXBvc2l0b3J5aW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBLDREQUF3RDtBQUN4RCx5Q0FBdUM7QUFHdkMsSUFBcUIsbUJBQW1CLEdBQXhDLE1BQXFCLG1CQUFtQjtJQUVwQyxJQUFJLENBQUMsS0FBVTtRQUNYLElBQUksSUFBSSxHQUFHLElBQUksMEJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxFQUFVLEVBQUUsS0FBVTtRQUV6QixxQ0FBcUM7UUFFckMsMEJBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFVBQVMsR0FBVSxFQUFFLEdBQVE7WUFDbEQsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2FBQ3hDO1lBQ0QsR0FBRyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQTtRQUNKLE9BQU8sS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRXRCLHlCQUF5QjtRQUN6QixxRkFBcUY7UUFDckYsd0JBQXdCO1FBQ3hCLHdCQUF3QjtJQUM1QixDQUFDO0NBRUosQ0FBQTtBQTdCb0IsbUJBQW1CO0lBRHZDLHNCQUFVLEVBQUU7R0FDUSxtQkFBbUIsQ0E2QnZDO2tCQTdCb0IsbUJBQW1CIiwiZmlsZSI6ImFwaS1vdXRib3VuZC9yZXBvc2l0b3J5L2ltcGxlbWVudGF0aW9uL29yZGVyLnJlcG9zaXRvcnlpbXBsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9yZGVyUmVwb3NpdG9yeSBmcm9tIFwiLi4vb3JkZXIucmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgT3JkZXJFbnRpdHkgfSBmcm9tIFwiLi4vLi4vZW50aXR5L29yZGVyLmVudGl0eVwiO1xuaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gXCJpbnZlcnNpZnlcIjtcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJSZXBvc2l0b3J5SW1wbCBpbXBsZW1lbnRzIE9yZGVyUmVwb3NpdG9yeSB7XG4gICAgXG4gICAgc2F2ZShvcmRlcjogYW55KTogTnVtYmVyIHtcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgT3JkZXJFbnRpdHkob3JkZXIpO1xuICAgICAgICBkYXRhLnNhdmUoKTtcbiAgICAgICAgcmV0dXJuIGRhdGEuX2lkO1xuICAgIH1cblxuICAgIHVwZGF0ZShpZDogTnVtYmVyLCBvcmRlcjogYW55KTogYW55IHtcblxuICAgICAgICAvLyBsZXQgZGF0YSA9IG5ldyBPcmRlckVudGl0eShvcmRlcik7XG5cbiAgICAgICAgT3JkZXJFbnRpdHkuZmluZEJ5SWQoaWQsIGZ1bmN0aW9uKGVycjogRXJyb3IsIGRvYzogYW55KSB7ICBcbiAgICAgICAgICAgIGlmIChlcnIpIHsgIFxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdlcnJvciwgbm8gZW50cnkgZm91bmQnKTsgIFxuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICBkb2MucHJvZHVjdHMgPSBvcmRlci5wcm9kdWN0czsgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coZG9jKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9yZGVyKTtcbiAgICAgICAgICAgIGRvYy5zYXZlKCk7ICBcbiAgICAgICAgICB9KSAgXG4gICAgICAgIHJldHVybiBvcmRlci51cGRhdGUoKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLCBpZCk7XG4gICAgICAgIC8vIGxldCBuZXdEYXRhID0gZGF0YS51cGRhdGUoe1wiX2lkXCI6IFwiT2JqZWN0SWQoXCIgKyBpZCArIFwiKVwifSwge1widGFibGVcIjogZGF0YS50YWJsZX0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdEYXRhKTtcbiAgICAgICAgLy8gcmV0dXJuIGRhdGEudXBkYXRlKCk7XG4gICAgfVxuXG59Il19
