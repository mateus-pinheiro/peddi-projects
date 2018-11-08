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
const order_dto_1 = __importDefault(require("../../api-core/commons/dto/order.dto"));
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
    save(req, res) {
        const order = new order_dto_1.default(req.body);
        try {
            let id = this.orderPortInbound.save(order);
            res.status(200).json({
                status: res.statusCode,
                data: {
                    id: id
                }
            });
        }
        catch (error) {
        }
        // this.orderPortInbound.insert(order);
        // try {
        //     await this.orderPortInbound.send(order);
        //     res.sendStatus(201);
        // } catch (err) {
        //     res.status(400).json({ error: err.message });
        // }
    }
    update(id, req, res) {
        const order = new order_dto_1.default(req.body);
        try {
            const updatedOrder = this.orderPortInbound.update(id, order);
            res.status(200).json({
                status: res.statusCode,
                data: {
                    updatedOrder
                }
            });
        }
        catch (error) {
        }
        // this.orderPortInbound.insert(order);
        // try {
        //     await this.orderPortInbound.send(order);
        //     res.sendStatus(201);
        // } catch (err) {
        //     res.status(400).json({ error: err.message });
        // }
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
], OrderController.prototype, "save", null);
__decorate([
    inversify_express_utils_1.httpPost("/:id"),
    __param(0, inversify_express_utils_1.requestParam("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "update", null);
OrderController = __decorate([
    inversify_express_utils_1.controller("/orders"),
    __param(0, inversify_1.inject("OrderPortInbound")),
    __metadata("design:paramtypes", [Object])
], OrderController);
exports.OrderController = OrderController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktaW5ib3VuZC9jb250cm9sbGVyL29yZGVyLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQW1DO0FBQ25DLHFFQUE2STtBQUM3SSx5Q0FBK0M7QUFDL0MscUZBQTREO0FBSzVELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFFeEIsWUFBaUQsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBR2hGLE1BQU0sQ0FBQyxHQUFvQixFQUFDLEdBQXFCLEVBQUUsSUFBMEI7UUFDakYsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUdPLEdBQUcsQ0FBcUIsRUFBVyxFQUFDLEdBQW9CLEVBQUMsR0FBcUIsRUFBRSxJQUEwQjtRQUM5RyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ2YsNENBQTRDO0lBQ2hELENBQUM7SUFLTyxJQUFJLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUVwRCxNQUFNLEtBQUssR0FBRyxJQUFJLG1CQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUk7WUFDQSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNLEVBQUUsR0FBRyxDQUFDLFVBQVU7Z0JBQ3RCLElBQUksRUFBRTtvQkFDRixFQUFFLEVBQUUsRUFBRTtpQkFDVDthQUNKLENBQUMsQ0FBQTtTQUNMO1FBQUMsT0FBTyxLQUFLLEVBQUU7U0FFZjtRQUdELHVDQUF1QztRQUV2QyxRQUFRO1FBQ1IsK0NBQStDO1FBQy9DLDJCQUEyQjtRQUMzQixrQkFBa0I7UUFDbEIsb0RBQW9EO1FBQ3BELElBQUk7SUFDUixDQUFDO0lBRU8sTUFBTSxDQUFxQixFQUFXLEVBQUUsR0FBb0IsRUFBRSxHQUFxQjtRQUV2RixNQUFNLEtBQUssR0FBRyxJQUFJLG1CQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUk7WUFDQSxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM3RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxVQUFVO2dCQUN0QixJQUFJLEVBQUU7b0JBQ0YsWUFBWTtpQkFDZjthQUNKLENBQUMsQ0FBQTtTQUNMO1FBQUMsT0FBTyxLQUFLLEVBQUU7U0FFZjtRQUdELHVDQUF1QztRQUV2QyxRQUFRO1FBQ1IsK0NBQStDO1FBQy9DLDJCQUEyQjtRQUMzQixrQkFBa0I7UUFDbEIsb0RBQW9EO1FBQ3BELElBQUk7SUFDUixDQUFDO0NBaUJKLENBQUE7QUFoRkc7SUFEQyxpQ0FBTyxDQUFDLEdBQUcsQ0FBQzs7Ozs2Q0FHWjtBQUdEO0lBREMsaUNBQU8sQ0FBQyxNQUFNLENBQUM7SUFDSCxXQUFBLHNDQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7O3FDQUFNLE1BQU07OzBDQUcxQztBQUtEO0lBREMsa0NBQVEsQ0FBQyxHQUFHLENBQUM7Ozs7MkNBeUJiO0FBRUQ7SUFEQyxrQ0FBUSxDQUFDLE1BQU0sQ0FBQztJQUNELFdBQUEsc0NBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQTs7cUNBQU0sTUFBTTs7NkNBd0I3QztBQXBFUSxlQUFlO0lBRDNCLG9DQUFVLENBQUMsU0FBUyxDQUFDO0lBR0osV0FBQSxrQkFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUE7O0dBRi9CLGVBQWUsQ0FxRjNCO0FBckZZLDBDQUFlIiwiZmlsZSI6ImFwaS1pbmJvdW5kL2NvbnRyb2xsZXIvb3JkZXIuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IGludGVyZmFjZXMsIGNvbnRyb2xsZXIsIGh0dHBHZXQsIGh0dHBQb3N0LCBodHRwRGVsZXRlLCByZXF1ZXN0LCBxdWVyeVBhcmFtLCByZXNwb25zZSwgcmVxdWVzdFBhcmFtIH0gZnJvbSBcImludmVyc2lmeS1leHByZXNzLXV0aWxzXCI7XG5pbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgT3JkZXJEVE8gZnJvbSBcIi4uLy4uL2FwaS1jb3JlL2NvbW1vbnMvZHRvL29yZGVyLmR0b1wiO1xuaW1wb3J0IE9yZGVyUG9ydEluYm91bmQgZnJvbSBcIi4uLy4uL2FwaS1jb3JlL3BvcnQvaW5ib3VuZC9vcmRlci5pbmJvdW5kLXBvcnRcIjtcbmltcG9ydCB7IFNUQVRVU19DT0RFUyB9IGZyb20gXCJodHRwXCI7XG5cbkBjb250cm9sbGVyKFwiL29yZGVyc1wiKVxuZXhwb3J0IGNsYXNzIE9yZGVyQ29udHJvbGxlciBpbXBsZW1lbnRzIGludGVyZmFjZXMuQ29udHJvbGxlciB7XG4gXG4gICAgY29uc3RydWN0b3IoIEBpbmplY3QoXCJPcmRlclBvcnRJbmJvdW5kXCIpIHByaXZhdGUgb3JkZXJQb3J0SW5ib3VuZDogT3JkZXJQb3J0SW5ib3VuZCApIHt9XG5cbiAgICBAaHR0cEdldChcIi9cIilcbiAgICBwcml2YXRlIGdldEFsbChyZXE6IGV4cHJlc3MuUmVxdWVzdCxyZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9yZGVyUG9ydEluYm91bmQuZ2V0KCk7XG4gICAgfVxuIFxuICAgIEBodHRwR2V0KFwiLzppZFwiKVxuICAgIHByaXZhdGUgZ2V0KEByZXF1ZXN0UGFyYW0oXCJpZFwiKSBpZCA6IE51bWJlcixyZXE6IGV4cHJlc3MuUmVxdWVzdCxyZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxuICAgICAgICAvLyByZXR1cm4gdGhpcy5vcmRlclBvcnRJbmJvdW5kLmdldEJ5SWQoaWQpO1xuICAgIH1cblxuXG5cbiAgICBAaHR0cFBvc3QoXCIvXCIpXG4gICAgcHJpdmF0ZSBzYXZlKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIHtcblxuICAgICAgICBjb25zdCBvcmRlciA9IG5ldyBPcmRlckRUTyhyZXEuYm9keSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLm9yZGVyUG9ydEluYm91bmQuc2F2ZShvcmRlcik7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzQ29kZSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAvLyB0aGlzLm9yZGVyUG9ydEluYm91bmQuaW5zZXJ0KG9yZGVyKTtcblxuICAgICAgICAvLyB0cnkge1xuICAgICAgICAvLyAgICAgYXdhaXQgdGhpcy5vcmRlclBvcnRJbmJvdW5kLnNlbmQob3JkZXIpO1xuICAgICAgICAvLyAgICAgcmVzLnNlbmRTdGF0dXMoMjAxKTtcbiAgICAgICAgLy8gfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBAaHR0cFBvc3QoXCIvOmlkXCIpXG4gICAgcHJpdmF0ZSB1cGRhdGUoQHJlcXVlc3RQYXJhbShcImlkXCIpIGlkIDogTnVtYmVyLCByZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSB7XG5cbiAgICAgICAgY29uc3Qgb3JkZXIgPSBuZXcgT3JkZXJEVE8ocmVxLmJvZHkpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZE9yZGVyID0gdGhpcy5vcmRlclBvcnRJbmJvdW5kLnVwZGF0ZShpZCwgb3JkZXIpO1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1c0NvZGUsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkT3JkZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgLy8gdGhpcy5vcmRlclBvcnRJbmJvdW5kLmluc2VydChvcmRlcik7XG5cbiAgICAgICAgLy8gdHJ5IHtcbiAgICAgICAgLy8gICAgIGF3YWl0IHRoaXMub3JkZXJQb3J0SW5ib3VuZC5zZW5kKG9yZGVyKTtcbiAgICAgICAgLy8gICAgIHJlcy5zZW5kU3RhdHVzKDIwMSk7XG4gICAgICAgIC8vIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgIC8vIH1cbiAgICB9XG4gXG4gICAgLy8gQGh0dHBHZXQoXCIvXCIpXG4gICAgLy8gcHJpdmF0ZSBsaXN0KEBxdWVyeVBhcmFtKFwic3RhcnRcIikgc3RhcnQ6IG51bWJlciwgQHF1ZXJ5UGFyYW0oXCJjb3VudFwiKSBjb3VudDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuZm9vU2VydmljZS5nZXQoc3RhcnQsIGNvdW50KTtcbiAgICAvLyB9XG4gXG4gICBcbiBcbiAgICAvLyBAaHR0cERlbGV0ZShcIi86aWRcIilcbiAgICAvLyBwcml2YXRlIGRlbGV0ZShAcmVxdWVzdFBhcmFtKFwiaWRcIikgaWQ6IHN0cmluZywgQHJlc3BvbnNlKCkgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmZvb1NlcnZpY2UuZGVsZXRlKGlkKVxuICAgIC8vICAgICAgICAgLnRoZW4oKCkgPT4gcmVzLnNlbmRTdGF0dXMoMjA0KSlcbiAgICAvLyAgICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IGVyci5tZXNzYWdlIH0pO1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gfVxufSJdfQ==
