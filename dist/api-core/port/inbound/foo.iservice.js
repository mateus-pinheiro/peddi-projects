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
    send() {
        throw new Error("Method not implemented.");
    }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktY29yZS9wb3J0L2luYm91bmQvZm9vLmlzZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEseUNBQStDO0FBSS9DLElBQXFCLHdCQUF3QixHQUE3QyxNQUFxQix3QkFBd0I7SUFDekMsSUFBSTtRQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsR0FBRztRQUNDLGdDQUFnQztRQUNoQyxPQUFPLDJCQUEyQixDQUFDO1FBQ25DLDhDQUE4QztJQUNsRCxDQUFDO0NBRUosQ0FBQTtBQVZvQix3QkFBd0I7SUFENUMsc0JBQVUsRUFBRTtHQUNRLHdCQUF3QixDQVU1QztrQkFWb0Isd0JBQXdCIiwiZmlsZSI6ImFwaS1jb3JlL3BvcnQvaW5ib3VuZC9mb28uaXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgRm9vU2VydmljZSBmcm9tIFwiLi4vLi4vaGFuZGxlci9mb28uc2VydmljZVwiO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb29JbXBsZW1lbnRhdGlvblNlcnZpY2UgaW1wbGVtZW50cyBGb29TZXJ2aWNlIHtcbiAgICBzZW5kKCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgZ2V0KCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGV1IGNlcnRvIG1sa1wiKTtcbiAgICAgICAgcmV0dXJuIFwiTGVrTG91Y29HVWxwZHNhZGFzYWRzYWZkc1wiO1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICBcbn0iXX0=
