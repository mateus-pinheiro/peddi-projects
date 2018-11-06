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
    insert(order) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktY29yZS9oYW5kbGVyL29yZGVyLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBK0M7QUFLL0MsSUFBcUIsWUFBWSxHQUFqQyxNQUFxQixZQUFZO0lBRTdCLFlBQWtELGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQUksQ0FBQztJQUUzRixHQUFHO1FBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxPQUFPLENBQUMsRUFBVTtRQUNkLDhDQUE4QztJQUNsRCxDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQWE7UUFDaEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQWE7UUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDSixDQUFBO0FBakJvQixZQUFZO0lBRGhDLHNCQUFVLEVBQUU7SUFHSyxXQUFBLGtCQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQTs7R0FGeEIsWUFBWSxDQWlCaEM7a0JBakJvQixZQUFZIiwiZmlsZSI6ImFwaS1jb3JlL2hhbmRsZXIvb3JkZXIuaGFuZGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCBPcmRlclBvcnRJbmJvdW5kIGZyb20gXCIuLi9wb3J0L2luYm91bmQvb3JkZXIuaW5ib3VuZC1wb3J0XCI7XG5pbXBvcnQgT3JkZXJQb3J0T3V0Ym91bmQgZnJvbSBcIi4uL3BvcnQvb3V0Ym91bmQvb3JkZXIub3V0Ym91bmQtcG9ydFwiXG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVySGFuZGxlciBpbXBsZW1lbnRzIE9yZGVyUG9ydEluYm91bmQge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCBAaW5qZWN0KFwiT3JkZXJQb3J0T3V0Ym91bmRcIikgcHJpdmF0ZSBvcmRlclBvcnRPdXRib3VuZDogT3JkZXJQb3J0T3V0Ym91bmQgKSB7fVxuICAgIFxuICAgIGdldCgpOiBTdHJpbmcge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgZ2V0QnlJZChpZDogTnVtYmVyKTogdm9pZCB7XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBpbnNlcnQob3JkZXI6IFN0cmluZyk6IE51bWJlciB7XG4gICAgICAgIHRoaXMub3JkZXJQb3J0T3V0Ym91bmQuc2F2ZSgpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9ICAgIFxuICAgIHVwZGF0ZShvcmRlcjogU3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbn0iXX0=
