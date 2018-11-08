"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_express_utils_1 = require("inversify-express-utils");
const app_1 = __importDefault(require("./app"));
require("./api-inbound/controller/foo.controller");
require("./api-inbound/controller/order.controller");
const ioc_config_1 = __importDefault(require("./config/ioc-config"));
const port = process.env.PORT || 3000;
app_1.default.set("port", port);
//set up a container of Invesify
// let container = new Container();
// container.bind<FooService>('FooService').to(FooImplementationService);
let server = new inversify_express_utils_1.InversifyExpressServer(ioc_config_1.default, app_1.default);
let app = server.build();
app.listen(port, () => {
    console.log(`App listening at ${port}`);
});
server.setErrorConfig((app) => {
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });
});
// app.on("error", (error: NodeJS.ErrnoException) => {
//   switch (error.code) {
//       case "EACCES":
//           console.error(`${port} requires elevated privileges`);
//           process.exit(1);
//           break;
//       case "EADDRINUSE":
//           console.error(`${port} is already in use`);
//           process.exit(1);
//           break;
//       default:
//           throw error;
//   }
// });
// server.setConfig((app) => {
//   // add body parser
//   app.use(bodyParser.urlencoded({
//     extended: true
//   }));
//   app.use(bodyParser.json());
// });

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRCQUEwQjtBQUsxQixxRUFBaUU7QUFDakUsZ0RBQXdCO0FBQ3hCLG1EQUFpRDtBQUNqRCxxREFBbUQ7QUFDbkQscUVBQTRDO0FBRzVDLE1BQU0sSUFBSSxHQUFvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFDdkQsYUFBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFdEIsZ0NBQWdDO0FBQ2hDLG1DQUFtQztBQUVuQyx5RUFBeUU7QUFFekUsSUFBSSxNQUFNLEdBQUcsSUFBSSxnREFBc0IsQ0FBQyxvQkFBUyxFQUFFLGFBQUcsQ0FBQyxDQUFDO0FBRXhELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN6QixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBQyxHQUFHLEVBQUU7SUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUM1QixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBVSxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO1FBQ3BFLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILHNEQUFzRDtBQUN0RCwwQkFBMEI7QUFDMUIsdUJBQXVCO0FBQ3ZCLG1FQUFtRTtBQUNuRSw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLDJCQUEyQjtBQUMzQix3REFBd0Q7QUFDeEQsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIseUJBQXlCO0FBQ3pCLE1BQU07QUFDTixNQUFNO0FBRU4sOEJBQThCO0FBQzlCLHVCQUF1QjtBQUN2QixvQ0FBb0M7QUFDcEMscUJBQXFCO0FBQ3JCLFNBQVM7QUFDVCxnQ0FBZ0M7QUFDaEMsTUFBTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbi8vIGltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ2ludmVyc2lmeSc7XG4vLyBpbXBvcnQgRm9vU2VydmljZSBmcm9tIFwiLi9hcGktY29yZS9oYW5kbGVyL2Zvby5zZXJ2aWNlXCI7XG4vLyBpbXBvcnQgRm9vSW1wbGVtZW50YXRpb25TZXJ2aWNlIGZyb20gXCIuL2FwaS1jb3JlL3BvcnQvaW5ib3VuZC9mb28uaXNlcnZpY2VcIjtcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgSW52ZXJzaWZ5RXhwcmVzc1NlcnZlciB9IGZyb20gJ2ludmVyc2lmeS1leHByZXNzLXV0aWxzJztcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgXCIuL2FwaS1pbmJvdW5kL2NvbnRyb2xsZXIvZm9vLmNvbnRyb2xsZXJcIjtcbmltcG9ydCBcIi4vYXBpLWluYm91bmQvY29udHJvbGxlci9vcmRlci5jb250cm9sbGVyXCI7XG5pbXBvcnQgY29udGFpbmVyIGZyb20gXCIuL2NvbmZpZy9pb2MtY29uZmlnXCI7XG5cblxuY29uc3QgcG9ydDogbnVtYmVyIHwgc3RyaW5nID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuQXBwLnNldChcInBvcnRcIiwgcG9ydCk7XG5cbi8vc2V0IHVwIGEgY29udGFpbmVyIG9mIEludmVzaWZ5XG4vLyBsZXQgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuXG4vLyBjb250YWluZXIuYmluZDxGb29TZXJ2aWNlPignRm9vU2VydmljZScpLnRvKEZvb0ltcGxlbWVudGF0aW9uU2VydmljZSk7XG5cbmxldCBzZXJ2ZXIgPSBuZXcgSW52ZXJzaWZ5RXhwcmVzc1NlcnZlcihjb250YWluZXIsIEFwcCk7XG5cbmxldCBhcHAgPSBzZXJ2ZXIuYnVpbGQoKTtcbmFwcC5saXN0ZW4ocG9ydCwoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBBcHAgbGlzdGVuaW5nIGF0ICR7cG9ydH1gKTtcbn0pO1xuXG5zZXJ2ZXIuc2V0RXJyb3JDb25maWcoKGFwcCkgPT4ge1xuICBhcHAudXNlKChlcnI6IEVycm9yLCByZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIuc3RhY2spO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoJ1NvbWV0aGluZyBicm9rZSEnKTtcbiAgfSk7XG59KTtcblxuLy8gYXBwLm9uKFwiZXJyb3JcIiwgKGVycm9yOiBOb2RlSlMuRXJybm9FeGNlcHRpb24pID0+IHtcbi8vICAgc3dpdGNoIChlcnJvci5jb2RlKSB7XG4vLyAgICAgICBjYXNlIFwiRUFDQ0VTXCI6XG4vLyAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtwb3J0fSByZXF1aXJlcyBlbGV2YXRlZCBwcml2aWxlZ2VzYCk7XG4vLyAgICAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuLy8gICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgY2FzZSBcIkVBRERSSU5VU0VcIjpcbi8vICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke3BvcnR9IGlzIGFscmVhZHkgaW4gdXNlYCk7XG4vLyAgICAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuLy8gICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgZGVmYXVsdDpcbi8vICAgICAgICAgICB0aHJvdyBlcnJvcjtcbi8vICAgfVxuLy8gfSk7XG5cbi8vIHNlcnZlci5zZXRDb25maWcoKGFwcCkgPT4ge1xuLy8gICAvLyBhZGQgYm9keSBwYXJzZXJcbi8vICAgYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe1xuLy8gICAgIGV4dGVuZGVkOiB0cnVlXG4vLyAgIH0pKTtcbi8vICAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4vLyB9KTtcbiJdfQ==
