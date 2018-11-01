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
let FooController = class FooController {
    constructor(fooService) {
        this.fooService = fooService;
    }
    index(req, res, next) {
        return this.fooService.get();
    }
};
__decorate([
    inversify_express_utils_1.httpGet("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", String)
], FooController.prototype, "index", null);
FooController = __decorate([
    inversify_express_utils_1.controller("/foo"),
    __param(0, inversify_1.inject("FooService")),
    __metadata("design:paramtypes", [Object])
], FooController);
exports.FooController = FooController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVycy9mb28uY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBbUM7QUFDbkMscUVBQTZJO0FBQzdJLHlDQUErQztBQUkvQyxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBRXRCLFlBQTJDLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBSSxDQUFDO0lBRzlELEtBQUssQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7UUFDakYsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Q0F5QkosQ0FBQTtBQTNCRztJQURDLGlDQUFPLENBQUMsR0FBRyxDQUFDOzs7OzBDQUdaO0FBUFEsYUFBYTtJQUR6QixvQ0FBVSxDQUFDLE1BQU0sQ0FBQztJQUdELFdBQUEsa0JBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTs7R0FGekIsYUFBYSxDQWdDekI7QUFoQ1ksc0NBQWEiLCJmaWxlIjoiY29udHJvbGxlcnMvZm9vLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBpbnRlcmZhY2VzLCBjb250cm9sbGVyLCBodHRwR2V0LCBodHRwUG9zdCwgaHR0cERlbGV0ZSwgcmVxdWVzdCwgcXVlcnlQYXJhbSwgcmVzcG9uc2UsIHJlcXVlc3RQYXJhbSB9IGZyb20gXCJpbnZlcnNpZnktZXhwcmVzcy11dGlsc1wiO1xuaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IEZvb1NlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2Zvby5zZXJ2aWNlXCI7XG5cbkBjb250cm9sbGVyKFwiL2Zvb1wiKVxuZXhwb3J0IGNsYXNzIEZvb0NvbnRyb2xsZXIgaW1wbGVtZW50cyBpbnRlcmZhY2VzLkNvbnRyb2xsZXIge1xuIFxuICAgIGNvbnN0cnVjdG9yKCBAaW5qZWN0KFwiRm9vU2VydmljZVwiKSBwcml2YXRlIGZvb1NlcnZpY2U6IEZvb1NlcnZpY2UgKSB7fVxuIFxuICAgIEBodHRwR2V0KFwiL1wiKVxuICAgIHByaXZhdGUgaW5kZXgocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5mb29TZXJ2aWNlLmdldCgpO1xuICAgIH1cbiBcbiAgICAvLyBAaHR0cEdldChcIi9cIilcbiAgICAvLyBwcml2YXRlIGxpc3QoQHF1ZXJ5UGFyYW0oXCJzdGFydFwiKSBzdGFydDogbnVtYmVyLCBAcXVlcnlQYXJhbShcImNvdW50XCIpIGNvdW50OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5mb29TZXJ2aWNlLmdldChzdGFydCwgY291bnQpO1xuICAgIC8vIH1cbiBcbiAgICAvLyBAaHR0cFBvc3QoXCIvXCIpXG4gICAgLy8gcHJpdmF0ZSBhc3luYyBjcmVhdGUoQHJlcXVlc3QoKSByZXE6IGV4cHJlc3MuUmVxdWVzdCwgQHJlc3BvbnNlKCkgcmVzOiBleHByZXNzLlJlc3BvbnNlKSB7XG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgICBhd2FpdCB0aGlzLmZvb1NlcnZpY2UuY3JlYXRlKHJlcS5ib2R5KTtcbiAgICAvLyAgICAgICAgIHJlcy5zZW5kU3RhdHVzKDIwMSk7XG4gICAgLy8gICAgIH0gY2F0Y2ggKGVycikge1xuICAgIC8vICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gXG4gICAgLy8gQGh0dHBEZWxldGUoXCIvOmlkXCIpXG4gICAgLy8gcHJpdmF0ZSBkZWxldGUoQHJlcXVlc3RQYXJhbShcImlkXCIpIGlkOiBzdHJpbmcsIEByZXNwb25zZSgpIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5mb29TZXJ2aWNlLmRlbGV0ZShpZClcbiAgICAvLyAgICAgICAgIC50aGVuKCgpID0+IHJlcy5zZW5kU3RhdHVzKDIwNCkpXG4gICAgLy8gICAgICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBlcnIubWVzc2FnZSB9KTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vIH1cbn0iXX0=
