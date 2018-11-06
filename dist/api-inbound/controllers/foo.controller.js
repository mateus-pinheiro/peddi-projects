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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktaW5ib3VuZC9jb250cm9sbGVycy9mb28uY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFtQztBQUNuQyxxRUFBNkk7QUFDN0kseUNBQStDO0FBSS9DLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFFdEIsWUFBMkMsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFJLENBQUM7SUFHOUQsR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtRQUMvRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUdhLElBQUksQ0FBWSxHQUFvQixFQUFjLEdBQXFCOztZQUNqRixJQUFJO2dCQUNBLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDaEQ7UUFDTCxDQUFDO0tBQUE7Q0FpQkosQ0FBQTtBQTdCRztJQURDLGlDQUFPLENBQUMsR0FBRyxDQUFDOzs7O3dDQUdaO0FBR0Q7SUFEQyxrQ0FBUSxDQUFDLEdBQUcsQ0FBQztJQUNNLFdBQUEsaUNBQU8sRUFBRSxDQUFBLEVBQXdCLFdBQUEsa0NBQVEsRUFBRSxDQUFBOzs7O3lDQU85RDtBQWpCUSxhQUFhO0lBRHpCLG9DQUFVLENBQUMsTUFBTSxDQUFDO0lBR0QsV0FBQSxrQkFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBOztHQUZ6QixhQUFhLENBa0N6QjtBQWxDWSxzQ0FBYSIsImZpbGUiOiJhcGktaW5ib3VuZC9jb250cm9sbGVycy9mb28uY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IGludGVyZmFjZXMsIGNvbnRyb2xsZXIsIGh0dHBHZXQsIGh0dHBQb3N0LCBodHRwRGVsZXRlLCByZXF1ZXN0LCBxdWVyeVBhcmFtLCByZXNwb25zZSwgcmVxdWVzdFBhcmFtIH0gZnJvbSBcImludmVyc2lmeS1leHByZXNzLXV0aWxzXCI7XG5pbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgRm9vU2VydmljZSBmcm9tIFwiLi4vLi4vYXBpLWNvcmUvaGFuZGxlci9mb28uc2VydmljZVwiO1xuXG5AY29udHJvbGxlcihcIi9mb29cIilcbmV4cG9ydCBjbGFzcyBGb29Db250cm9sbGVyIGltcGxlbWVudHMgaW50ZXJmYWNlcy5Db250cm9sbGVyIHtcbiBcbiAgICBjb25zdHJ1Y3RvciggQGluamVjdChcIkZvb1NlcnZpY2VcIikgcHJpdmF0ZSBmb29TZXJ2aWNlOiBGb29TZXJ2aWNlICkge31cbiBcbiAgICBAaHR0cEdldChcIi9cIilcbiAgICBwcml2YXRlIGdldChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvb1NlcnZpY2UuZ2V0KCk7XG4gICAgfVxuXG4gICAgQGh0dHBQb3N0KFwiL1wiKVxuICAgIHByaXZhdGUgYXN5bmMgc2VuZChAcmVxdWVzdCgpIHJlcTogZXhwcmVzcy5SZXF1ZXN0LCBAcmVzcG9uc2UoKSByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZm9vU2VydmljZS5zZW5kKHJlcS5ib2R5KTtcbiAgICAgICAgICAgIHJlcy5zZW5kU3RhdHVzKDIwMSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gXG4gICAgLy8gQGh0dHBHZXQoXCIvXCIpXG4gICAgLy8gcHJpdmF0ZSBsaXN0KEBxdWVyeVBhcmFtKFwic3RhcnRcIikgc3RhcnQ6IG51bWJlciwgQHF1ZXJ5UGFyYW0oXCJjb3VudFwiKSBjb3VudDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuZm9vU2VydmljZS5nZXQoc3RhcnQsIGNvdW50KTtcbiAgICAvLyB9XG4gXG4gICBcbiBcbiAgICAvLyBAaHR0cERlbGV0ZShcIi86aWRcIilcbiAgICAvLyBwcml2YXRlIGRlbGV0ZShAcmVxdWVzdFBhcmFtKFwiaWRcIikgaWQ6IHN0cmluZywgQHJlc3BvbnNlKCkgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmZvb1NlcnZpY2UuZGVsZXRlKGlkKVxuICAgIC8vICAgICAgICAgLnRoZW4oKCkgPT4gcmVzLnNlbmRTdGF0dXMoMjA0KSlcbiAgICAvLyAgICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IGVyci5tZXNzYWdlIH0pO1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gfVxufSJdfQ==
