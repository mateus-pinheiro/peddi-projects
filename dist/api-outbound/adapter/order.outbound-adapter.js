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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const token_config_1 = require("../util/token-config");
let OrderAdapterOutbound = class OrderAdapterOutbound {
    constructor(orderRepository, peddiCloudIntegration) {
        this.orderRepository = orderRepository;
        this.peddiCloudIntegration = peddiCloudIntegration;
        this.tokenManager = new token_config_1.GeradorToken();
    }
    ;
    save(order) {
        return this.orderRepository.save(order);
        // return new OrderDTO();
    }
    update(id, order) {
        this.orderRepository.update(id, order);
    }
    send(order, restaurantIdCloud, restaurantToken) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Chegou na camada outbound");
            // object to be authenticate
            let authenticateObject = {
                restaurant_id_cloud: 1,
                token: "P21v1I85uM"
            };
            // console.log(authenticateObject);
            //make the hash to cloud api authentication 
            let hashToAuthenticate = this.tokenManager.generateToken(authenticateObject);
            // console.log(hashToAuthenticate);
            // const hashToAuthenticate: String ;
            //authenticate
            let tokenAuthenticated = yield this.peddiCloudIntegration.authenticate(hashToAuthenticate);
            console.log("token retornado");
            console.log(tokenAuthenticated);
            //send the order
            console.log("Enviando pedido:");
            let sentOrder = yield this.peddiCloudIntegration.sendOrder(order, tokenAuthenticated);
            return sentOrder;
            // this.orderRepository.save(order);
            // this.peddiCloudIntegration.authentication();
        });
    }
};
OrderAdapterOutbound = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject('OrderRepository')),
    __param(1, inversify_1.inject('PeddiCloudIntegrationPort')),
    __metadata("design:paramtypes", [Object, Object])
], OrderAdapterOutbound);
exports.default = OrderAdapterOutbound;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktb3V0Ym91bmQvYWRhcHRlci9vcmRlci5vdXRib3VuZC1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBK0M7QUFJL0MsdURBQW9EO0FBR3BELElBQXFCLG9CQUFvQixHQUF6QyxNQUFxQixvQkFBb0I7SUFLckMsWUFDdUMsZUFBZ0MsRUFDdEIscUJBQWdEO1FBRDFELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUN0QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQTJCO1FBRTdGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUFBLENBQUM7SUFFRixJQUFJLENBQUMsS0FBZTtRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLHlCQUF5QjtJQUM3QixDQUFDO0lBQ0QsTUFBTSxDQUFDLEVBQVUsRUFBRSxLQUFlO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUssSUFBSSxDQUFDLEtBQWUsRUFBRSxpQkFBeUIsRUFBRSxlQUF1Qjs7WUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ3pDLDRCQUE0QjtZQUM1QixJQUFJLGtCQUFrQixHQUFHO2dCQUNyQixtQkFBbUIsRUFBRyxDQUFDO2dCQUN2QixLQUFLLEVBQUUsWUFBWTthQUN0QixDQUFBO1lBSUQsbUNBQW1DO1lBQ25DLDRDQUE0QztZQUU1QyxJQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDN0UsbUNBQW1DO1lBQ25DLHFDQUFxQztZQUVyQyxjQUFjO1lBQ2QsSUFBSSxrQkFBa0IsR0FBRyxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUMzRixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBRWhDLGdCQUFnQjtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUE7WUFDL0IsSUFBSSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3RGLE9BQU8sU0FBUyxDQUFDO1lBRWpCLG9DQUFvQztZQUlwQywrQ0FBK0M7UUFDbkQsQ0FBQztLQUFBO0NBRUosQ0FBQTtBQXREb0Isb0JBQW9CO0lBRHhDLHNCQUFVLEVBQUU7SUFPSixXQUFBLGtCQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUN6QixXQUFBLGtCQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQTs7R0FQdkIsb0JBQW9CLENBc0R4QztrQkF0RG9CLG9CQUFvQiIsImZpbGUiOiJhcGktb3V0Ym91bmQvYWRhcHRlci9vcmRlci5vdXRib3VuZC1hZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9yZGVyUG9ydE91dGJvdW5kIGZyb20gXCIuLi8uLi9hcGktY29yZS9wb3J0L291dGJvdW5kL29yZGVyLm91dGJvdW5kLXBvcnRcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCBPcmRlckRUTyBmcm9tIFwiLi4vLi4vYXBpLWNvcmUvY29tbW9ucy9kdG8vb3JkZXIuZHRvXCI7XG5pbXBvcnQgT3JkZXJSZXBvc2l0b3J5IGZyb20gXCIuLi9yZXBvc2l0b3J5L29yZGVyLnJlcG9zaXRvcnlcIjtcbmltcG9ydCBQZWRkaUNsb3VkSW50ZWdyYXRpb25Qb3J0IGZyb20gXCIuLi9pbnRlZ3JhdGlvbi9leHRlcm5hbC1wZWRkaS1hcGkvcGVkZGktY2xvdWQuaW50ZWdyYXRpb24tcG9ydFwiO1xuaW1wb3J0IHsgR2VyYWRvclRva2VuIH0gZnJvbSBcIi4uL3V0aWwvdG9rZW4tY29uZmlnXCI7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyQWRhcHRlck91dGJvdW5kIGltcGxlbWVudHMgT3JkZXJQb3J0T3V0Ym91bmQge1xuXG4gICAgcHJpdmF0ZSB0b2tlbk1hbmFnZXIgOiBHZXJhZG9yVG9rZW47XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBAaW5qZWN0KCdPcmRlclJlcG9zaXRvcnknKSBwcml2YXRlIG9yZGVyUmVwb3NpdG9yeTogT3JkZXJSZXBvc2l0b3J5LFxuICAgICAgICBAaW5qZWN0KCdQZWRkaUNsb3VkSW50ZWdyYXRpb25Qb3J0JykgcHJpdmF0ZSBwZWRkaUNsb3VkSW50ZWdyYXRpb246IFBlZGRpQ2xvdWRJbnRlZ3JhdGlvblBvcnRcbiAgICApIHtcbiAgICAgICAgdGhpcy50b2tlbk1hbmFnZXIgPSBuZXcgR2VyYWRvclRva2VuKCk7XG4gICAgfTtcblxuICAgIHNhdmUob3JkZXI6IE9yZGVyRFRPKTogTnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJSZXBvc2l0b3J5LnNhdmUob3JkZXIpO1xuICAgICAgICAvLyByZXR1cm4gbmV3IE9yZGVyRFRPKCk7XG4gICAgfVxuICAgIHVwZGF0ZShpZDogTnVtYmVyLCBvcmRlcjogT3JkZXJEVE8pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcmRlclJlcG9zaXRvcnkudXBkYXRlKGlkLCBvcmRlcik7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VuZChvcmRlcjogT3JkZXJEVE8sIHJlc3RhdXJhbnRJZENsb3VkOiBOdW1iZXIsIHJlc3RhdXJhbnRUb2tlbjogU3RyaW5nKTogUHJvbWlzZTxPYmplY3Q+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGVnb3UgbmEgY2FtYWRhIG91dGJvdW5kXCIpO1xuICAgICAgICAvLyBvYmplY3QgdG8gYmUgYXV0aGVudGljYXRlXG4gICAgICAgIGxldCBhdXRoZW50aWNhdGVPYmplY3QgPSB7XG4gICAgICAgICAgICByZXN0YXVyYW50X2lkX2Nsb3VkIDogMSxcbiAgICAgICAgICAgIHRva2VuOiBcIlAyMXYxSTg1dU1cIlxuICAgICAgICB9XG5cblxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGF1dGhlbnRpY2F0ZU9iamVjdCk7XG4gICAgICAgIC8vbWFrZSB0aGUgaGFzaCB0byBjbG91ZCBhcGkgYXV0aGVudGljYXRpb24gXG4gICAgICAgIFxuICAgICAgICBsZXQgaGFzaFRvQXV0aGVudGljYXRlID0gdGhpcy50b2tlbk1hbmFnZXIuZ2VuZXJhdGVUb2tlbihhdXRoZW50aWNhdGVPYmplY3QpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhoYXNoVG9BdXRoZW50aWNhdGUpO1xuICAgICAgICAvLyBjb25zdCBoYXNoVG9BdXRoZW50aWNhdGU6IFN0cmluZyA7XG4gICAgICAgIFxuICAgICAgICAvL2F1dGhlbnRpY2F0ZVxuICAgICAgICBsZXQgdG9rZW5BdXRoZW50aWNhdGVkID0gYXdhaXQgdGhpcy5wZWRkaUNsb3VkSW50ZWdyYXRpb24uYXV0aGVudGljYXRlKGhhc2hUb0F1dGhlbnRpY2F0ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4gcmV0b3JuYWRvXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2tlbkF1dGhlbnRpY2F0ZWQpO1xuXG4gICAgICAgIC8vc2VuZCB0aGUgb3JkZXJcbiAgICAgICAgY29uc29sZS5sb2coXCJFbnZpYW5kbyBwZWRpZG86XCIpXG4gICAgICAgIGxldCBzZW50T3JkZXIgPSBhd2FpdCB0aGlzLnBlZGRpQ2xvdWRJbnRlZ3JhdGlvbi5zZW5kT3JkZXIob3JkZXIsIHRva2VuQXV0aGVudGljYXRlZCk7XG4gICAgICAgIHJldHVybiBzZW50T3JkZXI7XG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLm9yZGVyUmVwb3NpdG9yeS5zYXZlKG9yZGVyKTtcblxuXG5cbiAgICAgICAgLy8gdGhpcy5wZWRkaUNsb3VkSW50ZWdyYXRpb24uYXV0aGVudGljYXRpb24oKTtcbiAgICB9XG5cbn0iXX0=
