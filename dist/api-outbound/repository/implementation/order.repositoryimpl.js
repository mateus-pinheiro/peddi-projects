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
    getById(id) {
        let order;
        order_entity_1.OrderEntity.findById(id).then(resolve => order = resolve);
        console.log("Order buscada para envio: " + order);
        return order;
    }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktb3V0Ym91bmQvcmVwb3NpdG9yeS9pbXBsZW1lbnRhdGlvbi9vcmRlci5yZXBvc2l0b3J5aW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBLDREQUF3RDtBQUN4RCx5Q0FBdUM7QUFJdkMsSUFBcUIsbUJBQW1CLEdBQXhDLE1BQXFCLG1CQUFtQjtJQUVwQyxPQUFPLENBQUMsRUFBVTtRQUNkLElBQUksS0FBSyxDQUFDO1FBQ1YsMEJBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFFbEQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFVO1FBQ1gsSUFBSSxJQUFJLEdBQUcsSUFBSSwwQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQVUsRUFBRSxLQUFVO1FBRXpCLHFDQUFxQztRQUVyQywwQkFBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsVUFBUyxHQUFVLEVBQUUsR0FBUTtZQUNsRCxJQUFJLEdBQUcsRUFBRTtnQkFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7YUFDeEM7WUFDRCxHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFBO1FBQ0osT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFdEIseUJBQXlCO1FBQ3pCLHFGQUFxRjtRQUNyRix3QkFBd0I7UUFDeEIsd0JBQXdCO0lBQzVCLENBQUM7Q0FJSixDQUFBO0FBdkNvQixtQkFBbUI7SUFEdkMsc0JBQVUsRUFBRTtHQUNRLG1CQUFtQixDQXVDdkM7a0JBdkNvQixtQkFBbUIiLCJmaWxlIjoiYXBpLW91dGJvdW5kL3JlcG9zaXRvcnkvaW1wbGVtZW50YXRpb24vb3JkZXIucmVwb3NpdG9yeWltcGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3JkZXJSZXBvc2l0b3J5IGZyb20gXCIuLi9vcmRlci5yZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBPcmRlckVudGl0eSB9IGZyb20gXCIuLi8uLi9lbnRpdHkvb3JkZXIuZW50aXR5XCI7XG5pbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyUmVwb3NpdG9yeUltcGwgaW1wbGVtZW50cyBPcmRlclJlcG9zaXRvcnkge1xuICAgIFxuICAgIGdldEJ5SWQoaWQ6IFN0cmluZyk6IGFueSB7XG4gICAgICAgIGxldCBvcmRlcjtcbiAgICAgICAgT3JkZXJFbnRpdHkuZmluZEJ5SWQoaWQpLnRoZW4ocmVzb2x2ZSA9PiBvcmRlciA9IHJlc29sdmUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9yZGVyIGJ1c2NhZGEgcGFyYSBlbnZpbzogXCIgKyBvcmRlcik7XG5cbiAgICAgICAgcmV0dXJuIG9yZGVyO1xuICAgIH1cbiAgICBcbiAgICBzYXZlKG9yZGVyOiBhbnkpOiBOdW1iZXIge1xuICAgICAgICBsZXQgZGF0YSA9IG5ldyBPcmRlckVudGl0eShvcmRlcik7XG4gICAgICAgIGRhdGEuc2F2ZSgpO1xuICAgICAgICByZXR1cm4gZGF0YS5faWQ7XG4gICAgfVxuXG4gICAgdXBkYXRlKGlkOiBTdHJpbmcsIG9yZGVyOiBhbnkpOiBhbnkge1xuXG4gICAgICAgIC8vIGxldCBkYXRhID0gbmV3IE9yZGVyRW50aXR5KG9yZGVyKTtcblxuICAgICAgICBPcmRlckVudGl0eS5maW5kQnlJZChpZCwgZnVuY3Rpb24oZXJyOiBFcnJvciwgZG9jOiBhbnkpIHsgIFxuICAgICAgICAgICAgaWYgKGVycikgeyAgXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yLCBubyBlbnRyeSBmb3VuZCcpOyAgXG4gICAgICAgICAgICB9ICBcbiAgICAgICAgICAgIGRvYy5wcm9kdWN0cyA9IG9yZGVyLnByb2R1Y3RzOyAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkb2MpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cob3JkZXIpO1xuICAgICAgICAgICAgZG9jLnNhdmUoKTsgIFxuICAgICAgICAgIH0pICBcbiAgICAgICAgcmV0dXJuIG9yZGVyLnVwZGF0ZSgpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEsIGlkKTtcbiAgICAgICAgLy8gbGV0IG5ld0RhdGEgPSBkYXRhLnVwZGF0ZSh7XCJfaWRcIjogXCJPYmplY3RJZChcIiArIGlkICsgXCIpXCJ9LCB7XCJ0YWJsZVwiOiBkYXRhLnRhYmxlfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0RhdGEpO1xuICAgICAgICAvLyByZXR1cm4gZGF0YS51cGRhdGUoKTtcbiAgICB9XG5cblxuXG59Il19
