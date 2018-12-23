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
    constructor(orderRepository, peddiCloudIntegration, epocIntegration) {
        this.orderRepository = orderRepository;
        this.peddiCloudIntegration = peddiCloudIntegration;
        this.epocIntegration = epocIntegration;
        this.tokenManager = new token_config_1.GeradorToken();
    }
    ;
    getById(id) {
        //it must makes a convert from model core to a dto;
        return this.orderRepository.getById(id);
    }
    sellItem(order) {
        let result;
        var setSys = () => {
            return this.epocIntegration.sistemaAuth();
        };
        result = this.epocIntegration.tokenGenerator(setSys).then((r) => {
            return r;
        });
        ;
        console.log(result);
        return result;
    }
    save(order) {
        return this.orderRepository.save(order);
    }
    update(id, order) {
        this.orderRepository.update(id, order);
    }
    send(order) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Chegou na camada outbound");
            // object to be authenticate
            let authenticateObject = {
                // restaurant_id_cloud: 1,
                // token: "P21v1I85uM"
                restaurant_id_cloud: order.restaurant_id,
                token: order
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
    __param(2, inversify_1.inject('EpocIntegrationPort')),
    __metadata("design:paramtypes", [Object, Object, Object])
], OrderAdapterOutbound);
exports.default = OrderAdapterOutbound;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktb3V0Ym91bmQvYWRhcHRlci9vcmRlci5vdXRib3VuZC1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBK0M7QUFLL0MsdURBQW9EO0FBS3BELElBQXFCLG9CQUFvQixHQUF6QyxNQUFxQixvQkFBb0I7SUFNckMsWUFDdUMsZUFBZ0MsRUFDdEIscUJBQWdELEVBQ3RELGVBQW9DO1FBRnhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUN0QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQTJCO1FBQ3RELG9CQUFlLEdBQWYsZUFBZSxDQUFxQjtRQUUzRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFBQSxDQUFDO0lBRUYsT0FBTyxDQUFDLEVBQVU7UUFDZCxtREFBbUQ7UUFDbkQsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsUUFBUSxDQUFFLEtBQWlCO1FBQ3ZCLElBQUksTUFBTSxDQUFDO1FBQ1gsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlDLENBQUMsQ0FBQztRQUVGLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUM1RCxPQUFPLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO1FBQUEsQ0FBQztRQUVKLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFpQjtRQUNsQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxNQUFNLENBQUMsRUFBVSxFQUFFLEtBQWlCO1FBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUssSUFBSSxDQUFDLEtBQWlCOztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDekMsNEJBQTRCO1lBQzVCLElBQUksa0JBQWtCLEdBQUc7Z0JBQ3JCLDBCQUEwQjtnQkFDMUIsc0JBQXNCO2dCQUN0QixtQkFBbUIsRUFBRSxLQUFLLENBQUMsYUFBYTtnQkFDeEMsS0FBSyxFQUFFLEtBQUs7YUFDZixDQUFBO1lBSUQsbUNBQW1DO1lBQ25DLDRDQUE0QztZQUU1QyxJQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDN0UsbUNBQW1DO1lBQ25DLHFDQUFxQztZQUVyQyxjQUFjO1lBQ2QsSUFBSSxrQkFBa0IsR0FBRyxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUMzRixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBRWhDLGdCQUFnQjtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUE7WUFDL0IsSUFBSSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3RGLE9BQU8sU0FBUyxDQUFDO1lBRWpCLG9DQUFvQztZQUlwQywrQ0FBK0M7UUFDbkQsQ0FBQztLQUFBO0NBRUosQ0FBQTtBQTdFb0Isb0JBQW9CO0lBRHhDLHNCQUFVLEVBQUU7SUFRSixXQUFBLGtCQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUN6QixXQUFBLGtCQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtJQUNuQyxXQUFBLGtCQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQTs7R0FUakIsb0JBQW9CLENBNkV4QztrQkE3RW9CLG9CQUFvQiIsImZpbGUiOiJhcGktb3V0Ym91bmQvYWRhcHRlci9vcmRlci5vdXRib3VuZC1hZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9yZGVyUG9ydE91dGJvdW5kIGZyb20gXCIuLi8uLi9hcGktY29yZS9wb3J0L291dGJvdW5kL29yZGVyLm91dGJvdW5kLXBvcnRcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCBPcmRlck1vZGVsIGZyb20gXCIuLi8uLi9hcGktY29yZS9jb21tb25zL21vZGVsL29yZGVyLm1vZGVsXCI7XG5cbmltcG9ydCBPcmRlclJlcG9zaXRvcnkgZnJvbSBcIi4uL3JlcG9zaXRvcnkvb3JkZXIucmVwb3NpdG9yeVwiO1xuaW1wb3J0IFBlZGRpQ2xvdWRJbnRlZ3JhdGlvblBvcnQgZnJvbSBcIi4uL2ludGVncmF0aW9uL2V4dGVybmFsLXBlZGRpLWFwaS9wZWRkaS1jbG91ZC5pbnRlZ3JhdGlvbi1wb3J0XCI7XG5pbXBvcnQgeyBHZXJhZG9yVG9rZW4gfSBmcm9tIFwiLi4vdXRpbC90b2tlbi1jb25maWdcIjtcbmltcG9ydCBFcG9jSW50ZWdyYXRpb25Qb3J0IGZyb20gXCIuLi9pbnRlZ3JhdGlvbi9lcG9jLWFwaS9lcG9jLmludGVncmF0aW9uLXBvcnRcIjtcbmltcG9ydCBSZXNwb25zZUVwb2MgZnJvbSBcIi4uL2VudmVsb3Blcy9yZXNwb25zZS5lcG9jXCI7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyQWRhcHRlck91dGJvdW5kIGltcGxlbWVudHMgT3JkZXJQb3J0T3V0Ym91bmQge1xuICBcblxuICAgIHByaXZhdGUgdG9rZW5NYW5hZ2VyOiBHZXJhZG9yVG9rZW47XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBAaW5qZWN0KCdPcmRlclJlcG9zaXRvcnknKSBwcml2YXRlIG9yZGVyUmVwb3NpdG9yeTogT3JkZXJSZXBvc2l0b3J5LFxuICAgICAgICBAaW5qZWN0KCdQZWRkaUNsb3VkSW50ZWdyYXRpb25Qb3J0JykgcHJpdmF0ZSBwZWRkaUNsb3VkSW50ZWdyYXRpb246IFBlZGRpQ2xvdWRJbnRlZ3JhdGlvblBvcnQsXG4gICAgICAgIEBpbmplY3QoJ0Vwb2NJbnRlZ3JhdGlvblBvcnQnKSBwcml2YXRlIGVwb2NJbnRlZ3JhdGlvbjogRXBvY0ludGVncmF0aW9uUG9ydFxuICAgICkge1xuICAgICAgICB0aGlzLnRva2VuTWFuYWdlciA9IG5ldyBHZXJhZG9yVG9rZW4oKTtcbiAgICB9O1xuXG4gICAgZ2V0QnlJZChpZDogU3RyaW5nKTogT3JkZXJNb2RlbCB7XG4gICAgICAgIC8vaXQgbXVzdCBtYWtlcyBhIGNvbnZlcnQgZnJvbSBtb2RlbCBjb3JlIHRvIGEgZHRvO1xuICAgICAgICByZXR1cm4gdGhpcy5vcmRlclJlcG9zaXRvcnkuZ2V0QnlJZChpZCk7XG4gICAgfVxuXG4gICAgc2VsbEl0ZW0gKG9yZGVyOiBPcmRlck1vZGVsKSA6IFByb21pc2U8UmVzcG9uc2VFcG9jPntcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdmFyIHNldFN5cyA9ICgpID0+ICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcG9jSW50ZWdyYXRpb24uc2lzdGVtYUF1dGgoKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHJlc3VsdCA9IHRoaXMuZXBvY0ludGVncmF0aW9uLnRva2VuR2VuZXJhdG9yKHNldFN5cykudGhlbigocikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH0pOztcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgc2F2ZShvcmRlcjogT3JkZXJNb2RlbCk6IE51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLm9yZGVyUmVwb3NpdG9yeS5zYXZlKG9yZGVyKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoaWQ6IFN0cmluZywgb3JkZXI6IE9yZGVyTW9kZWwpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcmRlclJlcG9zaXRvcnkudXBkYXRlKGlkLCBvcmRlcik7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VuZChvcmRlcjogT3JkZXJNb2RlbCk6IFByb21pc2U8T2JqZWN0PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2hlZ291IG5hIGNhbWFkYSBvdXRib3VuZFwiKTtcbiAgICAgICAgLy8gb2JqZWN0IHRvIGJlIGF1dGhlbnRpY2F0ZVxuICAgICAgICBsZXQgYXV0aGVudGljYXRlT2JqZWN0ID0ge1xuICAgICAgICAgICAgLy8gcmVzdGF1cmFudF9pZF9jbG91ZDogMSxcbiAgICAgICAgICAgIC8vIHRva2VuOiBcIlAyMXYxSTg1dU1cIlxuICAgICAgICAgICAgcmVzdGF1cmFudF9pZF9jbG91ZDogb3JkZXIucmVzdGF1cmFudF9pZCxcbiAgICAgICAgICAgIHRva2VuOiBvcmRlclxuICAgICAgICB9XG5cblxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGF1dGhlbnRpY2F0ZU9iamVjdCk7XG4gICAgICAgIC8vbWFrZSB0aGUgaGFzaCB0byBjbG91ZCBhcGkgYXV0aGVudGljYXRpb24gXG5cbiAgICAgICAgbGV0IGhhc2hUb0F1dGhlbnRpY2F0ZSA9IHRoaXMudG9rZW5NYW5hZ2VyLmdlbmVyYXRlVG9rZW4oYXV0aGVudGljYXRlT2JqZWN0KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaGFzaFRvQXV0aGVudGljYXRlKTtcbiAgICAgICAgLy8gY29uc3QgaGFzaFRvQXV0aGVudGljYXRlOiBTdHJpbmcgO1xuXG4gICAgICAgIC8vYXV0aGVudGljYXRlXG4gICAgICAgIGxldCB0b2tlbkF1dGhlbnRpY2F0ZWQgPSBhd2FpdCB0aGlzLnBlZGRpQ2xvdWRJbnRlZ3JhdGlvbi5hdXRoZW50aWNhdGUoaGFzaFRvQXV0aGVudGljYXRlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiByZXRvcm5hZG9cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRva2VuQXV0aGVudGljYXRlZCk7XG5cbiAgICAgICAgLy9zZW5kIHRoZSBvcmRlclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVudmlhbmRvIHBlZGlkbzpcIilcbiAgICAgICAgbGV0IHNlbnRPcmRlciA9IGF3YWl0IHRoaXMucGVkZGlDbG91ZEludGVncmF0aW9uLnNlbmRPcmRlcihvcmRlciwgdG9rZW5BdXRoZW50aWNhdGVkKTtcbiAgICAgICAgcmV0dXJuIHNlbnRPcmRlcjtcblxuICAgICAgICAvLyB0aGlzLm9yZGVyUmVwb3NpdG9yeS5zYXZlKG9yZGVyKTtcblxuXG5cbiAgICAgICAgLy8gdGhpcy5wZWRkaUNsb3VkSW50ZWdyYXRpb24uYXV0aGVudGljYXRpb24oKTtcbiAgICB9XG5cbn0iXX0=
