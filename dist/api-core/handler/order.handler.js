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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const order_model_1 = __importDefault(require("../commons/model/order.model"));
// import ResponseApi from "../commons/envelopes/response.model";
let OrderHandler = class OrderHandler {
    constructor(orderPortOutbound, restaurantPortOutbound) {
        this.orderPortOutbound = orderPortOutbound;
        this.restaurantPortOutbound = restaurantPortOutbound;
    }
    save(order) {
        let response = {
            //save and get the id value
            id: this.orderPortOutbound.save(order),
            //try to send the order to EPOC e wait for the response
            msg: Object()
        };
        this.orderPortOutbound.sellItem(order).then((r) => response.msg = r);
        console.log("Response Outbound:");
        console.log(response.msg);
        return response;
    }
    update(id, order) {
        this.orderPortOutbound.update(id, order);
    }
    send(id) {
        console.log("Chegou na camada core");
        // order : OrderDTO;
        let order = new order_model_1.default(this.orderPortOutbound.getById(id));
        let restaurantToken = "";
        //get restaurant infos to make the authenticate of peddi cloud api
        // restaurantToken = this.restaurantPortOutbound.getById(order.restaurant_id_cloud).hash;
        //tranfer order and restaurant infos from controller to the outside of the application
        this.orderPortOutbound.send(order, order.restaurant_id, restaurantToken);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktY29yZS9oYW5kbGVyL29yZGVyLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBK0M7QUFJL0MsK0VBQXNEO0FBQ3RELGlFQUFpRTtBQUdqRSxJQUFxQixZQUFZLEdBQWpDLE1BQXFCLFlBQVk7SUFHN0IsWUFFWSxpQkFBb0MsRUFFcEMsc0JBQThDO1FBRjlDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFcEMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUFJLENBQUM7SUFFL0QsSUFBSSxDQUFDLEtBQWlCO1FBR2xCLElBQUksUUFBUSxHQUFHO1lBQ1gsMkJBQTJCO1lBQzNCLEVBQUUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN0Qyx1REFBdUQ7WUFDdkQsR0FBRyxFQUFFLE1BQU0sRUFBRTtTQUNoQixDQUFDO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxNQUFNLENBQUMsRUFBVSxFQUFFLEtBQWlCO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxJQUFJLENBQUMsRUFBVTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUVyQyxvQkFBb0I7UUFDcEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxxQkFBVSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUvRCxJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDekIsa0VBQWtFO1FBQ2xFLHlGQUF5RjtRQUV6RixzRkFBc0Y7UUFDdEYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUV6RSx1QkFBdUI7UUFDdkIsc0NBQXNDO1FBQ3RDLDhDQUE4QztJQUNsRCxDQUFDO0lBRUQsR0FBRztRQUNDLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsT0FBTyxDQUFDLEVBQVU7UUFDZCw4Q0FBOEM7SUFDbEQsQ0FBQztDQUdKLENBQUE7QUF6RG9CLFlBQVk7SUFEaEMsc0JBQVUsRUFBRTtJQUtKLFdBQUEsa0JBQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0lBRTNCLFdBQUEsa0JBQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBOztHQU5wQixZQUFZLENBeURoQztrQkF6RG9CLFlBQVkiLCJmaWxlIjoiYXBpLWNvcmUvaGFuZGxlci9vcmRlci5oYW5kbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IE9yZGVyUG9ydEluYm91bmQgZnJvbSBcIi4uL3BvcnQvaW5ib3VuZC9vcmRlci5pbmJvdW5kLXBvcnRcIjtcbmltcG9ydCBPcmRlclBvcnRPdXRib3VuZCBmcm9tIFwiLi4vcG9ydC9vdXRib3VuZC9vcmRlci5vdXRib3VuZC1wb3J0XCJcbmltcG9ydCBSZXN0YXVyYW50UG9ydE91dGJvdW5kIGZyb20gXCIuLi9wb3J0L291dGJvdW5kL3Jlc3RhdXJhbnQub3V0Ym91bmQtcG9ydFwiXG5pbXBvcnQgT3JkZXJNb2RlbCBmcm9tIFwiLi4vY29tbW9ucy9tb2RlbC9vcmRlci5tb2RlbFwiO1xuLy8gaW1wb3J0IFJlc3BvbnNlQXBpIGZyb20gXCIuLi9jb21tb25zL2VudmVsb3Blcy9yZXNwb25zZS5tb2RlbFwiO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckhhbmRsZXIgaW1wbGVtZW50cyBPcmRlclBvcnRJbmJvdW5kIHtcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBpbmplY3QoXCJPcmRlclBvcnRPdXRib3VuZFwiKVxuICAgICAgICBwcml2YXRlIG9yZGVyUG9ydE91dGJvdW5kOiBPcmRlclBvcnRPdXRib3VuZCxcbiAgICAgICAgQGluamVjdChcIlJlc3RhdXJhbnRQb3J0T3V0Ym91bmRcIilcbiAgICAgICAgcHJpdmF0ZSByZXN0YXVyYW50UG9ydE91dGJvdW5kOiBSZXN0YXVyYW50UG9ydE91dGJvdW5kKSB7IH1cblxuICAgIHNhdmUob3JkZXI6IE9yZGVyTW9kZWwpOiBhbnkge1xuXG4gICAgICAgIFxuICAgICAgICBsZXQgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAvL3NhdmUgYW5kIGdldCB0aGUgaWQgdmFsdWVcbiAgICAgICAgICAgIGlkOiB0aGlzLm9yZGVyUG9ydE91dGJvdW5kLnNhdmUob3JkZXIpLFxuICAgICAgICAgICAgLy90cnkgdG8gc2VuZCB0aGUgb3JkZXIgdG8gRVBPQyBlIHdhaXQgZm9yIHRoZSByZXNwb25zZVxuICAgICAgICAgICAgbXNnOiBPYmplY3QoKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9yZGVyUG9ydE91dGJvdW5kLnNlbGxJdGVtKG9yZGVyKS50aGVuKChyKSA9PiByZXNwb25zZS5tc2cgPSByKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnNlIE91dGJvdW5kOlwiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UubXNnKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG5cbiAgICB1cGRhdGUoaWQ6IFN0cmluZywgb3JkZXI6IE9yZGVyTW9kZWwpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcmRlclBvcnRPdXRib3VuZC51cGRhdGUoaWQsIG9yZGVyKTtcbiAgICB9XG5cbiAgICBzZW5kKGlkOiBTdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGVnb3UgbmEgY2FtYWRhIGNvcmVcIik7XG5cbiAgICAgICAgLy8gb3JkZXIgOiBPcmRlckRUTztcbiAgICAgICAgbGV0IG9yZGVyID0gbmV3IE9yZGVyTW9kZWwodGhpcy5vcmRlclBvcnRPdXRib3VuZC5nZXRCeUlkKGlkKSk7XG5cbiAgICAgICAgbGV0IHJlc3RhdXJhbnRUb2tlbiA9IFwiXCI7XG4gICAgICAgIC8vZ2V0IHJlc3RhdXJhbnQgaW5mb3MgdG8gbWFrZSB0aGUgYXV0aGVudGljYXRlIG9mIHBlZGRpIGNsb3VkIGFwaVxuICAgICAgICAvLyByZXN0YXVyYW50VG9rZW4gPSB0aGlzLnJlc3RhdXJhbnRQb3J0T3V0Ym91bmQuZ2V0QnlJZChvcmRlci5yZXN0YXVyYW50X2lkX2Nsb3VkKS5oYXNoO1xuXG4gICAgICAgIC8vdHJhbmZlciBvcmRlciBhbmQgcmVzdGF1cmFudCBpbmZvcyBmcm9tIGNvbnRyb2xsZXIgdG8gdGhlIG91dHNpZGUgb2YgdGhlIGFwcGxpY2F0aW9uXG4gICAgICAgIHRoaXMub3JkZXJQb3J0T3V0Ym91bmQuc2VuZChvcmRlciwgb3JkZXIucmVzdGF1cmFudF9pZCwgcmVzdGF1cmFudFRva2VuKTtcblxuICAgICAgICAvLyByZXR1cm4gbmV3IE51bWJlcigpO1xuICAgICAgICAvLyB0aGlzLm9yZGVyUG9ydE91dGJvdW5kLnNhdmUob3JkZXIpO1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG5cbiAgICBnZXQoKTogQXJyYXk8T3JkZXJNb2RlbD4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG5cbiAgICBnZXRCeUlkKGlkOiBOdW1iZXIpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuXG5cbn0iXX0=
