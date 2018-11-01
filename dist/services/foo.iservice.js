"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
let FooImplementationService = class FooImplementationService {
    get() {
        // console.log("Deu certo mlk");
        return "LekLoucoGUlpdsadasadsafds";
        // throw new Error("Method not implemented.");
    }
};
FooImplementationService = __decorate([
    inversify_1.injectable()
], FooImplementationService);
exports.default = FooImplementationService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2aWNlcy9mb28uaXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx5Q0FBK0M7QUFJL0MsSUFBcUIsd0JBQXdCLEdBQTdDLE1BQXFCLHdCQUF3QjtJQUN6QyxHQUFHO1FBQ0MsZ0NBQWdDO1FBQ2hDLE9BQU8sMkJBQTJCLENBQUM7UUFDbkMsOENBQThDO0lBQ2xELENBQUM7Q0FFSixDQUFBO0FBUG9CLHdCQUF3QjtJQUQ1QyxzQkFBVSxFQUFFO0dBQ1Esd0JBQXdCLENBTzVDO2tCQVBvQix3QkFBd0IiLCJmaWxlIjoic2VydmljZXMvZm9vLmlzZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IEZvb1NlcnZpY2UgZnJvbSBcIi4vZm9vLnNlcnZpY2VcIjtcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vSW1wbGVtZW50YXRpb25TZXJ2aWNlIGltcGxlbWVudHMgRm9vU2VydmljZSB7XG4gICAgZ2V0KCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGV1IGNlcnRvIG1sa1wiKTtcbiAgICAgICAgcmV0dXJuIFwiTGVrTG91Y29HVWxwZHNhZGFzYWRzYWZkc1wiO1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICBcbn0iXX0=
