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
let OrderAdapterOutbound = class OrderAdapterOutbound {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    ;
    save(order) {
        return this.orderRepository.save(order);
        // return new OrderDTO();
    }
    update(id, order) {
        this.orderRepository.save(order);
    }
};
OrderAdapterOutbound = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject('OrderRepository')),
    __metadata("design:paramtypes", [Object])
], OrderAdapterOutbound);
exports.default = OrderAdapterOutbound;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktb3V0Ym91bmQvYWRhcHRlci9vcmRlci5vdXRib3VuZC1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUNBQStDO0FBSy9DLElBQXFCLG9CQUFvQixHQUF6QyxNQUFxQixvQkFBb0I7SUFFckMsWUFBK0MsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUcsQ0FBQztJQUFBLENBQUM7SUFFcEYsSUFBSSxDQUFDLEtBQWU7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4Qyx5QkFBeUI7SUFDN0IsQ0FBQztJQUNELE1BQU0sQ0FBQyxFQUFVLEVBQUUsS0FBZTtRQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBRUosQ0FBQTtBQVpvQixvQkFBb0I7SUFEeEMsc0JBQVUsRUFBRTtJQUdJLFdBQUEsa0JBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBOztHQUZyQixvQkFBb0IsQ0FZeEM7a0JBWm9CLG9CQUFvQiIsImZpbGUiOiJhcGktb3V0Ym91bmQvYWRhcHRlci9vcmRlci5vdXRib3VuZC1hZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9yZGVyUG9ydE91dGJvdW5kIGZyb20gXCIuLi8uLi9hcGktY29yZS9wb3J0L291dGJvdW5kL29yZGVyLm91dGJvdW5kLXBvcnRcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCBPcmRlckRUTyBmcm9tIFwiLi4vLi4vYXBpLWNvcmUvY29tbW9ucy9kdG8vb3JkZXIuZHRvXCI7XG5pbXBvcnQgT3JkZXJSZXBvc2l0b3J5IGZyb20gXCIuLi9yZXBvc2l0b3J5L29yZGVyLnJlcG9zaXRvcnlcIjtcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJBZGFwdGVyT3V0Ym91bmQgaW1wbGVtZW50cyBPcmRlclBvcnRPdXRib3VuZCB7XG4gICAgXG4gICAgY29uc3RydWN0b3IoQGluamVjdCgnT3JkZXJSZXBvc2l0b3J5JykgcHJpdmF0ZSBvcmRlclJlcG9zaXRvcnk6IE9yZGVyUmVwb3NpdG9yeSkge307XG4gICAgXG4gICAgc2F2ZShvcmRlcjogT3JkZXJEVE8pIDogTnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJSZXBvc2l0b3J5LnNhdmUob3JkZXIpO1xuICAgICAgICAvLyByZXR1cm4gbmV3IE9yZGVyRFRPKCk7XG4gICAgfVxuICAgIHVwZGF0ZShpZDogTnVtYmVyLCBvcmRlcjogT3JkZXJEVE8pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcmRlclJlcG9zaXRvcnkuc2F2ZShvcmRlcik7XG4gICAgfVxuICAgIFxufSJdfQ==
