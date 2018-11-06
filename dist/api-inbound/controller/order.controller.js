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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktaW5ib3VuZC9jb250cm9sbGVyL29yZGVyLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQW1DO0FBQ25DLHFFQUE2STtBQUM3SSx5Q0FBK0M7QUFLL0MsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUV4QixZQUFpRCxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFHaEYsTUFBTSxDQUFZLEdBQW9CLEVBQWMsR0FBcUIsRUFBRSxJQUEwQjtRQUN6RyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBR08sR0FBRyxDQUFxQixFQUFXLEVBQWEsR0FBb0IsRUFBYyxHQUFxQixFQUFFLElBQTBCO1FBQ3ZJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBcUNKLENBQUE7QUE1Q0c7SUFEQyxpQ0FBTyxDQUFDLEdBQUcsQ0FBQztJQUNHLFdBQUEsaUNBQU8sRUFBRSxDQUFBLEVBQXdCLFdBQUEsa0NBQVEsRUFBRSxDQUFBOzs7OzZDQUUxRDtBQUdEO0lBREMsaUNBQU8sQ0FBQyxNQUFNLENBQUM7SUFDSCxXQUFBLHNDQUFZLENBQUMsSUFBSSxDQUFDLENBQUEsRUFBZSxXQUFBLGlDQUFPLEVBQUUsQ0FBQSxFQUF3QixXQUFBLGtDQUFRLEVBQUUsQ0FBQTs7cUNBQXBELE1BQU07OzBDQUUxQztBQVpRLGVBQWU7SUFEM0Isb0NBQVUsQ0FBQyxTQUFTLENBQUM7SUFHSixXQUFBLGtCQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQTs7R0FGL0IsZUFBZSxDQWlEM0I7QUFqRFksMENBQWUiLCJmaWxlIjoiYXBpLWluYm91bmQvY29udHJvbGxlci9vcmRlci5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgaW50ZXJmYWNlcywgY29udHJvbGxlciwgaHR0cEdldCwgaHR0cFBvc3QsIGh0dHBEZWxldGUsIHJlcXVlc3QsIHF1ZXJ5UGFyYW0sIHJlc3BvbnNlLCByZXF1ZXN0UGFyYW0gfSBmcm9tIFwiaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHNcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCBPcmRlckRUTyBmcm9tIFwiLi4vLi4vYXBpLWNvcmUvY29tbW9ucy9kdG8vb3JkZXIuZHRvXCI7XG5pbXBvcnQgT3JkZXJQb3J0SW5ib3VuZCBmcm9tIFwiLi4vLi4vYXBpLWNvcmUvcG9ydC9pbmJvdW5kL29yZGVyLmluYm91bmQtcG9ydFwiO1xuXG5AY29udHJvbGxlcihcIi9vcmRlcnNcIilcbmV4cG9ydCBjbGFzcyBPcmRlckNvbnRyb2xsZXIgaW1wbGVtZW50cyBpbnRlcmZhY2VzLkNvbnRyb2xsZXIge1xuIFxuICAgIGNvbnN0cnVjdG9yKCBAaW5qZWN0KFwiT3JkZXJQb3J0SW5ib3VuZFwiKSBwcml2YXRlIG9yZGVyUG9ydEluYm91bmQ6IE9yZGVyUG9ydEluYm91bmQgKSB7fVxuXG4gICAgQGh0dHBHZXQoXCIvXCIpXG4gICAgcHJpdmF0ZSBnZXRBbGwoQHJlcXVlc3QoKSByZXE6IGV4cHJlc3MuUmVxdWVzdCwgQHJlc3BvbnNlKCkgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmRlclBvcnRJbmJvdW5kLmdldCgpO1xuICAgIH1cbiBcbiAgICBAaHR0cEdldChcIi86aWRcIilcbiAgICBwcml2YXRlIGdldChAcmVxdWVzdFBhcmFtKFwiaWRcIikgaWQgOiBOdW1iZXIsIEByZXF1ZXN0KCkgcmVxOiBleHByZXNzLlJlcXVlc3QsIEByZXNwb25zZSgpIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJQb3J0SW5ib3VuZC5nZXRCeUlkKGlkKTtcbiAgICB9XG5cblxuXG4gICAgLy8gQGh0dHBQb3N0KFwiL1wiKVxuICAgIC8vIHByaXZhdGUgYXN5bmMgc2VuZChAcmVxdWVzdCgpIHJlcTogZXhwcmVzcy5SZXF1ZXN0LCBAcmVzcG9uc2UoKSByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIHtcblxuICAgIC8vICAgICBjb25zdCBvcmRlciA9IG5ldyBPcmRlckRUTyhyZXEuYm9keSk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKG9yZGVyLnRhYmxlKTtcblxuXG4gICAgLy8gICAgIC8vIHRoaXMub3JkZXJQb3J0SW5ib3VuZC5pbnNlcnQob3JkZXIpO1xuXG5cbiAgICAvLyAgICAgLy8gdHJ5IHtcbiAgICAvLyAgICAgLy8gICAgIGF3YWl0IHRoaXMuZm9vU2VydmljZS5zZW5kKHJlcS5ib2R5KTtcbiAgICAvLyAgICAgLy8gICAgIHJlcy5zZW5kU3RhdHVzKDIwMSk7XG4gICAgLy8gICAgIC8vIH0gY2F0Y2ggKGVycikge1xuICAgIC8vICAgICAvLyAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSk7XG4gICAgLy8gICAgIC8vIH1cbiAgICAvLyB9XG4gXG4gICAgLy8gQGh0dHBHZXQoXCIvXCIpXG4gICAgLy8gcHJpdmF0ZSBsaXN0KEBxdWVyeVBhcmFtKFwic3RhcnRcIikgc3RhcnQ6IG51bWJlciwgQHF1ZXJ5UGFyYW0oXCJjb3VudFwiKSBjb3VudDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuZm9vU2VydmljZS5nZXQoc3RhcnQsIGNvdW50KTtcbiAgICAvLyB9XG4gXG4gICBcbiBcbiAgICAvLyBAaHR0cERlbGV0ZShcIi86aWRcIilcbiAgICAvLyBwcml2YXRlIGRlbGV0ZShAcmVxdWVzdFBhcmFtKFwiaWRcIikgaWQ6IHN0cmluZywgQHJlc3BvbnNlKCkgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmZvb1NlcnZpY2UuZGVsZXRlKGlkKVxuICAgIC8vICAgICAgICAgLnRoZW4oKCkgPT4gcmVzLnNlbmRTdGF0dXMoMjA0KSlcbiAgICAvLyAgICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IGVyci5tZXNzYWdlIH0pO1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gfVxufSJdfQ==
