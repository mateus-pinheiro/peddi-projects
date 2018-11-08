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
    save(order) {
        return this.orderPortOutbound.save(order);
    }
    update(id, order) {
        this.orderPortOutbound.update(id, order);
    }
    send(order) {
        this.orderPortOutbound.save(order);
        throw new Error("Method not implemented.");
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
    __metadata("design:paramtypes", [Object])
], OrderHandler);
exports.default = OrderHandler;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktY29yZS9oYW5kbGVyL29yZGVyLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBK0M7QUFNL0MsSUFBcUIsWUFBWSxHQUFqQyxNQUFxQixZQUFZO0lBRzdCLFlBRVksaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBSSxDQUFDO0lBRXJELElBQUksQ0FBQyxLQUFlO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsTUFBTSxDQUFDLEVBQVUsRUFBRSxLQUFlO1FBQzlCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxJQUFJLENBQUMsS0FBZTtRQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsR0FBRztRQUNDLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsT0FBTyxDQUFDLEVBQVU7UUFDZCw4Q0FBOEM7SUFDbEQsQ0FBQztDQUdKLENBQUE7QUExQm9CLFlBQVk7SUFEaEMsc0JBQVUsRUFBRTtJQUtKLFdBQUEsa0JBQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBOztHQUpmLFlBQVksQ0EwQmhDO2tCQTFCb0IsWUFBWSIsImZpbGUiOiJhcGktY29yZS9oYW5kbGVyL29yZGVyLmhhbmRsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgT3JkZXJQb3J0SW5ib3VuZCBmcm9tIFwiLi4vcG9ydC9pbmJvdW5kL29yZGVyLmluYm91bmQtcG9ydFwiO1xuaW1wb3J0IE9yZGVyUG9ydE91dGJvdW5kIGZyb20gXCIuLi9wb3J0L291dGJvdW5kL29yZGVyLm91dGJvdW5kLXBvcnRcIlxuaW1wb3J0IE9yZGVyRFRPIGZyb20gXCIuLi9jb21tb25zL2R0by9vcmRlci5kdG9cIjtcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJIYW5kbGVyIGltcGxlbWVudHMgT3JkZXJQb3J0SW5ib3VuZCB7XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBAaW5qZWN0KFwiT3JkZXJQb3J0T3V0Ym91bmRcIilcbiAgICAgICAgcHJpdmF0ZSBvcmRlclBvcnRPdXRib3VuZDogT3JkZXJQb3J0T3V0Ym91bmQpIHsgfVxuXG4gICAgc2F2ZShvcmRlcjogT3JkZXJEVE8pOiBOdW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmRlclBvcnRPdXRib3VuZC5zYXZlKG9yZGVyKTtcbiAgICB9XG4gICAgdXBkYXRlKGlkOiBOdW1iZXIsIG9yZGVyOiBPcmRlckRUTyk6IHZvaWQge1xuICAgICAgICB0aGlzLm9yZGVyUG9ydE91dGJvdW5kLnVwZGF0ZShpZCwgb3JkZXIpO1xuICAgIH1cbiAgICBzZW5kKG9yZGVyOiBPcmRlckRUTyk6IE51bWJlciB7XG4gICAgICAgIHRoaXMub3JkZXJQb3J0T3V0Ym91bmQuc2F2ZShvcmRlcik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxuICAgIGdldCgpOiBBcnJheTxPcmRlckRUTz4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgZ2V0QnlJZChpZDogTnVtYmVyKTogdm9pZCB7XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxuXG59Il19
