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
    constructor(orderPortOutbound) {
        this.orderPortOutbound = orderPortOutbound;
    }
    get() {
        throw new Error("Method not implemented.");
    }
    getById(id) {
        // throw new Error("Method not implemented.");
    }
    send(order) {
        this.orderPortOutbound.save();
        throw new Error("Method not implemented.");
    }
    update(order) {
        throw new Error("Method not implemented.");
    }
};
OrderHandler = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject("OrderPortOutbound")),
    __metadata("design:paramtypes", [Object])
], OrderHandler);
exports.default = OrderHandler;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktY29yZS9oYW5kbGVyL29yZGVyLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBK0M7QUFLL0MsSUFBcUIsWUFBWSxHQUFqQyxNQUFxQixZQUFZO0lBRTdCLFlBQWtELGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQUksQ0FBQztJQUUzRixHQUFHO1FBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxPQUFPLENBQUMsRUFBVTtRQUNkLDhDQUE4QztJQUNsRCxDQUFDO0lBQ0QsSUFBSSxDQUFDLEtBQWE7UUFDZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxNQUFNLENBQUMsS0FBYTtRQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUNKLENBQUE7QUFqQm9CLFlBQVk7SUFEaEMsc0JBQVUsRUFBRTtJQUdLLFdBQUEsa0JBQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBOztHQUZ4QixZQUFZLENBaUJoQztrQkFqQm9CLFlBQVkiLCJmaWxlIjoiYXBpLWNvcmUvaGFuZGxlci9vcmRlci5oYW5kbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IE9yZGVyUG9ydEluYm91bmQgZnJvbSBcIi4uL3BvcnQvaW5ib3VuZC9vcmRlci5pbmJvdW5kLXBvcnRcIjtcbmltcG9ydCBPcmRlclBvcnRPdXRib3VuZCBmcm9tIFwiLi4vcG9ydC9vdXRib3VuZC9vcmRlci5vdXRib3VuZC1wb3J0XCJcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJIYW5kbGVyIGltcGxlbWVudHMgT3JkZXJQb3J0SW5ib3VuZCB7XG4gICAgXG4gICAgY29uc3RydWN0b3IoIEBpbmplY3QoXCJPcmRlclBvcnRPdXRib3VuZFwiKSBwcml2YXRlIG9yZGVyUG9ydE91dGJvdW5kOiBPcmRlclBvcnRPdXRib3VuZCApIHt9XG4gICAgXG4gICAgZ2V0KCk6IFN0cmluZyB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBnZXRCeUlkKGlkOiBOdW1iZXIpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHNlbmQob3JkZXI6IFN0cmluZyk6IE51bWJlciB7XG4gICAgICAgIHRoaXMub3JkZXJQb3J0T3V0Ym91bmQuc2F2ZSgpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9ICAgIFxuICAgIHVwZGF0ZShvcmRlcjogU3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbn0iXX0=
