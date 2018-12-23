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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const order_dto_1 = __importDefault(require("../dto/order.dto"));
let OrderController = class OrderController {
    constructor(orderPortInbound) {
        this.orderPortInbound = orderPortInbound;
    }
    getAll(req, res, next) {
        return this.orderPortInbound.get();
    }
    get(id, req, res, next) {
        console.log(id);
        // return this.orderPortInbound.getById(id);
    }
    ask(req, res) {
        try {
            const order = new order_dto_1.default(req.body);
            //should make a conversor from dto to core model;
            const resp = this.orderPortInbound.save(order);
            res.status(200).json(resp);
        }
        catch (error) {
            res.status(400).json({ "error": error });
        }
    }
    askAgain(id, req, res) {
        try {
            const order = new order_dto_1.default(req.body);
            //should make a conversor from dto to core model;
            this.orderPortInbound.update(id, order);
        }
        catch (error) {
            res.status(400).json({ "error": error });
        }
    }
    //this endpoint will just send the finished order to cloud api of peddi;
    send(id, req, res) {
        console.log("Endpoint:" + this.send.toString());
        try {
            this.orderPortInbound.send(id);
        }
        catch (error) {
            res.status(400).json({ "error": error });
        }
        //     console.log("Chegou na camada inbound");
        //     const order = new OrderDTO(req.body);
        //     try {
        //         this.orderPortInbound.send(order);
        //         res.status(200);
        //     } catch (error) {
        //         res.status(400).json({error: error});
        //     }
        //     // this.orderPortInbound.insert(order);
        //     // try {
        //     //     await this.orderPortInbound.send(order);
        //     //     res.sendStatus(201);
        //     // } catch (err) {
        //     //     res.status(400).json({ error: err.message });
        //     // }
    }
};
__decorate([
    inversify_express_utils_1.httpGet("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getAll", null);
__decorate([
    inversify_express_utils_1.httpGet("/:id"),
    __param(0, inversify_express_utils_1.requestParam("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object, Function]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "get", null);
__decorate([
    inversify_express_utils_1.httpPost("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "ask", null);
__decorate([
    inversify_express_utils_1.httpPut("/:id"),
    __param(0, inversify_express_utils_1.requestParam("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "askAgain", null);
__decorate([
    inversify_express_utils_1.httpPost("/:id"),
    __param(0, inversify_express_utils_1.requestParam("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "send", null);
OrderController = __decorate([
    inversify_express_utils_1.controller("/orders"),
    __param(0, inversify_1.inject("OrderPortInbound")),
    __metadata("design:paramtypes", [Object])
], OrderController);
exports.OrderController = OrderController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktaW5ib3VuZC9jb250cm9sbGVyL29yZGVyLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQW1DO0FBQ25DLHFFQUFzSjtBQUN0Six5Q0FBK0M7QUFDL0MsaUVBQXdDO0FBS3hDLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFFeEIsWUFBZ0QsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBRy9FLE1BQU0sQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7UUFDbEYsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUdPLEdBQUcsQ0FBcUIsRUFBVSxFQUFFLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtRQUMvRyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ2YsNENBQTRDO0lBQ2hELENBQUM7SUFHTyxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUNuRCxJQUFJO1lBQ0EsTUFBTSxLQUFLLEdBQUcsSUFBSSxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxpREFBaUQ7WUFFakQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUU5QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUM1QztJQUdMLENBQUM7SUFHTyxRQUFRLENBQXFCLEVBQVUsRUFBRSxHQUFvQixFQUFFLEdBQXFCO1FBQ3hGLElBQUk7WUFDQSxNQUFNLEtBQUssR0FBRyxJQUFJLG1CQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLGlEQUFpRDtZQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUUzQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUM1QztJQUdMLENBQUM7SUFFRCx3RUFBd0U7SUFFaEUsSUFBSSxDQUFxQixFQUFVLEVBQUUsR0FBb0IsRUFBRSxHQUFxQjtRQUNwRixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFaEQsSUFBSTtZQUNBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbEM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDNUM7UUFDRCwrQ0FBK0M7UUFDL0MsNENBQTRDO1FBQzVDLFlBQVk7UUFDWiw2Q0FBNkM7UUFDN0MsMkJBQTJCO1FBQzNCLHdCQUF3QjtRQUN4QixnREFBZ0Q7UUFDaEQsUUFBUTtRQUdSLDhDQUE4QztRQUU5QyxlQUFlO1FBQ2Ysc0RBQXNEO1FBQ3RELGtDQUFrQztRQUNsQyx5QkFBeUI7UUFDekIsMkRBQTJEO1FBQzNELFdBQVc7SUFDZixDQUFDO0NBaUdKLENBQUE7QUFyS0c7SUFEQyxpQ0FBTyxDQUFDLEdBQUcsQ0FBQzs7Ozs2Q0FHWjtBQUdEO0lBREMsaUNBQU8sQ0FBQyxNQUFNLENBQUM7SUFDSCxXQUFBLHNDQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7O3FDQUFLLE1BQU07OzBDQUd6QztBQUdEO0lBREMsa0NBQVEsQ0FBQyxHQUFHLENBQUM7Ozs7MENBY2I7QUFHRDtJQURDLGlDQUFPLENBQUMsTUFBTSxDQUFDO0lBQ0UsV0FBQSxzQ0FBWSxDQUFDLElBQUksQ0FBQyxDQUFBOztxQ0FBSyxNQUFNOzsrQ0FXOUM7QUFJRDtJQURDLGtDQUFRLENBQUMsTUFBTSxDQUFDO0lBQ0gsV0FBQSxzQ0FBWSxDQUFDLElBQUksQ0FBQyxDQUFBOztxQ0FBSyxNQUFNOzsyQ0EwQjFDO0FBekVRLGVBQWU7SUFEM0Isb0NBQVUsQ0FBQyxTQUFTLENBQUM7SUFHTCxXQUFBLGtCQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQTs7R0FGOUIsZUFBZSxDQTBLM0I7QUExS1ksMENBQWUiLCJmaWxlIjoiYXBpLWluYm91bmQvY29udHJvbGxlci9vcmRlci5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgaW50ZXJmYWNlcywgY29udHJvbGxlciwgaHR0cEdldCwgaHR0cFBvc3QsIGh0dHBEZWxldGUsIHJlcXVlc3QsIHF1ZXJ5UGFyYW0sIHJlc3BvbnNlLCByZXF1ZXN0UGFyYW0sIGh0dHBQdXQgfSBmcm9tIFwiaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHNcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCBPcmRlckRUTyBmcm9tIFwiLi4vZHRvL29yZGVyLmR0b1wiO1xuaW1wb3J0IE9yZGVyUG9ydEluYm91bmQgZnJvbSBcIi4uLy4uL2FwaS1jb3JlL3BvcnQvaW5ib3VuZC9vcmRlci5pbmJvdW5kLXBvcnRcIjtcbmltcG9ydCB7IFNUQVRVU19DT0RFUyB9IGZyb20gXCJodHRwXCI7XG5cbkBjb250cm9sbGVyKFwiL29yZGVyc1wiKVxuZXhwb3J0IGNsYXNzIE9yZGVyQ29udHJvbGxlciBpbXBsZW1lbnRzIGludGVyZmFjZXMuQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihAaW5qZWN0KFwiT3JkZXJQb3J0SW5ib3VuZFwiKSBwcml2YXRlIG9yZGVyUG9ydEluYm91bmQ6IE9yZGVyUG9ydEluYm91bmQpIHsgfVxuXG4gICAgQGh0dHBHZXQoXCIvXCIpXG4gICAgcHJpdmF0ZSBnZXRBbGwocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJQb3J0SW5ib3VuZC5nZXQoKTtcbiAgICB9XG5cbiAgICBAaHR0cEdldChcIi86aWRcIilcbiAgICBwcml2YXRlIGdldChAcmVxdWVzdFBhcmFtKFwiaWRcIikgaWQ6IE51bWJlciwgcmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coaWQpXG4gICAgICAgIC8vIHJldHVybiB0aGlzLm9yZGVyUG9ydEluYm91bmQuZ2V0QnlJZChpZCk7XG4gICAgfVxuXG4gICAgQGh0dHBQb3N0KFwiL1wiKVxuICAgIHByaXZhdGUgYXNrKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyID0gbmV3IE9yZGVyRFRPKHJlcS5ib2R5KTtcbiAgICAgICAgICAgIC8vc2hvdWxkIG1ha2UgYSBjb252ZXJzb3IgZnJvbSBkdG8gdG8gY29yZSBtb2RlbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcmVzcCA9IHRoaXMub3JkZXJQb3J0SW5ib3VuZC5zYXZlKG9yZGVyKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3ApO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IFwiZXJyb3JcIjogZXJyb3IgfSk7XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgQGh0dHBQdXQoXCIvOmlkXCIpXG4gICAgcHJpdmF0ZSBhc2tBZ2FpbihAcmVxdWVzdFBhcmFtKFwiaWRcIikgaWQ6IFN0cmluZywgcmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgb3JkZXIgPSBuZXcgT3JkZXJEVE8ocmVxLmJvZHkpO1xuICAgICAgICAgICAgLy9zaG91bGQgbWFrZSBhIGNvbnZlcnNvciBmcm9tIGR0byB0byBjb3JlIG1vZGVsO1xuICAgICAgICAgICAgdGhpcy5vcmRlclBvcnRJbmJvdW5kLnVwZGF0ZShpZCwgb3JkZXIpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IFwiZXJyb3JcIjogZXJyb3IgfSk7XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgLy90aGlzIGVuZHBvaW50IHdpbGwganVzdCBzZW5kIHRoZSBmaW5pc2hlZCBvcmRlciB0byBjbG91ZCBhcGkgb2YgcGVkZGk7XG4gICAgQGh0dHBQb3N0KFwiLzppZFwiKVxuICAgIHByaXZhdGUgc2VuZChAcmVxdWVzdFBhcmFtKFwiaWRcIikgaWQ6IFN0cmluZywgcmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVuZHBvaW50OlwiICsgdGhpcy5zZW5kLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLm9yZGVyUG9ydEluYm91bmQuc2VuZChpZCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IFwiZXJyb3JcIjogZXJyb3IgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiQ2hlZ291IG5hIGNhbWFkYSBpbmJvdW5kXCIpO1xuICAgICAgICAvLyAgICAgY29uc3Qgb3JkZXIgPSBuZXcgT3JkZXJEVE8ocmVxLmJvZHkpO1xuICAgICAgICAvLyAgICAgdHJ5IHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm9yZGVyUG9ydEluYm91bmQuc2VuZChvcmRlcik7XG4gICAgICAgIC8vICAgICAgICAgcmVzLnN0YXR1cygyMDApO1xuICAgICAgICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyb3I6IGVycm9yfSk7XG4gICAgICAgIC8vICAgICB9XG5cblxuICAgICAgICAvLyAgICAgLy8gdGhpcy5vcmRlclBvcnRJbmJvdW5kLmluc2VydChvcmRlcik7XG5cbiAgICAgICAgLy8gICAgIC8vIHRyeSB7XG4gICAgICAgIC8vICAgICAvLyAgICAgYXdhaXQgdGhpcy5vcmRlclBvcnRJbmJvdW5kLnNlbmQob3JkZXIpO1xuICAgICAgICAvLyAgICAgLy8gICAgIHJlcy5zZW5kU3RhdHVzKDIwMSk7XG4gICAgICAgIC8vICAgICAvLyB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gICAgIC8vICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgLy8gICAgIC8vIH1cbiAgICB9XG5cblxuXG4gICAgLy8gQGh0dHBQb3N0KFwiL1wiKVxuICAgIC8vIHByaXZhdGUgc2F2ZShyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSB7XG5cbiAgICAvLyAgICAgY29uc3Qgb3JkZXIgPSBuZXcgT3JkZXJEVE8ocmVxLmJvZHkpO1xuICAgIC8vICAgICB0cnkge1xuICAgIC8vICAgICAgICAgbGV0IGlkID0gdGhpcy5vcmRlclBvcnRJbmJvdW5kLnNhdmUob3JkZXIpO1xuICAgIC8vICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgIC8vICAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1c0NvZGUsXG4gICAgLy8gICAgICAgICAgICAgZGF0YToge1xuICAgIC8vICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgLy8gICAgIH1cblxuXG4gICAgLy8gICAgIC8vIHRoaXMub3JkZXJQb3J0SW5ib3VuZC5pbnNlcnQob3JkZXIpO1xuXG4gICAgLy8gICAgIC8vIHRyeSB7XG4gICAgLy8gICAgIC8vICAgICBhd2FpdCB0aGlzLm9yZGVyUG9ydEluYm91bmQuc2VuZChvcmRlcik7XG4gICAgLy8gICAgIC8vICAgICByZXMuc2VuZFN0YXR1cygyMDEpO1xuICAgIC8vICAgICAvLyB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyAgICAgLy8gICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IGVyci5tZXNzYWdlIH0pO1xuICAgIC8vICAgICAvLyB9XG4gICAgLy8gfVxuXG4gICAgLy8gQGh0dHBQb3N0KFwiL1wiKVxuICAgIC8vIHByaXZhdGUgc2VuZChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiQ2hlZ291IG5hIGNhbWFkYSBpbmJvdW5kXCIpO1xuICAgIC8vICAgICBjb25zdCBvcmRlciA9IG5ldyBPcmRlckRUTyhyZXEuYm9keSk7XG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgICB0aGlzLm9yZGVyUG9ydEluYm91bmQuc2VuZChvcmRlcik7XG4gICAgLy8gICAgICAgICByZXMuc3RhdHVzKDIwMCk7XG4gICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyb3I6IGVycm9yfSk7XG4gICAgLy8gICAgIH1cblxuXG4gICAgLy8gICAgIC8vIHRoaXMub3JkZXJQb3J0SW5ib3VuZC5pbnNlcnQob3JkZXIpO1xuXG4gICAgLy8gICAgIC8vIHRyeSB7XG4gICAgLy8gICAgIC8vICAgICBhd2FpdCB0aGlzLm9yZGVyUG9ydEluYm91bmQuc2VuZChvcmRlcik7XG4gICAgLy8gICAgIC8vICAgICByZXMuc2VuZFN0YXR1cygyMDEpO1xuICAgIC8vICAgICAvLyB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyAgICAgLy8gICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IGVyci5tZXNzYWdlIH0pO1xuICAgIC8vICAgICAvLyB9XG4gICAgLy8gfVxuXG5cblxuICAgIC8vIEBodHRwUG9zdChcIi86aWRcIilcbiAgICAvLyBwcml2YXRlIHVwZGF0ZShAcmVxdWVzdFBhcmFtKFwiaWRcIikgaWQgOiBOdW1iZXIsIHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIHtcblxuICAgIC8vICAgICBjb25zdCBvcmRlciA9IG5ldyBPcmRlckRUTyhyZXEuYm9keSk7XG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgICBjb25zdCB1cGRhdGVkT3JkZXIgPSB0aGlzLm9yZGVyUG9ydEluYm91bmQudXBkYXRlKGlkLCBvcmRlcik7XG4gICAgLy8gICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgLy8gICAgICAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzQ29kZSxcbiAgICAvLyAgICAgICAgICAgICBkYXRhOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHVwZGF0ZWRPcmRlclxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAvLyAgICAgfVxuXG5cbiAgICAvLyAgICAgLy8gdGhpcy5vcmRlclBvcnRJbmJvdW5kLmluc2VydChvcmRlcik7XG5cbiAgICAvLyAgICAgLy8gdHJ5IHtcbiAgICAvLyAgICAgLy8gICAgIGF3YWl0IHRoaXMub3JkZXJQb3J0SW5ib3VuZC5zZW5kKG9yZGVyKTtcbiAgICAvLyAgICAgLy8gICAgIHJlcy5zZW5kU3RhdHVzKDIwMSk7XG4gICAgLy8gICAgIC8vIH0gY2F0Y2ggKGVycikge1xuICAgIC8vICAgICAvLyAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSk7XG4gICAgLy8gICAgIC8vIH1cbiAgICAvLyB9XG5cbiAgICAvLyBAaHR0cEdldChcIi9cIilcbiAgICAvLyBwcml2YXRlIGxpc3QoQHF1ZXJ5UGFyYW0oXCJzdGFydFwiKSBzdGFydDogbnVtYmVyLCBAcXVlcnlQYXJhbShcImNvdW50XCIpIGNvdW50OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5mb29TZXJ2aWNlLmdldChzdGFydCwgY291bnQpO1xuICAgIC8vIH1cblxuXG5cbiAgICAvLyBAaHR0cERlbGV0ZShcIi86aWRcIilcbiAgICAvLyBwcml2YXRlIGRlbGV0ZShAcmVxdWVzdFBhcmFtKFwiaWRcIikgaWQ6IHN0cmluZywgQHJlc3BvbnNlKCkgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmZvb1NlcnZpY2UuZGVsZXRlKGlkKVxuICAgIC8vICAgICAgICAgLnRoZW4oKCkgPT4gcmVzLnNlbmRTdGF0dXMoMjA0KSlcbiAgICAvLyAgICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IGVyci5tZXNzYWdlIH0pO1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gfVxufSJdfQ==
