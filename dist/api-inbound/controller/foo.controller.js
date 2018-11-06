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
let FooController = class FooController {
    constructor(fooService) {
        this.fooService = fooService;
    }
    get(req, res, next) {
        return this.fooService.get();
    }
    send(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.fooService.send(req.body);
                res.sendStatus(201);
            }
            catch (err) {
                res.status(400).json({ error: err.message });
            }
        });
    }
};
__decorate([
    inversify_express_utils_1.httpGet("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", String)
], FooController.prototype, "get", null);
__decorate([
    inversify_express_utils_1.httpPost("/"),
    __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FooController.prototype, "send", null);
FooController = __decorate([
    inversify_express_utils_1.controller("/foo"),
    __param(0, inversify_1.inject("FooService")),
    __metadata("design:paramtypes", [Object])
], FooController);
exports.FooController = FooController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktaW5ib3VuZC9jb250cm9sbGVyL2Zvby5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQW1DO0FBQ25DLHFFQUE2STtBQUM3SSx5Q0FBK0M7QUFJL0MsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUV0QixZQUEyQyxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUksQ0FBQztJQUc5RCxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO1FBQy9FLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBR2EsSUFBSSxDQUFZLEdBQW9CLEVBQWMsR0FBcUI7O1lBQ2pGLElBQUk7Z0JBQ0EsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkI7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDVixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUNoRDtRQUNMLENBQUM7S0FBQTtDQWlCSixDQUFBO0FBN0JHO0lBREMsaUNBQU8sQ0FBQyxHQUFHLENBQUM7Ozs7d0NBR1o7QUFHRDtJQURDLGtDQUFRLENBQUMsR0FBRyxDQUFDO0lBQ00sV0FBQSxpQ0FBTyxFQUFFLENBQUEsRUFBd0IsV0FBQSxrQ0FBUSxFQUFFLENBQUE7Ozs7eUNBTzlEO0FBakJRLGFBQWE7SUFEekIsb0NBQVUsQ0FBQyxNQUFNLENBQUM7SUFHRCxXQUFBLGtCQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7O0dBRnpCLGFBQWEsQ0FrQ3pCO0FBbENZLHNDQUFhIiwiZmlsZSI6ImFwaS1pbmJvdW5kL2NvbnRyb2xsZXIvZm9vLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBpbnRlcmZhY2VzLCBjb250cm9sbGVyLCBodHRwR2V0LCBodHRwUG9zdCwgaHR0cERlbGV0ZSwgcmVxdWVzdCwgcXVlcnlQYXJhbSwgcmVzcG9uc2UsIHJlcXVlc3RQYXJhbSB9IGZyb20gXCJpbnZlcnNpZnktZXhwcmVzcy11dGlsc1wiO1xuaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IEZvb1NlcnZpY2UgZnJvbSBcIi4uLy4uL2FwaS1jb3JlL2hhbmRsZXIvZm9vLnNlcnZpY2VcIjtcblxuQGNvbnRyb2xsZXIoXCIvZm9vXCIpXG5leHBvcnQgY2xhc3MgRm9vQ29udHJvbGxlciBpbXBsZW1lbnRzIGludGVyZmFjZXMuQ29udHJvbGxlciB7XG4gXG4gICAgY29uc3RydWN0b3IoIEBpbmplY3QoXCJGb29TZXJ2aWNlXCIpIHByaXZhdGUgZm9vU2VydmljZTogRm9vU2VydmljZSApIHt9XG4gXG4gICAgQGh0dHBHZXQoXCIvXCIpXG4gICAgcHJpdmF0ZSBnZXQocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5mb29TZXJ2aWNlLmdldCgpO1xuICAgIH1cblxuICAgIEBodHRwUG9zdChcIi9cIilcbiAgICBwcml2YXRlIGFzeW5jIHNlbmQoQHJlcXVlc3QoKSByZXE6IGV4cHJlc3MuUmVxdWVzdCwgQHJlc3BvbnNlKCkgcmVzOiBleHByZXNzLlJlc3BvbnNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZvb1NlcnZpY2Uuc2VuZChyZXEuYm9keSk7XG4gICAgICAgICAgICByZXMuc2VuZFN0YXR1cygyMDEpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICB9XG4gICAgfVxuIFxuICAgIC8vIEBodHRwR2V0KFwiL1wiKVxuICAgIC8vIHByaXZhdGUgbGlzdChAcXVlcnlQYXJhbShcInN0YXJ0XCIpIHN0YXJ0OiBudW1iZXIsIEBxdWVyeVBhcmFtKFwiY291bnRcIikgY291bnQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmZvb1NlcnZpY2UuZ2V0KHN0YXJ0LCBjb3VudCk7XG4gICAgLy8gfVxuIFxuICAgXG4gXG4gICAgLy8gQGh0dHBEZWxldGUoXCIvOmlkXCIpXG4gICAgLy8gcHJpdmF0ZSBkZWxldGUoQHJlcXVlc3RQYXJhbShcImlkXCIpIGlkOiBzdHJpbmcsIEByZXNwb25zZSgpIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5mb29TZXJ2aWNlLmRlbGV0ZShpZClcbiAgICAvLyAgICAgICAgIC50aGVuKCgpID0+IHJlcy5zZW5kU3RhdHVzKDIwNCkpXG4gICAgLy8gICAgICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBlcnIubWVzc2FnZSB9KTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vIH1cbn0iXX0=
