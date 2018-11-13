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
const request = require("request");
const inversify_1 = require("inversify");
let EpocIntegrationAdapter = class EpocIntegrationAdapter {
    tokenGenerator(systemAuth) {
        return __awaiter(this, void 0, void 0, function* () {
            // let sistemaAuth: SistemaAuth = new SistemaAuth();
            // let sistemaAuthString: string;
            // sistemaAuth.hashemp = config.hashemp;
            // sistemaAuth.mac = config.mac;
            // sistemaAuth.service = 'geraToken';
            // sistemaAuth.tokenParceiro = config.tokenParceiro;
            // sistemaAuth.saltParceiro = config.saltParceiro;
            // sistemaAuthString = querystring.stringify(sistemaAuth);
            return new Promise((resolve, reject) => {
                request.post({
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json'
                    },
                    url: process.env.EPOC_URL + `/API/mod_valida_parceiro/index.php`,
                }, (err, resp, body) => {
                    if (!err) {
                        return resolve(body);
                    }
                    else {
                        return reject(err);
                    }
                });
            });
        });
    }
    venderItem(order) {
        throw new Error("Method not implemented.");
    }
    getExtrato(objExtrato) {
        throw new Error("Method not implemented.");
    }
    getProducts() {
        throw new Error("Method not implemented.");
    }
};
EpocIntegrationAdapter = __decorate([
    inversify_1.injectable()
], EpocIntegrationAdapter);
exports.default = EpocIntegrationAdapter;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktb3V0Ym91bmQvaW50ZWdyYXRpb24vZXBvYy1hcGkvaW1wbGVtZW50YXRpb24vZXBvYy5pbnRlZ3JhdGlvbi1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtQ0FBb0M7QUFDcEMseUNBQXVDO0FBR3ZDLElBQXFCLHNCQUFzQixHQUEzQyxNQUFxQixzQkFBc0I7SUFDakMsY0FBYyxDQUFDLFVBQWU7O1lBRWhDLG9EQUFvRDtZQUMxRCxpQ0FBaUM7WUFDakMsd0NBQXdDO1lBQ3hDLGdDQUFnQztZQUNoQyxxQ0FBcUM7WUFDckMsb0RBQW9EO1lBQ3BELGtEQUFrRDtZQUNsRCwwREFBMEQ7WUFFcEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDNUMsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDWixPQUFPLEVBQUU7d0JBQ1IsY0FBYyxFQUFFLG1DQUFtQzt3QkFDbkQsUUFBUSxFQUFFLGtCQUFrQjtxQkFDNUI7b0JBQ0QsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLG9DQUFvQztpQkFFdkQsRUFBRSxDQUFDLEdBQVUsRUFBRSxJQUFTLEVBQUUsSUFBUyxFQUFFLEVBQUU7b0JBQ2hELElBQUksQ0FBQyxHQUFHLEVBQUU7d0JBQ1QsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3JCO3lCQUNJO3dCQUNKLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNuQjtnQkFDRixDQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFBO1FBQ0EsQ0FBQztLQUFBO0lBQ0QsVUFBVSxDQUFDLEtBQVU7UUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxVQUFVLENBQUMsVUFBZTtRQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELFdBQVc7UUFDUCxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUdKLENBQUE7QUF6Q29CLHNCQUFzQjtJQUQxQyxzQkFBVSxFQUFFO0dBQ1Esc0JBQXNCLENBeUMxQztrQkF6Q29CLHNCQUFzQiIsImZpbGUiOiJhcGktb3V0Ym91bmQvaW50ZWdyYXRpb24vZXBvYy1hcGkvaW1wbGVtZW50YXRpb24vZXBvYy5pbnRlZ3JhdGlvbi1hZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVwb2NJbnRlZ3JhdGlvblBvcnQgZnJvbSBcIi4uL2Vwb2MuaW50ZWdyYXRpb24tcG9ydFwiO1xuaW1wb3J0IHJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0Jyk7XG5pbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSBcImludmVyc2lmeVwiO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcG9jSW50ZWdyYXRpb25BZGFwdGVyIGltcGxlbWVudHMgRXBvY0ludGVncmF0aW9uUG9ydCB7XG4gICAgYXN5bmMgdG9rZW5HZW5lcmF0b3Ioc3lzdGVtQXV0aDogYW55KTogUHJvbWlzZTxPYmplY3Q+IHtcbiAgICAgICAgXG4gICAgICAgIC8vIGxldCBzaXN0ZW1hQXV0aDogU2lzdGVtYUF1dGggPSBuZXcgU2lzdGVtYUF1dGgoKTtcblx0XHQvLyBsZXQgc2lzdGVtYUF1dGhTdHJpbmc6IHN0cmluZztcblx0XHQvLyBzaXN0ZW1hQXV0aC5oYXNoZW1wID0gY29uZmlnLmhhc2hlbXA7XG5cdFx0Ly8gc2lzdGVtYUF1dGgubWFjID0gY29uZmlnLm1hYztcblx0XHQvLyBzaXN0ZW1hQXV0aC5zZXJ2aWNlID0gJ2dlcmFUb2tlbic7XG5cdFx0Ly8gc2lzdGVtYUF1dGgudG9rZW5QYXJjZWlybyA9IGNvbmZpZy50b2tlblBhcmNlaXJvO1xuXHRcdC8vIHNpc3RlbWFBdXRoLnNhbHRQYXJjZWlybyA9IGNvbmZpZy5zYWx0UGFyY2Vpcm87XG5cdFx0Ly8gc2lzdGVtYUF1dGhTdHJpbmcgPSBxdWVyeXN0cmluZy5zdHJpbmdpZnkoc2lzdGVtYUF1dGgpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHJlcXVlc3QucG9zdCh7XG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG5cdFx0XHRcdFx0J0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR1cmw6IHByb2Nlc3MuZW52LkVQT0NfVVJMICsgYC9BUEkvbW9kX3ZhbGlkYV9wYXJjZWlyby9pbmRleC5waHBgLFxuXHRcdFx0XHQvLyBib2R5OiBzaXN0ZW1hQXV0aFN0cmluZ1xuICAgICAgICAgICAgfSwgKGVycjogRXJyb3IsIHJlc3A6IGFueSwgYm9keTogYW55KSA9PiB7XG5cdFx0XHRcdGlmICghZXJyKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUoYm9keSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KVxuICAgIH0gXG4gICAgdmVuZGVySXRlbShvcmRlcjogYW55KTogU3RyaW5nIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIGdldEV4dHJhdG8ob2JqRXh0cmF0bzogYW55KTogU3RyaW5nIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIGdldFByb2R1Y3RzKCk6IFN0cmluZyB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxuXG59Il19
