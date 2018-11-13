"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const request = require("request");
let PeddiCloudIntegrationAdapter = class PeddiCloudIntegrationAdapter {
    authenticate(tokenWithRestaurantInformation) {
        console.log("Chegou na camada de integração");
        console.log(tokenWithRestaurantInformation);
        return new Promise((resolve, reject) => {
            request.post({
                headers: {
                    'Authorization': tokenWithRestaurantInformation
                },
                url: 'http://192.168.0.23:3000/api/authenticate/local'
            }, (err, resp, req) => __awaiter(this, void 0, void 0, function* () {
                if (!err) {
                    let headerValue = yield resp.headers['authorization'];
                    // body = await this.tokenDecoder(body);
                    // console.log(req.headers['authorization']);
                    // let headerValue = req.headers['authorization'];
                    console.log("Header Value Integration");
                    console.log(headerValue);
                    return resolve(headerValue);
                }
                else {
                    return reject(err);
                }
            }));
        });
    }
    sendOrder(order, token) {
        console.log(order);
        console.log(token);
        let jsonOrder = JSON.stringify(order);
        console.log(jsonOrder);
        return new Promise((resolve, reject) => {
            request.post({
                headers: {
                    'authorization': token,
                    'Content-Type': 'application/json'
                },
                url: 'http://192.168.0.23:3000/api/bills',
                body: jsonOrder
            }, (err, resp, body) => __awaiter(this, void 0, void 0, function* () {
                if (!err) {
                    // body = await this.tokenDecoder(body);
                    console.log(body);
                    return resolve(body);
                }
                else {
                    return reject(err);
                }
            }));
        });
    }
};
PeddiCloudIntegrationAdapter = __decorate([
    inversify_1.injectable()
], PeddiCloudIntegrationAdapter);
exports.default = PeddiCloudIntegrationAdapter;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktb3V0Ym91bmQvaW50ZWdyYXRpb24vZXh0ZXJuYWwtcGVkZGktYXBpL2ltcGxlbWVudGF0aW9uL3BlZGRpLWNsb3VkLmludGVncmF0aW9uLWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlDQUF1QztBQUd2QyxtQ0FBb0M7QUFNcEMsSUFBcUIsNEJBQTRCLEdBQWpELE1BQXFCLDRCQUE0QjtJQUc3QyxZQUFZLENBQUMsOEJBQW1DO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFFNUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNuQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDTCxlQUFlLEVBQUUsOEJBQThCO2lCQUNsRDtnQkFDRCxHQUFHLEVBQUUsaURBQWlEO2FBQ3pELEVBQUUsQ0FBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQVksRUFBRSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUNOLElBQUksV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDdEQsd0NBQXdDO29CQUN4Qyw2Q0FBNkM7b0JBQzdDLGtEQUFrRDtvQkFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO29CQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN6QixPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDL0I7cUJBQ0k7b0JBQ0QsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3RCO1lBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFhLEVBQUUsS0FBVTtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBR3RCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDbkMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ0wsZUFBZSxFQUFHLEtBQUs7b0JBQ3ZCLGNBQWMsRUFBRyxrQkFBa0I7aUJBQ3RDO2dCQUNELEdBQUcsRUFBRSxvQ0FBb0M7Z0JBQ3pDLElBQUksRUFBRSxTQUFTO2FBQ2xCLEVBQUUsQ0FBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUN6QixJQUFJLENBQUMsR0FBRyxFQUFFO29CQUNOLHdDQUF3QztvQkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3hCO3FCQUNJO29CQUNELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN0QjtZQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FFSixDQUFBO0FBMURvQiw0QkFBNEI7SUFEaEQsc0JBQVUsRUFBRTtHQUNRLDRCQUE0QixDQTBEaEQ7a0JBMURvQiw0QkFBNEIiLCJmaWxlIjoiYXBpLW91dGJvdW5kL2ludGVncmF0aW9uL2V4dGVybmFsLXBlZGRpLWFwaS9pbXBsZW1lbnRhdGlvbi9wZWRkaS1jbG91ZC5pbnRlZ3JhdGlvbi1hZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBlZGRpQ2xvdWRJbnRlZ3JhdGlvblBvcnQgZnJvbSBcIi4uL3BlZGRpLWNsb3VkLmludGVncmF0aW9uLXBvcnRcIjtcbmltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInVybFwiO1xuaW1wb3J0IHsgcmVqZWN0cyB9IGZyb20gXCJhc3NlcnRcIjtcbmltcG9ydCByZXF1ZXN0ID0gcmVxdWlyZSgncmVxdWVzdCcpO1xuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBqc29uIH0gZnJvbSBcImJvZHktcGFyc2VyXCI7XG5cblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVkZGlDbG91ZEludGVncmF0aW9uQWRhcHRlciBpbXBsZW1lbnRzIFBlZGRpQ2xvdWRJbnRlZ3JhdGlvblBvcnQge1xuXG5cbiAgICBhdXRoZW50aWNhdGUodG9rZW5XaXRoUmVzdGF1cmFudEluZm9ybWF0aW9uOiBhbnkpOiBQcm9taXNlPE9iamVjdD4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNoZWdvdSBuYSBjYW1hZGEgZGUgaW50ZWdyYcOnw6NvXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2tlbldpdGhSZXN0YXVyYW50SW5mb3JtYXRpb24pO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0LnBvc3Qoe1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlbldpdGhSZXN0YXVyYW50SW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xOTIuMTY4LjAuMjM6MzAwMC9hcGkvYXV0aGVudGljYXRlL2xvY2FsJ1xuICAgICAgICAgICAgfSwgYXN5bmMgKGVyciwgcmVzcCwgcmVxOiBSZXF1ZXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlYWRlclZhbHVlID0gYXdhaXQgcmVzcC5oZWFkZXJzWydhdXRob3JpemF0aW9uJ107XG4gICAgICAgICAgICAgICAgICAgIC8vIGJvZHkgPSBhd2FpdCB0aGlzLnRva2VuRGVjb2Rlcihib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVxLmhlYWRlcnNbJ2F1dGhvcml6YXRpb24nXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBoZWFkZXJWYWx1ZSA9IHJlcS5oZWFkZXJzWydhdXRob3JpemF0aW9uJ107XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSGVhZGVyIFZhbHVlIEludGVncmF0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhoZWFkZXJWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGhlYWRlclZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VuZE9yZGVyKG9yZGVyOiBPYmplY3QsIHRva2VuOiBhbnkpOiBQcm9taXNlPE9iamVjdD4ge1xuICAgICAgICBjb25zb2xlLmxvZyhvcmRlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcbiAgICAgICAgbGV0IGpzb25PcmRlciA9IEpTT04uc3RyaW5naWZ5KG9yZGVyKTtcbiAgICAgICAgY29uc29sZS5sb2coanNvbk9yZGVyKVxuXG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3QucG9zdCh7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnYXV0aG9yaXphdGlvbicgOiB0b2tlbixcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xOTIuMTY4LjAuMjM6MzAwMC9hcGkvYmlsbHMnLFxuICAgICAgICAgICAgICAgIGJvZHk6IGpzb25PcmRlclxuICAgICAgICAgICAgfSwgYXN5bmMgKGVyciwgcmVzcCwgYm9keSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJvZHkgPSBhd2FpdCB0aGlzLnRva2VuRGVjb2Rlcihib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYm9keSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGJvZHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn0iXX0=
