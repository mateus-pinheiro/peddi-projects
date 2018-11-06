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
    send(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const order = new OrderDTO(req.body);
            // console.log(order.table);
            // this.orderPortInbound.insert(order);
            // try {
            //     await this.fooService.send(req.body);
            //     res.sendStatus(201);
            // } catch (err) {
            //     res.status(400).json({ error: err.message });
            // }
        });
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
__decorate([
    inversify_express_utils_1.httpPost("/"),
    __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "send", null);
OrderController = __decorate([
    inversify_express_utils_1.controller("/orders"),
    __param(0, inversify_1.inject("OrderPortInbound")),
    __metadata("design:paramtypes", [Object])
], OrderController);
exports.OrderController = OrderController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktaW5ib3VuZC9jb250cm9sbGVyL29yZGVyLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBbUM7QUFDbkMscUVBQTZJO0FBQzdJLHlDQUErQztBQUsvQyxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBRXhCLFlBQWlELGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUksQ0FBQztJQUdoRixNQUFNLENBQVksR0FBb0IsRUFBYyxHQUFxQixFQUFFLElBQTBCO1FBQ3pHLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFHTyxHQUFHLENBQXFCLEVBQVcsRUFBYSxHQUFvQixFQUFjLEdBQXFCLEVBQUUsSUFBMEI7UUFDdkksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFLYSxJQUFJLENBQVksR0FBb0IsRUFBYyxHQUFxQjs7WUFFakYsd0NBQXdDO1lBQ3hDLDRCQUE0QjtZQUc1Qix1Q0FBdUM7WUFHdkMsUUFBUTtZQUNSLDRDQUE0QztZQUM1QywyQkFBMkI7WUFDM0Isa0JBQWtCO1lBQ2xCLG9EQUFvRDtZQUNwRCxJQUFJO1FBQ1IsQ0FBQztLQUFBO0NBaUJKLENBQUE7QUE1Q0c7SUFEQyxpQ0FBTyxDQUFDLEdBQUcsQ0FBQztJQUNHLFdBQUEsaUNBQU8sRUFBRSxDQUFBLEVBQXdCLFdBQUEsa0NBQVEsRUFBRSxDQUFBOzs7OzZDQUUxRDtBQUdEO0lBREMsaUNBQU8sQ0FBQyxNQUFNLENBQUM7SUFDSCxXQUFBLHNDQUFZLENBQUMsSUFBSSxDQUFDLENBQUEsRUFBZSxXQUFBLGlDQUFPLEVBQUUsQ0FBQSxFQUF3QixXQUFBLGtDQUFRLEVBQUUsQ0FBQTs7cUNBQXBELE1BQU07OzBDQUUxQztBQUtEO0lBREMsa0NBQVEsQ0FBQyxHQUFHLENBQUM7SUFDTSxXQUFBLGlDQUFPLEVBQUUsQ0FBQSxFQUF3QixXQUFBLGtDQUFRLEVBQUUsQ0FBQTs7OzsyQ0FlOUQ7QUFoQ1EsZUFBZTtJQUQzQixvQ0FBVSxDQUFDLFNBQVMsQ0FBQztJQUdKLFdBQUEsa0JBQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBOztHQUYvQixlQUFlLENBaUQzQjtBQWpEWSwwQ0FBZSIsImZpbGUiOiJhcGktaW5ib3VuZC9jb250cm9sbGVyL29yZGVyLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBpbnRlcmZhY2VzLCBjb250cm9sbGVyLCBodHRwR2V0LCBodHRwUG9zdCwgaHR0cERlbGV0ZSwgcmVxdWVzdCwgcXVlcnlQYXJhbSwgcmVzcG9uc2UsIHJlcXVlc3RQYXJhbSB9IGZyb20gXCJpbnZlcnNpZnktZXhwcmVzcy11dGlsc1wiO1xuaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IE9yZGVyRFRPIGZyb20gXCIuLi8uLi9hcGktY29yZS9jb21tb25zL2R0by9vcmRlci5kdG9cIjtcbmltcG9ydCBPcmRlclBvcnRJbmJvdW5kIGZyb20gXCIuLi8uLi9hcGktY29yZS9wb3J0L2luYm91bmQvb3JkZXIuaW5ib3VuZC1wb3J0XCI7XG5cbkBjb250cm9sbGVyKFwiL29yZGVyc1wiKVxuZXhwb3J0IGNsYXNzIE9yZGVyQ29udHJvbGxlciBpbXBsZW1lbnRzIGludGVyZmFjZXMuQ29udHJvbGxlciB7XG4gXG4gICAgY29uc3RydWN0b3IoIEBpbmplY3QoXCJPcmRlclBvcnRJbmJvdW5kXCIpIHByaXZhdGUgb3JkZXJQb3J0SW5ib3VuZDogT3JkZXJQb3J0SW5ib3VuZCApIHt9XG5cbiAgICBAaHR0cEdldChcIi9cIilcbiAgICBwcml2YXRlIGdldEFsbChAcmVxdWVzdCgpIHJlcTogZXhwcmVzcy5SZXF1ZXN0LCBAcmVzcG9uc2UoKSByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9yZGVyUG9ydEluYm91bmQuZ2V0KCk7XG4gICAgfVxuIFxuICAgIEBodHRwR2V0KFwiLzppZFwiKVxuICAgIHByaXZhdGUgZ2V0KEByZXF1ZXN0UGFyYW0oXCJpZFwiKSBpZCA6IE51bWJlciwgQHJlcXVlc3QoKSByZXE6IGV4cHJlc3MuUmVxdWVzdCwgQHJlc3BvbnNlKCkgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmRlclBvcnRJbmJvdW5kLmdldEJ5SWQoaWQpO1xuICAgIH1cblxuXG5cbiAgICBAaHR0cFBvc3QoXCIvXCIpXG4gICAgcHJpdmF0ZSBhc3luYyBzZW5kKEByZXF1ZXN0KCkgcmVxOiBleHByZXNzLlJlcXVlc3QsIEByZXNwb25zZSgpIHJlczogZXhwcmVzcy5SZXNwb25zZSkge1xuXG4gICAgICAgIC8vIGNvbnN0IG9yZGVyID0gbmV3IE9yZGVyRFRPKHJlcS5ib2R5KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cob3JkZXIudGFibGUpO1xuXG5cbiAgICAgICAgLy8gdGhpcy5vcmRlclBvcnRJbmJvdW5kLmluc2VydChvcmRlcik7XG5cblxuICAgICAgICAvLyB0cnkge1xuICAgICAgICAvLyAgICAgYXdhaXQgdGhpcy5mb29TZXJ2aWNlLnNlbmQocmVxLmJvZHkpO1xuICAgICAgICAvLyAgICAgcmVzLnNlbmRTdGF0dXMoMjAxKTtcbiAgICAgICAgLy8gfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgLy8gfVxuICAgIH1cbiBcbiAgICAvLyBAaHR0cEdldChcIi9cIilcbiAgICAvLyBwcml2YXRlIGxpc3QoQHF1ZXJ5UGFyYW0oXCJzdGFydFwiKSBzdGFydDogbnVtYmVyLCBAcXVlcnlQYXJhbShcImNvdW50XCIpIGNvdW50OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5mb29TZXJ2aWNlLmdldChzdGFydCwgY291bnQpO1xuICAgIC8vIH1cbiBcbiAgIFxuIFxuICAgIC8vIEBodHRwRGVsZXRlKFwiLzppZFwiKVxuICAgIC8vIHByaXZhdGUgZGVsZXRlKEByZXF1ZXN0UGFyYW0oXCJpZFwiKSBpZDogc3RyaW5nLCBAcmVzcG9uc2UoKSByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuZm9vU2VydmljZS5kZWxldGUoaWQpXG4gICAgLy8gICAgICAgICAudGhlbigoKSA9PiByZXMuc2VuZFN0YXR1cygyMDQpKVxuICAgIC8vICAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSk7XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyB9XG59Il19
