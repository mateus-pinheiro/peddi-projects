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
let RestaurantAdapterOutbound = class RestaurantAdapterOutbound {
    constructor(restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }
    ;
    getById(id) {
        this.restaurantRepository.getByCloudId(id);
    }
};
RestaurantAdapterOutbound = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject('RestaurantRepository')),
    __metadata("design:paramtypes", [Object])
], RestaurantAdapterOutbound);
exports.default = RestaurantAdapterOutbound;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktb3V0Ym91bmQvYWRhcHRlci9yZXN0YXVyYW50Lm91dGJvdW5kLWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBK0M7QUFJL0MsSUFBcUIseUJBQXlCLEdBQTlDLE1BQXFCLHlCQUF5QjtJQUUxQyxZQUFvRCxvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUFJLENBQUM7SUFBQSxDQUFDO0lBRXBHLE9BQU8sQ0FBQyxFQUFVO1FBQ2QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBR0osQ0FBQTtBQVRvQix5QkFBeUI7SUFEN0Msc0JBQVUsRUFBRTtJQUdJLFdBQUEsa0JBQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBOztHQUYxQix5QkFBeUIsQ0FTN0M7a0JBVG9CLHlCQUF5QiIsImZpbGUiOiJhcGktb3V0Ym91bmQvYWRhcHRlci9yZXN0YXVyYW50Lm91dGJvdW5kLWFkYXB0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVzdGF1cmFudFBvcnRPdXRib3VuZCBmcm9tIFwiLi4vLi4vYXBpLWNvcmUvcG9ydC9vdXRib3VuZC9yZXN0YXVyYW50Lm91dGJvdW5kLXBvcnRcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCBSZXN0YXVyYW50UmVwb3NpdG9yeSBmcm9tIFwiLi4vcmVwb3NpdG9yeS9yZXN0YXVyYW50LnJlcG9zaXRvcnlcIjtcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdGF1cmFudEFkYXB0ZXJPdXRib3VuZCBpbXBsZW1lbnRzIFJlc3RhdXJhbnRQb3J0T3V0Ym91bmQge1xuXG4gICAgY29uc3RydWN0b3IoQGluamVjdCgnUmVzdGF1cmFudFJlcG9zaXRvcnknKSBwcml2YXRlIHJlc3RhdXJhbnRSZXBvc2l0b3J5OiBSZXN0YXVyYW50UmVwb3NpdG9yeSkgeyB9O1xuXG4gICAgZ2V0QnlJZChpZDogTnVtYmVyKSB7XG4gICAgICAgIHRoaXMucmVzdGF1cmFudFJlcG9zaXRvcnkuZ2V0QnlDbG91ZElkKGlkKTtcbiAgICB9XG5cblxufSJdfQ==
