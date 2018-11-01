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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktaW5ib3VuZC9jb250cm9sbGVycy9mb28uY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBbUM7QUFDbkMscUVBQTZJO0FBQzdJLHlDQUErQztBQUkvQyxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBRXRCLFlBQTJDLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBSSxDQUFDO0lBRzlELEtBQUssQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7UUFDakYsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Q0F5QkosQ0FBQTtBQTNCRztJQURDLGlDQUFPLENBQUMsR0FBRyxDQUFDOzs7OzBDQUdaO0FBUFEsYUFBYTtJQUR6QixvQ0FBVSxDQUFDLE1BQU0sQ0FBQztJQUdELFdBQUEsa0JBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTs7R0FGekIsYUFBYSxDQWdDekI7QUFoQ1ksc0NBQWEiLCJmaWxlIjoiYXBpLWluYm91bmQvY29udHJvbGxlcnMvZm9vLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBpbnRlcmZhY2VzLCBjb250cm9sbGVyLCBodHRwR2V0LCBodHRwUG9zdCwgaHR0cERlbGV0ZSwgcmVxdWVzdCwgcXVlcnlQYXJhbSwgcmVzcG9uc2UsIHJlcXVlc3RQYXJhbSB9IGZyb20gXCJpbnZlcnNpZnktZXhwcmVzcy11dGlsc1wiO1xuaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IEZvb1NlcnZpY2UgZnJvbSBcIi4uLy4uL2FwaS1jb3JlL2hhbmRsZXIvZm9vLnNlcnZpY2VcIjtcblxuQGNvbnRyb2xsZXIoXCIvZm9vXCIpXG5leHBvcnQgY2xhc3MgRm9vQ29udHJvbGxlciBpbXBsZW1lbnRzIGludGVyZmFjZXMuQ29udHJvbGxlciB7XG4gXG4gICAgY29uc3RydWN0b3IoIEBpbmplY3QoXCJGb29TZXJ2aWNlXCIpIHByaXZhdGUgZm9vU2VydmljZTogRm9vU2VydmljZSApIHt9XG4gXG4gICAgQGh0dHBHZXQoXCIvXCIpXG4gICAgcHJpdmF0ZSBpbmRleChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvb1NlcnZpY2UuZ2V0KCk7XG4gICAgfVxuIFxuICAgIC8vIEBodHRwR2V0KFwiL1wiKVxuICAgIC8vIHByaXZhdGUgbGlzdChAcXVlcnlQYXJhbShcInN0YXJ0XCIpIHN0YXJ0OiBudW1iZXIsIEBxdWVyeVBhcmFtKFwiY291bnRcIikgY291bnQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmZvb1NlcnZpY2UuZ2V0KHN0YXJ0LCBjb3VudCk7XG4gICAgLy8gfVxuIFxuICAgIC8vIEBodHRwUG9zdChcIi9cIilcbiAgICAvLyBwcml2YXRlIGFzeW5jIGNyZWF0ZShAcmVxdWVzdCgpIHJlcTogZXhwcmVzcy5SZXF1ZXN0LCBAcmVzcG9uc2UoKSByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIHtcbiAgICAvLyAgICAgdHJ5IHtcbiAgICAvLyAgICAgICAgIGF3YWl0IHRoaXMuZm9vU2VydmljZS5jcmVhdGUocmVxLmJvZHkpO1xuICAgIC8vICAgICAgICAgcmVzLnNlbmRTdGF0dXMoMjAxKTtcbiAgICAvLyAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBlcnIubWVzc2FnZSB9KTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiBcbiAgICAvLyBAaHR0cERlbGV0ZShcIi86aWRcIilcbiAgICAvLyBwcml2YXRlIGRlbGV0ZShAcmVxdWVzdFBhcmFtKFwiaWRcIikgaWQ6IHN0cmluZywgQHJlc3BvbnNlKCkgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmZvb1NlcnZpY2UuZGVsZXRlKGlkKVxuICAgIC8vICAgICAgICAgLnRoZW4oKCkgPT4gcmVzLnNlbmRTdGF0dXMoMjA0KSlcbiAgICAvLyAgICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IGVyci5tZXNzYWdlIH0pO1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gfVxufSJdfQ==
