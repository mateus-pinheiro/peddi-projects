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
    // @httpPost("/")
    // private save(req: express.Request, res: express.Response) {
    //     const order = new OrderDTO(req.body);
    //     try {
    //         let id = this.orderPortInbound.save(order);
    //         res.status(200).json({
    //             status: res.statusCode,
    //             data: {
    //                 id: id
    //             }
    //         })
    //     } catch (error) {
    //     }
    //     // this.orderPortInbound.insert(order);
    //     // try {
    //     //     await this.orderPortInbound.send(order);
    //     //     res.sendStatus(201);
    //     // } catch (err) {
    //     //     res.status(400).json({ error: err.message });
    //     // }
    // }
    send(req, res) {
        console.log("Chegou na camada inbound");
        const order = new order_dto_1.default(req.body);
        try {
            this.orderPortInbound.send(order);
            res.status(200);
        }
        catch (error) {
            res.status(400).json({ error: error });
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
], OrderController.prototype, "send", null);
OrderController = __decorate([
    inversify_express_utils_1.controller("/orders"),
    __param(0, inversify_1.inject("OrderPortInbound")),
    __metadata("design:paramtypes", [Object])
], OrderController);
exports.OrderController = OrderController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktaW5ib3VuZC9jb250cm9sbGVyL29yZGVyLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQW1DO0FBQ25DLHFFQUE2STtBQUM3SSx5Q0FBK0M7QUFDL0MscUZBQTREO0FBSzVELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFFeEIsWUFBaUQsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBR2hGLE1BQU0sQ0FBQyxHQUFvQixFQUFDLEdBQXFCLEVBQUUsSUFBMEI7UUFDakYsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUdPLEdBQUcsQ0FBcUIsRUFBVyxFQUFDLEdBQW9CLEVBQUMsR0FBcUIsRUFBRSxJQUEwQjtRQUM5RyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ2YsNENBQTRDO0lBQ2hELENBQUM7SUFJRCxpQkFBaUI7SUFDakIsOERBQThEO0lBRTlELDRDQUE0QztJQUM1QyxZQUFZO0lBQ1osc0RBQXNEO0lBQ3RELGlDQUFpQztJQUNqQyxzQ0FBc0M7SUFDdEMsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHdCQUF3QjtJQUV4QixRQUFRO0lBR1IsOENBQThDO0lBRTlDLGVBQWU7SUFDZixzREFBc0Q7SUFDdEQsa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QiwyREFBMkQ7SUFDM0QsV0FBVztJQUNYLElBQUk7SUFHSSxJQUFJLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDeEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJO1lBQ0EsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBR0QsdUNBQXVDO1FBRXZDLFFBQVE7UUFDUiwrQ0FBK0M7UUFDL0MsMkJBQTJCO1FBQzNCLGtCQUFrQjtRQUNsQixvREFBb0Q7UUFDcEQsSUFBSTtJQUNSLENBQUM7Q0E4Q0osQ0FBQTtBQXpHRztJQURDLGlDQUFPLENBQUMsR0FBRyxDQUFDOzs7OzZDQUdaO0FBR0Q7SUFEQyxpQ0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNILFdBQUEsc0NBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQTs7cUNBQU0sTUFBTTs7MENBRzFDO0FBZ0NEO0lBREMsa0NBQVEsQ0FBQyxHQUFHLENBQUM7Ozs7MkNBb0JiO0FBaEVRLGVBQWU7SUFEM0Isb0NBQVUsQ0FBQyxTQUFTLENBQUM7SUFHSixXQUFBLGtCQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQTs7R0FGL0IsZUFBZSxDQThHM0I7QUE5R1ksMENBQWUiLCJmaWxlIjoiYXBpLWluYm91bmQvY29udHJvbGxlci9vcmRlci5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgaW50ZXJmYWNlcywgY29udHJvbGxlciwgaHR0cEdldCwgaHR0cFBvc3QsIGh0dHBEZWxldGUsIHJlcXVlc3QsIHF1ZXJ5UGFyYW0sIHJlc3BvbnNlLCByZXF1ZXN0UGFyYW0gfSBmcm9tIFwiaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHNcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCBPcmRlckRUTyBmcm9tIFwiLi4vLi4vYXBpLWNvcmUvY29tbW9ucy9kdG8vb3JkZXIuZHRvXCI7XG5pbXBvcnQgT3JkZXJQb3J0SW5ib3VuZCBmcm9tIFwiLi4vLi4vYXBpLWNvcmUvcG9ydC9pbmJvdW5kL29yZGVyLmluYm91bmQtcG9ydFwiO1xuaW1wb3J0IHsgU1RBVFVTX0NPREVTIH0gZnJvbSBcImh0dHBcIjtcblxuQGNvbnRyb2xsZXIoXCIvb3JkZXJzXCIpXG5leHBvcnQgY2xhc3MgT3JkZXJDb250cm9sbGVyIGltcGxlbWVudHMgaW50ZXJmYWNlcy5Db250cm9sbGVyIHtcbiBcbiAgICBjb25zdHJ1Y3RvciggQGluamVjdChcIk9yZGVyUG9ydEluYm91bmRcIikgcHJpdmF0ZSBvcmRlclBvcnRJbmJvdW5kOiBPcmRlclBvcnRJbmJvdW5kICkge31cblxuICAgIEBodHRwR2V0KFwiL1wiKVxuICAgIHByaXZhdGUgZ2V0QWxsKHJlcTogZXhwcmVzcy5SZXF1ZXN0LHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJQb3J0SW5ib3VuZC5nZXQoKTtcbiAgICB9XG4gXG4gICAgQGh0dHBHZXQoXCIvOmlkXCIpXG4gICAgcHJpdmF0ZSBnZXQoQHJlcXVlc3RQYXJhbShcImlkXCIpIGlkIDogTnVtYmVyLHJlcTogZXhwcmVzcy5SZXF1ZXN0LHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coaWQpXG4gICAgICAgIC8vIHJldHVybiB0aGlzLm9yZGVyUG9ydEluYm91bmQuZ2V0QnlJZChpZCk7XG4gICAgfVxuXG5cblxuICAgIC8vIEBodHRwUG9zdChcIi9cIilcbiAgICAvLyBwcml2YXRlIHNhdmUocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkge1xuXG4gICAgLy8gICAgIGNvbnN0IG9yZGVyID0gbmV3IE9yZGVyRFRPKHJlcS5ib2R5KTtcbiAgICAvLyAgICAgdHJ5IHtcbiAgICAvLyAgICAgICAgIGxldCBpZCA9IHRoaXMub3JkZXJQb3J0SW5ib3VuZC5zYXZlKG9yZGVyKTtcbiAgICAvLyAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAvLyAgICAgICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXNDb2RlLFxuICAgIC8vICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIFxuICAgIC8vICAgICB9XG4gICAgICAgIFxuXG4gICAgLy8gICAgIC8vIHRoaXMub3JkZXJQb3J0SW5ib3VuZC5pbnNlcnQob3JkZXIpO1xuXG4gICAgLy8gICAgIC8vIHRyeSB7XG4gICAgLy8gICAgIC8vICAgICBhd2FpdCB0aGlzLm9yZGVyUG9ydEluYm91bmQuc2VuZChvcmRlcik7XG4gICAgLy8gICAgIC8vICAgICByZXMuc2VuZFN0YXR1cygyMDEpO1xuICAgIC8vICAgICAvLyB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyAgICAgLy8gICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IGVyci5tZXNzYWdlIH0pO1xuICAgIC8vICAgICAvLyB9XG4gICAgLy8gfVxuXG4gICAgQGh0dHBQb3N0KFwiL1wiKVxuICAgIHByaXZhdGUgc2VuZChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2hlZ291IG5hIGNhbWFkYSBpbmJvdW5kXCIpO1xuICAgICAgICBjb25zdCBvcmRlciA9IG5ldyBPcmRlckRUTyhyZXEuYm9keSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLm9yZGVyUG9ydEluYm91bmQuc2VuZChvcmRlcik7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyb3I6IGVycm9yfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgLy8gdGhpcy5vcmRlclBvcnRJbmJvdW5kLmluc2VydChvcmRlcik7XG5cbiAgICAgICAgLy8gdHJ5IHtcbiAgICAgICAgLy8gICAgIGF3YWl0IHRoaXMub3JkZXJQb3J0SW5ib3VuZC5zZW5kKG9yZGVyKTtcbiAgICAgICAgLy8gICAgIHJlcy5zZW5kU3RhdHVzKDIwMSk7XG4gICAgICAgIC8vIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBcblxuICAgIC8vIEBodHRwUG9zdChcIi86aWRcIilcbiAgICAvLyBwcml2YXRlIHVwZGF0ZShAcmVxdWVzdFBhcmFtKFwiaWRcIikgaWQgOiBOdW1iZXIsIHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIHtcblxuICAgIC8vICAgICBjb25zdCBvcmRlciA9IG5ldyBPcmRlckRUTyhyZXEuYm9keSk7XG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgICBjb25zdCB1cGRhdGVkT3JkZXIgPSB0aGlzLm9yZGVyUG9ydEluYm91bmQudXBkYXRlKGlkLCBvcmRlcik7XG4gICAgLy8gICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgLy8gICAgICAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzQ29kZSxcbiAgICAvLyAgICAgICAgICAgICBkYXRhOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHVwZGF0ZWRPcmRlclxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBcbiAgICAvLyAgICAgfVxuICAgICAgICBcblxuICAgIC8vICAgICAvLyB0aGlzLm9yZGVyUG9ydEluYm91bmQuaW5zZXJ0KG9yZGVyKTtcblxuICAgIC8vICAgICAvLyB0cnkge1xuICAgIC8vICAgICAvLyAgICAgYXdhaXQgdGhpcy5vcmRlclBvcnRJbmJvdW5kLnNlbmQob3JkZXIpO1xuICAgIC8vICAgICAvLyAgICAgcmVzLnNlbmRTdGF0dXMoMjAxKTtcbiAgICAvLyAgICAgLy8gfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gICAgIC8vICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBlcnIubWVzc2FnZSB9KTtcbiAgICAvLyAgICAgLy8gfVxuICAgIC8vIH1cbiBcbiAgICAvLyBAaHR0cEdldChcIi9cIilcbiAgICAvLyBwcml2YXRlIGxpc3QoQHF1ZXJ5UGFyYW0oXCJzdGFydFwiKSBzdGFydDogbnVtYmVyLCBAcXVlcnlQYXJhbShcImNvdW50XCIpIGNvdW50OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5mb29TZXJ2aWNlLmdldChzdGFydCwgY291bnQpO1xuICAgIC8vIH1cbiBcbiAgIFxuIFxuICAgIC8vIEBodHRwRGVsZXRlKFwiLzppZFwiKVxuICAgIC8vIHByaXZhdGUgZGVsZXRlKEByZXF1ZXN0UGFyYW0oXCJpZFwiKSBpZDogc3RyaW5nLCBAcmVzcG9uc2UoKSByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuZm9vU2VydmljZS5kZWxldGUoaWQpXG4gICAgLy8gICAgICAgICAudGhlbigoKSA9PiByZXMuc2VuZFN0YXR1cygyMDQpKVxuICAgIC8vICAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSk7XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyB9XG59Il19
