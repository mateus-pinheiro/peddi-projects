"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
let OrderHandler = class OrderHandler {
    constructor(orderPortOutbound, restaurantPortOutbound) {
        this.orderPortOutbound = orderPortOutbound;
        this.restaurantPortOutbound = restaurantPortOutbound;
    }
    save(order) {
        //send the order to EPOC (manager system of restaurant)
        //treat the return and see if everithing was send
        //save on local database
        return this.orderPortOutbound.save(order);
    }
    update(id, order) {
        this.orderPortOutbound.update(id, order);
    }
    send(order) {
        console.log("Chegou na camada core");
        let restaurantToken = "";
        //get restaurant infos to make the authenticate of peddi cloud api
        // restaurantToken = this.restaurantPortOutbound.getById(order.restaurant_id_cloud).hash;
        //tranfer order and restaurant infos from controller to the outside of the application
        this.orderPortOutbound.send(order, order.restaurant_id_cloud, restaurantToken);
        // return new Number();
        // this.orderPortOutbound.save(order);
        // throw new Error("Method not implemented.");
    }
    get() {
        throw new Error("Method not implemented.");
    }
    getById(id) {
        // throw new Error("Method not implemented.");
    }
};
OrderHandler = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject("OrderPortOutbound")),
    __param(1, inversify_1.inject("RestaurantPortOutbound")),
    __metadata("design:paramtypes", [Object, Object])
], OrderHandler);
exports.default = OrderHandler;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktY29yZS9oYW5kbGVyL29yZGVyLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBK0M7QUFPL0MsSUFBcUIsWUFBWSxHQUFqQyxNQUFxQixZQUFZO0lBRzdCLFlBRVksaUJBQW9DLEVBRXBDLHNCQUE4QztRQUY5QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRXBDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFBSSxDQUFDO0lBRS9ELElBQUksQ0FBQyxLQUFlO1FBRWhCLHVEQUF1RDtRQUV2RCxpREFBaUQ7UUFFakQsd0JBQXdCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsTUFBTSxDQUFDLEVBQVUsRUFBRSxLQUFlO1FBQzlCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxJQUFJLENBQUMsS0FBZTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDckMsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLGtFQUFrRTtRQUNsRSx5RkFBeUY7UUFFekYsc0ZBQXNGO1FBQ3RGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUUvRSx1QkFBdUI7UUFDdkIsc0NBQXNDO1FBQ3RDLDhDQUE4QztJQUNsRCxDQUFDO0lBRUQsR0FBRztRQUNDLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsT0FBTyxDQUFDLEVBQVU7UUFDZCw4Q0FBOEM7SUFDbEQsQ0FBQztDQUdKLENBQUE7QUEzQ29CLFlBQVk7SUFEaEMsc0JBQVUsRUFBRTtJQUtKLFdBQUEsa0JBQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0lBRTNCLFdBQUEsa0JBQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBOztHQU5wQixZQUFZLENBMkNoQztrQkEzQ29CLFlBQVkiLCJmaWxlIjoiYXBpLWNvcmUvaGFuZGxlci9vcmRlci5oYW5kbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IE9yZGVyUG9ydEluYm91bmQgZnJvbSBcIi4uL3BvcnQvaW5ib3VuZC9vcmRlci5pbmJvdW5kLXBvcnRcIjtcbmltcG9ydCBPcmRlclBvcnRPdXRib3VuZCBmcm9tIFwiLi4vcG9ydC9vdXRib3VuZC9vcmRlci5vdXRib3VuZC1wb3J0XCJcbmltcG9ydCBSZXN0YXVyYW50UG9ydE91dGJvdW5kIGZyb20gXCIuLi9wb3J0L291dGJvdW5kL3Jlc3RhdXJhbnQub3V0Ym91bmQtcG9ydFwiXG5pbXBvcnQgT3JkZXJEVE8gZnJvbSBcIi4uL2NvbW1vbnMvZHRvL29yZGVyLmR0b1wiO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckhhbmRsZXIgaW1wbGVtZW50cyBPcmRlclBvcnRJbmJvdW5kIHtcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBpbmplY3QoXCJPcmRlclBvcnRPdXRib3VuZFwiKVxuICAgICAgICBwcml2YXRlIG9yZGVyUG9ydE91dGJvdW5kOiBPcmRlclBvcnRPdXRib3VuZCxcbiAgICAgICAgQGluamVjdChcIlJlc3RhdXJhbnRQb3J0T3V0Ym91bmRcIilcbiAgICAgICAgcHJpdmF0ZSByZXN0YXVyYW50UG9ydE91dGJvdW5kOiBSZXN0YXVyYW50UG9ydE91dGJvdW5kKSB7IH1cblxuICAgIHNhdmUob3JkZXI6IE9yZGVyRFRPKTogTnVtYmVyIHtcblxuICAgICAgICAvL3NlbmQgdGhlIG9yZGVyIHRvIEVQT0MgKG1hbmFnZXIgc3lzdGVtIG9mIHJlc3RhdXJhbnQpXG5cbiAgICAgICAgLy90cmVhdCB0aGUgcmV0dXJuIGFuZCBzZWUgaWYgZXZlcml0aGluZyB3YXMgc2VuZFxuXG4gICAgICAgIC8vc2F2ZSBvbiBsb2NhbCBkYXRhYmFzZVxuICAgICAgICByZXR1cm4gdGhpcy5vcmRlclBvcnRPdXRib3VuZC5zYXZlKG9yZGVyKTtcbiAgICB9XG4gICAgdXBkYXRlKGlkOiBOdW1iZXIsIG9yZGVyOiBPcmRlckRUTyk6IHZvaWQge1xuICAgICAgICB0aGlzLm9yZGVyUG9ydE91dGJvdW5kLnVwZGF0ZShpZCwgb3JkZXIpO1xuICAgIH1cbiAgICBzZW5kKG9yZGVyOiBPcmRlckRUTyk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNoZWdvdSBuYSBjYW1hZGEgY29yZVwiKTtcbiAgICAgICAgbGV0IHJlc3RhdXJhbnRUb2tlbiA9IFwiXCI7XG4gICAgICAgIC8vZ2V0IHJlc3RhdXJhbnQgaW5mb3MgdG8gbWFrZSB0aGUgYXV0aGVudGljYXRlIG9mIHBlZGRpIGNsb3VkIGFwaVxuICAgICAgICAvLyByZXN0YXVyYW50VG9rZW4gPSB0aGlzLnJlc3RhdXJhbnRQb3J0T3V0Ym91bmQuZ2V0QnlJZChvcmRlci5yZXN0YXVyYW50X2lkX2Nsb3VkKS5oYXNoO1xuICAgICAgICBcbiAgICAgICAgLy90cmFuZmVyIG9yZGVyIGFuZCByZXN0YXVyYW50IGluZm9zIGZyb20gY29udHJvbGxlciB0byB0aGUgb3V0c2lkZSBvZiB0aGUgYXBwbGljYXRpb25cbiAgICAgICAgdGhpcy5vcmRlclBvcnRPdXRib3VuZC5zZW5kKG9yZGVyLCBvcmRlci5yZXN0YXVyYW50X2lkX2Nsb3VkLCByZXN0YXVyYW50VG9rZW4pO1xuXG4gICAgICAgIC8vIHJldHVybiBuZXcgTnVtYmVyKCk7XG4gICAgICAgIC8vIHRoaXMub3JkZXJQb3J0T3V0Ym91bmQuc2F2ZShvcmRlcik7XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxuICAgIGdldCgpOiBBcnJheTxPcmRlckRUTz4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgZ2V0QnlJZChpZDogTnVtYmVyKTogdm9pZCB7XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxuXG59Il19
