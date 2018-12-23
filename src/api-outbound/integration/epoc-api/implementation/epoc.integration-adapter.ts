import EpocIntegrationPort from "../epoc.integration-port";
import request = require('request');
import crypto = require('crypto');
import querystring = require('querystring');

import {
	Comanda,
	VendaItem,
	OrderItem,
	Item,
	ItemObs,
	CargaProduto,
	Extrato,
	SistemaAuth
} from '../../../dto/epoc.dto';
import { injectable } from "inversify";
import ResponseEpoc from "../../../envelopes/response.epoc";
import { rejects } from "assert";
declare const Buffer: any;

@injectable()
export default class EpocIntegrationAdapter implements EpocIntegrationPort {


	async tokenGenerator(systemAuth: any): Promise<ResponseEpoc> {

		let sistemaAuth: SistemaAuth = new SistemaAuth();
		let sistemaAuthString: string;
		sistemaAuth.hashemp = systemAuth.hashemp;
		sistemaAuth.mac = systemAuth.mac;
		sistemaAuth.service = 'geraToken';
		sistemaAuth.tokenParceiro = systemAuth.tokenParceiro;
		sistemaAuth.saltParceiro = systemAuth.saltParceiro;
		sistemaAuthString = querystring.stringify(sistemaAuth);

		return new Promise<ResponseEpoc>((resolve, reject) => {
			request.post({
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Accept': 'application/json'
				},
				url: process.env.EPOC_URL + `/API/mod_valida_parceiro/index.php`,
				body: sistemaAuthString
			}, (err: Error, resp: any, body: any) => {
				if (!err) {
					body = this.tokenDecoder(body);
					console.log(body);
					return resolve(body);
				}
				else {
					return reject(err);
				}
			});
		})
	}

	async venderItem(order: any): Promise<ResponseEpoc> {
		// let payload: any;
		let consumerCard: string;
		let token: any;
		let sistemaGestaoPayload: any;
		let venderItem: VendaItem = new VendaItem();
		let orderIt: OrderItem = new OrderItem();


		// let produtos: Array<Produtos> = new Array<Produtos>();
		// produtos = order.products;
		// payload = await this.tokenManager.decodificaToken(JSON.parse(body.tokenPeddi));
		// payload = payload;
		sistemaGestaoPayload = this.sistemaAuth();
		token = await this.tokenGenerator(sistemaGestaoPayload);
		consumerCard = order.ticket;

		venderItem.mac = sistemaGestaoPayload.mac;
		venderItem.hashemp = sistemaGestaoPayload.hashemp;
		venderItem.ult_mesa = order.table;
		venderItem.service = 'GravarVendaItem';
		let tokenData = await this.tokenDecoder(token);
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
		}
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
			let item: Item = new Item();
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
			item.obs = new Array<ItemObs>();

			if (order.products[i].ingredients !== null && order.products[i].ingredients.length > 0) {
				for (let j = 0; j < order.products[i].ingredients.length; j++) {
					item.obs[j] = new ItemObs();
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

		let stringSalt: string = "";
		for (let i = 0; i < orderItem[consumerCard].ITENS.length; i++) {
			stringSalt += orderItem[consumerCard].ITENS[i].codigo + '_';
		}
		stringSalt = stringSalt.slice(0, -1);
		let itemConvert: string;
		let venderItemToString: string;
		itemConvert = JSON.stringify(orderItem);
		venderItem.dataVenda = new Buffer(itemConvert).toString('base64');
		venderItem.salt = crypto.createHash('md5').update(stringSalt).digest("hex");
		venderItemToString = querystring.stringify(venderItem);


		// return new Promise<ResponseEpoc>((resolve, reject) => {

		// })


		return new Promise<ResponseEpoc>((resolve, reject) => {
			request.post({
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Accept': 'application/json'
				},
				url: `http://llm09.epoc2.cdmon.org:56478/API/mod_venda_item/index.php`,
				body: venderItemToString
			}, async (err, resp, body) => {
				if (!err) {
					body = await this.tokenDecoder(body);
					console.log(body);
					return new ResponseEpoc(body);
				}
				else { 
					return reject(err);
				}
			});
		});



	}
	getExtrato(objExtrato: any): String {
		throw new Error("Method not implemented.");
	}
	getProducts(): String {
		throw new Error("Method not implemented.");
	}

	private async tokenDecoder(token: any) {
		let decodeBuffer = new Buffer(token, 'base64');
		let tokenDecoded: any;
		decodeBuffer = decodeBuffer.toString('ascii');
		tokenDecoded = JSON.parse(decodeBuffer);
		return tokenDecoded;
	}

	sistemaAuth(): SistemaAuth {

		let epocAuth = new SistemaAuth();
		epocAuth.hashemp = 'da2g39jbcdja8601';
		epocAuth.mac = 'e4:c1:dd:c0:9a:4d';
		epocAuth.tokenParceiro = '353c1ea3-682b-4754-91ef-f55d05aec758';
		epocAuth.saltParceiro = crypto.createHash('md5').update(epocAuth.tokenParceiro + '__TOKEN__').digest("hex");

		return epocAuth;
	};

}