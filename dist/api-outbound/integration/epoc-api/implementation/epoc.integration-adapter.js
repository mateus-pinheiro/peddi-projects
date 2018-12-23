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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const crypto = require("crypto");
const querystring = require("querystring");
const epoc_dto_1 = require("../../../dto/epoc.dto");
const inversify_1 = require("inversify");
const response_epoc_1 = __importDefault(require("../../../envelopes/response.epoc"));
let EpocIntegrationAdapter = class EpocIntegrationAdapter {
    tokenGenerator(systemAuth) {
        return __awaiter(this, void 0, void 0, function* () {
            let sistemaAuth = new epoc_dto_1.SistemaAuth();
            let sistemaAuthString;
            sistemaAuth.hashemp = systemAuth.hashemp;
            sistemaAuth.mac = systemAuth.mac;
            sistemaAuth.service = 'geraToken';
            sistemaAuth.tokenParceiro = systemAuth.tokenParceiro;
            sistemaAuth.saltParceiro = systemAuth.saltParceiro;
            sistemaAuthString = querystring.stringify(sistemaAuth);
            return new Promise((resolve, reject) => {
                request.post({
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json'
                    },
                    url: process.env.EPOC_URL + `/API/mod_valida_parceiro/index.php`,
                    body: sistemaAuthString
                }, (err, resp, body) => {
                    if (!err) {
                        body = this.tokenDecoder(body);
                        console.log(body);
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
        return __awaiter(this, void 0, void 0, function* () {
            // let payload: any;
            let consumerCard;
            let token;
            let sistemaGestaoPayload;
            let venderItem = new epoc_dto_1.VendaItem();
            let orderIt = new epoc_dto_1.OrderItem();
            // let produtos: Array<Produtos> = new Array<Produtos>();
            // produtos = order.products;
            // payload = await this.tokenManager.decodificaToken(JSON.parse(body.tokenPeddi));
            // payload = payload;
            sistemaGestaoPayload = this.sistemaAuth();
            token = yield this.tokenGenerator(sistemaGestaoPayload);
            consumerCard = order.ticket;
            venderItem.mac = sistemaGestaoPayload.mac;
            venderItem.hashemp = sistemaGestaoPayload.hashemp;
            venderItem.ult_mesa = order.table;
            venderItem.service = 'GravarVendaItem';
            let tokenData = yield this.tokenDecoder(token);
            venderItem.token = tokenData.data;
            orderIt.CODEVENTO = "";
            orderIt.HOST = venderItem.mac;
            let orderItem = {
                [consumerCard]: orderIt
                // {
                // 	// HOST: venderItem.mac,
                // 	// CODEVENTO: "",
                // 	itens: Array<Item>()
                // }
            };
            for (let i = 0; i < order.products.length; i++) {
                let productQuantity = order.products[i].quantity;
                // let item = {
                // 	quantidade: 1,
                // 	codigo: order.products[i].epoc_id,
                // 	cod_func_autoriz: "",
                // 	motivo_autorizacao: "1",
                // 	cod_func: order.responsibleEmployee.epoc_id,
                // 	marchar: 0,
                // 	valor: order.products[i].price,
                // 	tipoItem: "P",
                // 	lanceItem: "S",
                // 	acrescimo: 0,
                // 	desconto: 0,
                // 	obs: [
                // 		{}
                // 	]
                // }
                let item = new epoc_dto_1.Item();
                item.quantidade = 1;
                item.codigo = order.products[i].epoc_id;
                item.cod_func_autoriz = "";
                item.motivo_autorizacao = "";
                item.cod_func = order.responsibleEmployee.epoc_id;
                item.marchar = 0;
                item.valor = order.products[i].price;
                item.tipoItem = "P";
                item.lanceItem = "S";
                item.acrescimo = 0;
                item.desconto = 0;
                item.obs = new Array();
                if (order.products[i].ingredients !== null && order.products[i].ingredients.length > 0) {
                    for (let j = 0; j < order.products[i].ingredients.length; j++) {
                        item.obs[j] = new epoc_dto_1.ItemObs();
                        item.obs[j].desc_obs = order.products[i].ingredients[j].name;
                        item.obs[j].cod_obs = order.products[i].ingredients[j].epoc_id;
                        item.obs[j].cod_modificador = 0;
                    }
                }
                for (let q = 0; q < productQuantity; q++) {
                    orderItem[consumerCard].ITENS.push(item);
                }
                // orderItem[comanda].ITENS[i] = {
                // 	quantidade: order.products[i].quantity,
                // 	codigo: order.products[i].epoc_id,
                // 	cod_func_autoriz: "",
                // 	motivo_autorizacao: "1",
                // 	cod_func: order.responsibleEmployee.epoc_id,
                // 	marchar: 0,
                // 	valor: order.products[i].price,
                // 	tipoItem: "P",
                // 	lanceItem: "S",
                // 	acrescimo: 0,
                // 	desconto: 0,
                // 	obs: []
                // }
                // if (order.products[i].ingredients !== null && order.products[i].ingredients.length > 0) {
                // 	for (let j = 0; j < order.products[i].ingredients.length; j++) {
                // 		orderItem[comanda].ITENS[i].obs[j] = {
                // 			desc_obs: order.products[i].ingredients[j].name,
                // 			cod_obs: order.products[i].ingredients[j].epoc_id,
                // 			cod_modificador: 0
                // 		}
                // 	}
                // }
            }
            let stringSalt = "";
            for (let i = 0; i < orderItem[consumerCard].ITENS.length; i++) {
                stringSalt += orderItem[consumerCard].ITENS[i].codigo + '_';
            }
            stringSalt = stringSalt.slice(0, -1);
            let itemConvert;
            let venderItemToString;
            itemConvert = JSON.stringify(orderItem);
            venderItem.dataVenda = new Buffer(itemConvert).toString('base64');
            venderItem.salt = crypto.createHash('md5').update(stringSalt).digest("hex");
            venderItemToString = querystring.stringify(venderItem);
            // return new Promise<ResponseEpoc>((resolve, reject) => {
            // })
            return new Promise((resolve, reject) => {
                request.post({
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json'
                    },
                    url: `http://llm09.epoc2.cdmon.org:56478/API/mod_venda_item/index.php`,
                    body: venderItemToString
                }, (err, resp, body) => __awaiter(this, void 0, void 0, function* () {
                    if (!err) {
                        body = yield this.tokenDecoder(body);
                        console.log(body);
                        return new response_epoc_1.default(body);
                    }
                    else {
                        return reject(err);
                    }
                }));
            });
        });
    }
    getExtrato(objExtrato) {
        throw new Error("Method not implemented.");
    }
    getProducts() {
        throw new Error("Method not implemented.");
    }
    tokenDecoder(token) {
        return __awaiter(this, void 0, void 0, function* () {
            let decodeBuffer = new Buffer(token, 'base64');
            let tokenDecoded;
            decodeBuffer = decodeBuffer.toString('ascii');
            tokenDecoded = JSON.parse(decodeBuffer);
            return tokenDecoded;
        });
    }
    sistemaAuth() {
        let epocAuth = new epoc_dto_1.SistemaAuth();
        epocAuth.hashemp = 'da2g39jbcdja8601';
        epocAuth.mac = 'e4:c1:dd:c0:9a:4d';
        epocAuth.tokenParceiro = '353c1ea3-682b-4754-91ef-f55d05aec758';
        epocAuth.saltParceiro = crypto.createHash('md5').update(epocAuth.tokenParceiro + '__TOKEN__').digest("hex");
        return epocAuth;
    }
    ;
};
EpocIntegrationAdapter = __decorate([
    inversify_1.injectable()
], EpocIntegrationAdapter);
exports.default = EpocIntegrationAdapter;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktb3V0Ym91bmQvaW50ZWdyYXRpb24vZXBvYy1hcGkvaW1wbGVtZW50YXRpb24vZXBvYy5pbnRlZ3JhdGlvbi1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtQ0FBb0M7QUFDcEMsaUNBQWtDO0FBQ2xDLDJDQUE0QztBQUU1QyxvREFTK0I7QUFDL0IseUNBQXVDO0FBQ3ZDLHFGQUE0RDtBQUs1RCxJQUFxQixzQkFBc0IsR0FBM0MsTUFBcUIsc0JBQXNCO0lBR3BDLGNBQWMsQ0FBQyxVQUFlOztZQUVuQyxJQUFJLFdBQVcsR0FBZ0IsSUFBSSxzQkFBVyxFQUFFLENBQUM7WUFDakQsSUFBSSxpQkFBeUIsQ0FBQztZQUM5QixXQUFXLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDekMsV0FBVyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQ2pDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1lBQ2xDLFdBQVcsQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUNyRCxXQUFXLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUM7WUFDbkQsaUJBQWlCLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUV2RCxPQUFPLElBQUksT0FBTyxDQUFlLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNwRCxPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNaLE9BQU8sRUFBRTt3QkFDUixjQUFjLEVBQUUsbUNBQW1DO3dCQUNuRCxRQUFRLEVBQUUsa0JBQWtCO3FCQUM1QjtvQkFDRCxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsb0NBQW9DO29CQUNoRSxJQUFJLEVBQUUsaUJBQWlCO2lCQUN2QixFQUFFLENBQUMsR0FBVSxFQUFFLElBQVMsRUFBRSxJQUFT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QUFDLENBQUM7SUFDNUMsQ0FBQztJQUVhLFlBQVksQ0FBQyxLQUFVOztZQUNwQyxJQUFJLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0MsSUFBSSxZQUFpQixDQUFDO1lBQ3RCLFlBQVksR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sWUFBWSxDQUFDO1FBQ3JCLENBQUM7S0FBQTtJQUVELFdBQVc7UUFFVixJQUFJLFFBQVEsR0FBRyxJQUFJLHNCQUFXLEVBQUUsQ0FBQztRQUNqQyxRQUFRLENBQUMsT0FBTyxHQUFHLGtCQUFrQixDQUFDO1FBQ3RDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsbUJBQW1CLENBQUM7UUFDbkMsUUFBUSxDQUFDLGFBQWEsR0FBRyxzQ0FBc0MsQ0FBQztRQUNoRSxRQUFRLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVHLE9BQU8sUUFBUSxDQUFDO0lBQ2pCLENBQUM7SUFBQSxDQUFDO0NBRUYsQ0FBQTtBQW5Ob0Isc0JBQXNCO0lBRDFDLHNCQUFVLEVBQUU7R0FDUSxzQkFBc0IsQ0FtTjFDO2tCQW5Ob0Isc0JBQXNCIiwiZmlsZSI6ImFwaS1vdXRib3VuZC9pbnRlZ3JhdGlvbi9lcG9jLWFwaS9pbXBsZW1lbnRhdGlvbi9lcG9jLmludGVncmF0aW9uLWFkYXB0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXBvY0ludGVncmF0aW9uUG9ydCBmcm9tIFwiLi4vZXBvYy5pbnRlZ3JhdGlvbi1wb3J0XCI7XG5pbXBvcnQgcmVxdWVzdCA9IHJlcXVpcmUoJ3JlcXVlc3QnKTtcbmltcG9ydCBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcbmltcG9ydCBxdWVyeXN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5c3RyaW5nJyk7XG5cbmltcG9ydCB7XG5cdENvbWFuZGEsXG5cdFZlbmRhSXRlbSxcblx0T3JkZXJJdGVtLFxuXHRJdGVtLFxuXHRJdGVtT2JzLFxuXHRDYXJnYVByb2R1dG8sXG5cdEV4dHJhdG8sXG5cdFNpc3RlbWFBdXRoXG59IGZyb20gJy4uLy4uLy4uL2R0by9lcG9jLmR0byc7XG5pbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IFJlc3BvbnNlRXBvYyBmcm9tIFwiLi4vLi4vLi4vZW52ZWxvcGVzL3Jlc3BvbnNlLmVwb2NcIjtcbmltcG9ydCB7IHJlamVjdHMgfSBmcm9tIFwiYXNzZXJ0XCI7XG5kZWNsYXJlIGNvbnN0IEJ1ZmZlcjogYW55O1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcG9jSW50ZWdyYXRpb25BZGFwdGVyIGltcGxlbWVudHMgRXBvY0ludGVncmF0aW9uUG9ydCB7XG5cblxuXHRhc3luYyB0b2tlbkdlbmVyYXRvcihzeXN0ZW1BdXRoOiBhbnkpOiBQcm9taXNlPFJlc3BvbnNlRXBvYz4ge1xuXG5cdFx0bGV0IHNpc3RlbWFBdXRoOiBTaXN0ZW1hQXV0aCA9IG5ldyBTaXN0ZW1hQXV0aCgpO1xuXHRcdGxldCBzaXN0ZW1hQXV0aFN0cmluZzogc3RyaW5nO1xuXHRcdHNpc3RlbWFBdXRoLmhhc2hlbXAgPSBzeXN0ZW1BdXRoLmhhc2hlbXA7XG5cdFx0c2lzdGVtYUF1dGgubWFjID0gc3lzdGVtQXV0aC5tYWM7XG5cdFx0c2lzdGVtYUF1dGguc2VydmljZSA9ICdnZXJhVG9rZW4nO1xuXHRcdHNpc3RlbWFBdXRoLnRva2VuUGFyY2Vpcm8gPSBzeXN0ZW1BdXRoLnRva2VuUGFyY2Vpcm87XG5cdFx0c2lzdGVtYUF1dGguc2FsdFBhcmNlaXJvID0gc3lzdGVtQXV0aC5zYWx0UGFyY2Vpcm87XG5cdFx0c2lzdGVtYUF1dGhTdHJpbmcgPSBxdWVyeXN0cmluZy5zdHJpbmdpZnkoc2lzdGVtYUF1dGgpO1xuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPFJlc3BvbnNlRXBvYz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0cmVxdWVzdC5wb3N0KHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcblx0XHRcdFx0XHQnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHVybDogcHJvY2Vzcy5lbnYuRVBPQ19VUkwgKyBgL0FQSS9tb2RfdmFsaWRhX3BhcmNlaXJvL2luZGV4LnBocGAsXG5cdFx0XHRcdGJvZHk6IHNpc3RlbWFBdXRoU3RyaW5nXG5cdFx0XHR9LCAoZXJyOiBFcnJvciwgcmVzcDogYW55LCBib2R5OiBhbnkpID0+IHtcblx0XHRcdFx0aWYgKCFlcnIpIHtcblx0XHRcdFx0XHRib2R5ID0gdGhpcy50b2tlbkRlY29kZXIoYm9keSk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYm9keSk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUoYm9keSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9XG5cblx0YXN5bmMgdmVuZGVySXRlbShvcmRlcjogYW55KTogUHJvbWlzZTxSZXNwb25zZUVwb2M+IHtcblx0XHQvLyBsZXQgcGF5bG9hZDogYW55O1xuXHRcdGxldCBjb25zdW1lckNhcmQ6IHN0cmluZztcblx0XHRsZXQgdG9rZW46IGFueTtcblx0XHRsZXQgc2lzdGVtYUdlc3Rhb1BheWxvYWQ6IGFueTtcblx0XHRsZXQgdmVuZGVySXRlbTogVmVuZGFJdGVtID0gbmV3IFZlbmRhSXRlbSgpO1xuXHRcdGxldCBvcmRlckl0OiBPcmRlckl0ZW0gPSBuZXcgT3JkZXJJdGVtKCk7XG5cblxuXHRcdC8vIGxldCBwcm9kdXRvczogQXJyYXk8UHJvZHV0b3M+ID0gbmV3IEFycmF5PFByb2R1dG9zPigpO1xuXHRcdC8vIHByb2R1dG9zID0gb3JkZXIucHJvZHVjdHM7XG5cdFx0Ly8gcGF5bG9hZCA9IGF3YWl0IHRoaXMudG9rZW5NYW5hZ2VyLmRlY29kaWZpY2FUb2tlbihKU09OLnBhcnNlKGJvZHkudG9rZW5QZWRkaSkpO1xuXHRcdC8vIHBheWxvYWQgPSBwYXlsb2FkO1xuXHRcdHNpc3RlbWFHZXN0YW9QYXlsb2FkID0gdGhpcy5zaXN0ZW1hQXV0aCgpO1xuXHRcdHRva2VuID0gYXdhaXQgdGhpcy50b2tlbkdlbmVyYXRvcihzaXN0ZW1hR2VzdGFvUGF5bG9hZCk7XG5cdFx0Y29uc3VtZXJDYXJkID0gb3JkZXIudGlja2V0O1xuXG5cdFx0dmVuZGVySXRlbS5tYWMgPSBzaXN0ZW1hR2VzdGFvUGF5bG9hZC5tYWM7XG5cdFx0dmVuZGVySXRlbS5oYXNoZW1wID0gc2lzdGVtYUdlc3Rhb1BheWxvYWQuaGFzaGVtcDtcblx0XHR2ZW5kZXJJdGVtLnVsdF9tZXNhID0gb3JkZXIudGFibGU7XG5cdFx0dmVuZGVySXRlbS5zZXJ2aWNlID0gJ0dyYXZhclZlbmRhSXRlbSc7XG5cdFx0bGV0IHRva2VuRGF0YSA9IGF3YWl0IHRoaXMudG9rZW5EZWNvZGVyKHRva2VuKTtcblx0XHR2ZW5kZXJJdGVtLnRva2VuID0gdG9rZW5EYXRhLmRhdGE7XG5cblx0XHRvcmRlckl0LkNPREVWRU5UTyA9IFwiXCI7XG5cdFx0b3JkZXJJdC5IT1NUID0gdmVuZGVySXRlbS5tYWM7XG5cdFx0bGV0IG9yZGVySXRlbSA9IHtcblx0XHRcdFtjb25zdW1lckNhcmRdOiBvcmRlckl0XG5cblx0XHRcdC8vIHtcblxuXHRcdFx0Ly8gXHQvLyBIT1NUOiB2ZW5kZXJJdGVtLm1hYyxcblx0XHRcdC8vIFx0Ly8gQ09ERVZFTlRPOiBcIlwiLFxuXHRcdFx0Ly8gXHRpdGVuczogQXJyYXk8SXRlbT4oKVxuXHRcdFx0Ly8gfVxuXHRcdH1cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG9yZGVyLnByb2R1Y3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgcHJvZHVjdFF1YW50aXR5ID0gb3JkZXIucHJvZHVjdHNbaV0ucXVhbnRpdHk7XG5cblx0XHRcdC8vIGxldCBpdGVtID0ge1xuXHRcdFx0Ly8gXHRxdWFudGlkYWRlOiAxLFxuXHRcdFx0Ly8gXHRjb2RpZ286IG9yZGVyLnByb2R1Y3RzW2ldLmVwb2NfaWQsXG5cdFx0XHQvLyBcdGNvZF9mdW5jX2F1dG9yaXo6IFwiXCIsXG5cdFx0XHQvLyBcdG1vdGl2b19hdXRvcml6YWNhbzogXCIxXCIsXG5cdFx0XHQvLyBcdGNvZF9mdW5jOiBvcmRlci5yZXNwb25zaWJsZUVtcGxveWVlLmVwb2NfaWQsXG5cdFx0XHQvLyBcdG1hcmNoYXI6IDAsXG5cdFx0XHQvLyBcdHZhbG9yOiBvcmRlci5wcm9kdWN0c1tpXS5wcmljZSxcblx0XHRcdC8vIFx0dGlwb0l0ZW06IFwiUFwiLFxuXHRcdFx0Ly8gXHRsYW5jZUl0ZW06IFwiU1wiLFxuXHRcdFx0Ly8gXHRhY3Jlc2NpbW86IDAsXG5cdFx0XHQvLyBcdGRlc2NvbnRvOiAwLFxuXHRcdFx0Ly8gXHRvYnM6IFtcblx0XHRcdC8vIFx0XHR7fVxuXHRcdFx0Ly8gXHRdXG5cdFx0XHQvLyB9XG5cdFx0XHRsZXQgaXRlbTogSXRlbSA9IG5ldyBJdGVtKCk7XG5cdFx0XHRpdGVtLnF1YW50aWRhZGUgPSAxO1xuXHRcdFx0aXRlbS5jb2RpZ28gPSBvcmRlci5wcm9kdWN0c1tpXS5lcG9jX2lkO1xuXHRcdFx0aXRlbS5jb2RfZnVuY19hdXRvcml6ID0gXCJcIjtcblx0XHRcdGl0ZW0ubW90aXZvX2F1dG9yaXphY2FvID0gXCJcIjtcblx0XHRcdGl0ZW0uY29kX2Z1bmMgPSBvcmRlci5yZXNwb25zaWJsZUVtcGxveWVlLmVwb2NfaWQ7XG5cdFx0XHRpdGVtLm1hcmNoYXIgPSAwO1xuXHRcdFx0aXRlbS52YWxvciA9IG9yZGVyLnByb2R1Y3RzW2ldLnByaWNlO1xuXHRcdFx0aXRlbS50aXBvSXRlbSA9IFwiUFwiO1xuXHRcdFx0aXRlbS5sYW5jZUl0ZW0gPSBcIlNcIjtcblx0XHRcdGl0ZW0uYWNyZXNjaW1vID0gMDtcblx0XHRcdGl0ZW0uZGVzY29udG8gPSAwO1xuXHRcdFx0aXRlbS5vYnMgPSBuZXcgQXJyYXk8SXRlbU9icz4oKTtcblxuXHRcdFx0aWYgKG9yZGVyLnByb2R1Y3RzW2ldLmluZ3JlZGllbnRzICE9PSBudWxsICYmIG9yZGVyLnByb2R1Y3RzW2ldLmluZ3JlZGllbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBvcmRlci5wcm9kdWN0c1tpXS5pbmdyZWRpZW50cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGl0ZW0ub2JzW2pdID0gbmV3IEl0ZW1PYnMoKTtcblx0XHRcdFx0XHRpdGVtLm9ic1tqXS5kZXNjX29icyA9IG9yZGVyLnByb2R1Y3RzW2ldLmluZ3JlZGllbnRzW2pdLm5hbWU7XG5cdFx0XHRcdFx0aXRlbS5vYnNbal0uY29kX29icyA9IG9yZGVyLnByb2R1Y3RzW2ldLmluZ3JlZGllbnRzW2pdLmVwb2NfaWQ7XG5cdFx0XHRcdFx0aXRlbS5vYnNbal0uY29kX21vZGlmaWNhZG9yID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGxldCBxID0gMDsgcSA8IHByb2R1Y3RRdWFudGl0eTsgcSsrKSB7XG5cdFx0XHRcdG9yZGVySXRlbVtjb25zdW1lckNhcmRdLklURU5TLnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cblxuXHRcdFx0Ly8gb3JkZXJJdGVtW2NvbWFuZGFdLklURU5TW2ldID0ge1xuXHRcdFx0Ly8gXHRxdWFudGlkYWRlOiBvcmRlci5wcm9kdWN0c1tpXS5xdWFudGl0eSxcblx0XHRcdC8vIFx0Y29kaWdvOiBvcmRlci5wcm9kdWN0c1tpXS5lcG9jX2lkLFxuXHRcdFx0Ly8gXHRjb2RfZnVuY19hdXRvcml6OiBcIlwiLFxuXHRcdFx0Ly8gXHRtb3Rpdm9fYXV0b3JpemFjYW86IFwiMVwiLFxuXHRcdFx0Ly8gXHRjb2RfZnVuYzogb3JkZXIucmVzcG9uc2libGVFbXBsb3llZS5lcG9jX2lkLFxuXHRcdFx0Ly8gXHRtYXJjaGFyOiAwLFxuXHRcdFx0Ly8gXHR2YWxvcjogb3JkZXIucHJvZHVjdHNbaV0ucHJpY2UsXG5cdFx0XHQvLyBcdHRpcG9JdGVtOiBcIlBcIixcblx0XHRcdC8vIFx0bGFuY2VJdGVtOiBcIlNcIixcblx0XHRcdC8vIFx0YWNyZXNjaW1vOiAwLFxuXHRcdFx0Ly8gXHRkZXNjb250bzogMCxcblx0XHRcdC8vIFx0b2JzOiBbXVxuXHRcdFx0Ly8gfVxuXHRcdFx0Ly8gaWYgKG9yZGVyLnByb2R1Y3RzW2ldLmluZ3JlZGllbnRzICE9PSBudWxsICYmIG9yZGVyLnByb2R1Y3RzW2ldLmluZ3JlZGllbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdC8vIFx0Zm9yIChsZXQgaiA9IDA7IGogPCBvcmRlci5wcm9kdWN0c1tpXS5pbmdyZWRpZW50cy5sZW5ndGg7IGorKykge1xuXHRcdFx0Ly8gXHRcdG9yZGVySXRlbVtjb21hbmRhXS5JVEVOU1tpXS5vYnNbal0gPSB7XG5cdFx0XHQvLyBcdFx0XHRkZXNjX29iczogb3JkZXIucHJvZHVjdHNbaV0uaW5ncmVkaWVudHNbal0ubmFtZSxcblx0XHRcdC8vIFx0XHRcdGNvZF9vYnM6IG9yZGVyLnByb2R1Y3RzW2ldLmluZ3JlZGllbnRzW2pdLmVwb2NfaWQsXG5cdFx0XHQvLyBcdFx0XHRjb2RfbW9kaWZpY2Fkb3I6IDBcblx0XHRcdC8vIFx0XHR9XG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vIH1cblxuXHRcdH1cblxuXHRcdGxldCBzdHJpbmdTYWx0OiBzdHJpbmcgPSBcIlwiO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb3JkZXJJdGVtW2NvbnN1bWVyQ2FyZF0uSVRFTlMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHN0cmluZ1NhbHQgKz0gb3JkZXJJdGVtW2NvbnN1bWVyQ2FyZF0uSVRFTlNbaV0uY29kaWdvICsgJ18nO1xuXHRcdH1cblx0XHRzdHJpbmdTYWx0ID0gc3RyaW5nU2FsdC5zbGljZSgwLCAtMSk7XG5cdFx0bGV0IGl0ZW1Db252ZXJ0OiBzdHJpbmc7XG5cdFx0bGV0IHZlbmRlckl0ZW1Ub1N0cmluZzogc3RyaW5nO1xuXHRcdGl0ZW1Db252ZXJ0ID0gSlNPTi5zdHJpbmdpZnkob3JkZXJJdGVtKTtcblx0XHR2ZW5kZXJJdGVtLmRhdGFWZW5kYSA9IG5ldyBCdWZmZXIoaXRlbUNvbnZlcnQpLnRvU3RyaW5nKCdiYXNlNjQnKTtcblx0XHR2ZW5kZXJJdGVtLnNhbHQgPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKHN0cmluZ1NhbHQpLmRpZ2VzdChcImhleFwiKTtcblx0XHR2ZW5kZXJJdGVtVG9TdHJpbmcgPSBxdWVyeXN0cmluZy5zdHJpbmdpZnkodmVuZGVySXRlbSk7XG5cblxuXHRcdC8vIHJldHVybiBuZXcgUHJvbWlzZTxSZXNwb25zZUVwb2M+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuXHRcdC8vIH0pXG5cblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxSZXNwb25zZUVwb2M+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHJlcXVlc3QucG9zdCh7XG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG5cdFx0XHRcdFx0J0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR1cmw6IGBodHRwOi8vbGxtMDkuZXBvYzIuY2Rtb24ub3JnOjU2NDc4L0FQSS9tb2RfdmVuZGFfaXRlbS9pbmRleC5waHBgLFxuXHRcdFx0XHRib2R5OiB2ZW5kZXJJdGVtVG9TdHJpbmdcblx0XHRcdH0sIGFzeW5jIChlcnIsIHJlc3AsIGJvZHkpID0+IHtcblx0XHRcdFx0aWYgKCFlcnIpIHtcblx0XHRcdFx0XHRib2R5ID0gYXdhaXQgdGhpcy50b2tlbkRlY29kZXIoYm9keSk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYm9keSk7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBSZXNwb25zZUVwb2MoYm9keSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7IFxuXHRcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblxuXG5cdH1cblx0Z2V0RXh0cmF0byhvYmpFeHRyYXRvOiBhbnkpOiBTdHJpbmcge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuXHR9XG5cdGdldFByb2R1Y3RzKCk6IFN0cmluZyB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG5cdH1cblxuXHRwcml2YXRlIGFzeW5jIHRva2VuRGVjb2Rlcih0b2tlbjogYW55KSB7XG5cdFx0bGV0IGRlY29kZUJ1ZmZlciA9IG5ldyBCdWZmZXIodG9rZW4sICdiYXNlNjQnKTtcblx0XHRsZXQgdG9rZW5EZWNvZGVkOiBhbnk7XG5cdFx0ZGVjb2RlQnVmZmVyID0gZGVjb2RlQnVmZmVyLnRvU3RyaW5nKCdhc2NpaScpO1xuXHRcdHRva2VuRGVjb2RlZCA9IEpTT04ucGFyc2UoZGVjb2RlQnVmZmVyKTtcblx0XHRyZXR1cm4gdG9rZW5EZWNvZGVkO1xuXHR9XG5cblx0c2lzdGVtYUF1dGgoKTogU2lzdGVtYUF1dGgge1xuXG5cdFx0bGV0IGVwb2NBdXRoID0gbmV3IFNpc3RlbWFBdXRoKCk7XG5cdFx0ZXBvY0F1dGguaGFzaGVtcCA9ICdkYTJnMzlqYmNkamE4NjAxJztcblx0XHRlcG9jQXV0aC5tYWMgPSAnZTQ6YzE6ZGQ6YzA6OWE6NGQnO1xuXHRcdGVwb2NBdXRoLnRva2VuUGFyY2Vpcm8gPSAnMzUzYzFlYTMtNjgyYi00NzU0LTkxZWYtZjU1ZDA1YWVjNzU4Jztcblx0XHRlcG9jQXV0aC5zYWx0UGFyY2Vpcm8gPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKGVwb2NBdXRoLnRva2VuUGFyY2Vpcm8gKyAnX19UT0tFTl9fJykuZGlnZXN0KFwiaGV4XCIpO1xuXG5cdFx0cmV0dXJuIGVwb2NBdXRoO1xuXHR9O1xuXG59Il19
