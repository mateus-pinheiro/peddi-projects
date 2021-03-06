import "reflect-metadata";

import { Container } from "inversify";

// import {
//   Battle,
//   Weapon,
//   Warrior
// } from "../interfaces";
import FooService from "../api-core/handler/foo.service";
import FooImplementationService from "../api-core/port/inbound/foo.iservice";
import OrderPortInbound from "../api-core/port/inbound/order.inbound-port";
import OrderPortOutbound from "../api-core/port/outbound/order.outbound-port";
import OrderHandler from "../api-core/handler/order.handler";
// import {
//   EpicBattle,
//   Katana,
//   Shuriken,
//   Ninja,
//   Samurai
// } from "../entities";

// import SERVICE_IDENTIFIER from "../constants/identifiers";
import OrderAdapterOutbound from "../api-outbound/adapter/order.outbound-adapter";
import OrderRepository from "../api-outbound/repository/order.repository";
import OrderRepositoryImpl from "../api-outbound/repository/implementation/order.repositoryimpl";
import RestaurantRepositoryImpl from "../api-outbound/repository/implementation/restaurant.repositoryimpl";
import RestaurantRepository from "../api-outbound/repository/restaurant.repository";
import EpocIntegrationPort from "../api-outbound/integration/epoc-api/epoc.integration-port";
import EpocIntegrationAdapter from "../api-outbound/integration/epoc-api/implementation/epoc.integration-adapter";
import PeddiCloudIntegrationPort from "../api-outbound/integration/external-peddi-api/peddi-cloud.integration-port";
import PeddiCloudIntegrationAdapter from "../api-outbound/integration/external-peddi-api/implementation/peddi-cloud.integration-adapter";
import RestaurantPortOutbound from "../api-core/port/outbound/restaurant.outbound-port";
import RestaurantAdapterOutbound from "../api-outbound/adapter/restaurant.outbound-adapter";

let container = new Container();

container.bind<FooService>('FooService').to(FooImplementationService);

//Inbound Services
container.bind<OrderPortInbound>('OrderPortInbound').to(OrderHandler);

//Outbound Services
container.bind<OrderPortOutbound>('OrderPortOutbound').to(OrderAdapterOutbound);
container.bind<RestaurantPortOutbound>('RestaurantPortOutbound').to(RestaurantAdapterOutbound);


//Repository Services
container.bind<OrderRepository>('OrderRepository').to(OrderRepositoryImpl);
container.bind<RestaurantRepository>('RestaurantRepository').to(RestaurantRepositoryImpl);

//Integration Services
container.bind<EpocIntegrationPort>('EpocIntegrationPort').to(EpocIntegrationAdapter);
container.bind<PeddiCloudIntegrationPort>('PeddiCloudIntegrationPort').to(PeddiCloudIntegrationAdapter);

// container.bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR).to(Samurai).whenTargetNamed(TAG.JAPANESE);
// container.bind<Weapon>(SERVICE_IDENTIFIER.WEAPON).to(Shuriken).whenParentNamed(TAG.CHINESE);
// container.bind<Weapon>(SERVICE_IDENTIFIER.WEAPON).to(Katana).whenParentNamed(TAG.JAPANESE);
// container.bind<Battle>(SERVICE_IDENTIFIER.BATTLE).to(EpicBattle);

export default container;