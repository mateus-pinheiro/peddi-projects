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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
let OrderController = class OrderController {
    constructor(orderPortInbound) {
        this.orderPortInbound = orderPortInbound;
    }
    getAll(req, res, next) {
        return this.orderPortInbound.get();
    }
    get(id, req, res, next) {
        return this.orderPortInbound.getById(id);
    }
};
__decorate([
    inversify_express_utils_1.httpGet("/"),
    __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getAll", null);
__decorate([
    inversify_express_utils_1.httpGet("/:id"),
    __param(0, inversify_express_utils_1.requestParam("id")), __param(1, inversify_express_utils_1.request()), __param(2, inversify_express_utils_1.response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object, Function]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "get", null);
OrderController = __decorate([
    inversify_express_utils_1.controller("/orders"),
    __param(0, inversify_1.inject("OrderPortInbound")),
    __metadata("design:paramtypes", [Object])
], OrderController);
exports.OrderController = OrderController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktaW5ib3VuZC9jb250cm9sbGVycy9vcmRlci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFtQztBQUNuQyxxRUFBNkk7QUFDN0kseUNBQStDO0FBSS9DLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFFeEIsWUFBaUQsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBR2hGLE1BQU0sQ0FBWSxHQUFvQixFQUFjLEdBQXFCLEVBQUUsSUFBMEI7UUFDekcsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUdPLEdBQUcsQ0FBcUIsRUFBVyxFQUFhLEdBQW9CLEVBQWMsR0FBcUIsRUFBRSxJQUEwQjtRQUN2SSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQTJCSixDQUFBO0FBbENHO0lBREMsaUNBQU8sQ0FBQyxHQUFHLENBQUM7SUFDRyxXQUFBLGlDQUFPLEVBQUUsQ0FBQSxFQUF3QixXQUFBLGtDQUFRLEVBQUUsQ0FBQTs7Ozs2Q0FFMUQ7QUFHRDtJQURDLGlDQUFPLENBQUMsTUFBTSxDQUFDO0lBQ0gsV0FBQSxzQ0FBWSxDQUFDLElBQUksQ0FBQyxDQUFBLEVBQWUsV0FBQSxpQ0FBTyxFQUFFLENBQUEsRUFBd0IsV0FBQSxrQ0FBUSxFQUFFLENBQUE7O3FDQUFwRCxNQUFNOzswQ0FFMUM7QUFaUSxlQUFlO0lBRDNCLG9DQUFVLENBQUMsU0FBUyxDQUFDO0lBR0osV0FBQSxrQkFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUE7O0dBRi9CLGVBQWUsQ0F1QzNCO0FBdkNZLDBDQUFlIiwiZmlsZSI6ImFwaS1pbmJvdW5kL2NvbnRyb2xsZXJzL29yZGVyLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBpbnRlcmZhY2VzLCBjb250cm9sbGVyLCBodHRwR2V0LCBodHRwUG9zdCwgaHR0cERlbGV0ZSwgcmVxdWVzdCwgcXVlcnlQYXJhbSwgcmVzcG9uc2UsIHJlcXVlc3RQYXJhbSB9IGZyb20gXCJpbnZlcnNpZnktZXhwcmVzcy11dGlsc1wiO1xuaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IE9yZGVyUG9ydEluYm91bmQgZnJvbSBcIi4uLy4uL2FwaS1jb3JlL3BvcnQvaW5ib3VuZC9vcmRlci5wb3J0aW5ib3VuZFwiO1xuXG5AY29udHJvbGxlcihcIi9vcmRlcnNcIilcbmV4cG9ydCBjbGFzcyBPcmRlckNvbnRyb2xsZXIgaW1wbGVtZW50cyBpbnRlcmZhY2VzLkNvbnRyb2xsZXIge1xuIFxuICAgIGNvbnN0cnVjdG9yKCBAaW5qZWN0KFwiT3JkZXJQb3J0SW5ib3VuZFwiKSBwcml2YXRlIG9yZGVyUG9ydEluYm91bmQ6IE9yZGVyUG9ydEluYm91bmQgKSB7fVxuXG4gICAgQGh0dHBHZXQoXCIvXCIpXG4gICAgcHJpdmF0ZSBnZXRBbGwoQHJlcXVlc3QoKSByZXE6IGV4cHJlc3MuUmVxdWVzdCwgQHJlc3BvbnNlKCkgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmRlclBvcnRJbmJvdW5kLmdldCgpO1xuICAgIH1cbiBcbiAgICBAaHR0cEdldChcIi86aWRcIilcbiAgICBwcml2YXRlIGdldChAcmVxdWVzdFBhcmFtKFwiaWRcIikgaWQgOiBOdW1iZXIsIEByZXF1ZXN0KCkgcmVxOiBleHByZXNzLlJlcXVlc3QsIEByZXNwb25zZSgpIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJQb3J0SW5ib3VuZC5nZXRCeUlkKGlkKTtcbiAgICB9XG5cbiAgICAvLyBAaHR0cFBvc3QoXCIvXCIpXG4gICAgLy8gcHJpdmF0ZSBhc3luYyBzZW5kKEByZXF1ZXN0KCkgcmVxOiBleHByZXNzLlJlcXVlc3QsIEByZXNwb25zZSgpIHJlczogZXhwcmVzcy5SZXNwb25zZSkge1xuICAgIC8vICAgICB0cnkge1xuICAgIC8vICAgICAgICAgYXdhaXQgdGhpcy5mb29TZXJ2aWNlLnNlbmQocmVxLmJvZHkpO1xuICAgIC8vICAgICAgICAgcmVzLnNlbmRTdGF0dXMoMjAxKTtcbiAgICAvLyAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBlcnIubWVzc2FnZSB9KTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiBcbiAgICAvLyBAaHR0cEdldChcIi9cIilcbiAgICAvLyBwcml2YXRlIGxpc3QoQHF1ZXJ5UGFyYW0oXCJzdGFydFwiKSBzdGFydDogbnVtYmVyLCBAcXVlcnlQYXJhbShcImNvdW50XCIpIGNvdW50OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5mb29TZXJ2aWNlLmdldChzdGFydCwgY291bnQpO1xuICAgIC8vIH1cbiBcbiAgIFxuIFxuICAgIC8vIEBodHRwRGVsZXRlKFwiLzppZFwiKVxuICAgIC8vIHByaXZhdGUgZGVsZXRlKEByZXF1ZXN0UGFyYW0oXCJpZFwiKSBpZDogc3RyaW5nLCBAcmVzcG9uc2UoKSByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuZm9vU2VydmljZS5kZWxldGUoaWQpXG4gICAgLy8gICAgICAgICAudGhlbigoKSA9PiByZXMuc2VuZFN0YXR1cygyMDQpKVxuICAgIC8vICAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSk7XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyB9XG59Il19
