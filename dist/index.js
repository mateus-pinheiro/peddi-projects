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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRCQUEwQjtBQUsxQixxRUFBZ0U7QUFDaEUsZ0RBQXdCO0FBQ3hCLG1EQUFpRDtBQUNqRCxxREFBbUQ7QUFDbkQscUVBQTRDO0FBRzVDLE1BQU0sSUFBSSxHQUFvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFDdkQsYUFBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFdEIsZ0NBQWdDO0FBQ2hDLG1DQUFtQztBQUVuQyx5RUFBeUU7QUFFekUsSUFBSSxNQUFNLEdBQUcsSUFBSSxnREFBc0IsQ0FBQyxvQkFBUyxFQUFFLGFBQUcsQ0FBQyxDQUFDO0FBRXhELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN6QixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBQyxHQUFHLEVBQUU7SUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUM1QixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBVSxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO1FBQ3BFLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILHNEQUFzRDtBQUN0RCwwQkFBMEI7QUFDMUIsdUJBQXVCO0FBQ3ZCLG1FQUFtRTtBQUNuRSw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLDJCQUEyQjtBQUMzQix3REFBd0Q7QUFDeEQsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIseUJBQXlCO0FBQ3pCLE1BQU07QUFDTixNQUFNO0FBRU4sOEJBQThCO0FBQzlCLHVCQUF1QjtBQUN2QixvQ0FBb0M7QUFDcEMscUJBQXFCO0FBQ3JCLFNBQVM7QUFDVCxnQ0FBZ0M7QUFDaEMsTUFBTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbi8vIGltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ2ludmVyc2lmeSc7XG4vLyBpbXBvcnQgRm9vU2VydmljZSBmcm9tIFwiLi9hcGktY29yZS9oYW5kbGVyL2Zvby5zZXJ2aWNlXCI7XG4vLyBpbXBvcnQgRm9vSW1wbGVtZW50YXRpb25TZXJ2aWNlIGZyb20gXCIuL2FwaS1jb3JlL3BvcnQvaW5ib3VuZC9mb28uaXNlcnZpY2VcIjtcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHtJbnZlcnNpZnlFeHByZXNzU2VydmVyIH0gZnJvbSAnaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHMnO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCBcIi4vYXBpLWluYm91bmQvY29udHJvbGxlci9mb28uY29udHJvbGxlclwiO1xuaW1wb3J0IFwiLi9hcGktaW5ib3VuZC9jb250cm9sbGVyL29yZGVyLmNvbnRyb2xsZXJcIjtcbmltcG9ydCBjb250YWluZXIgZnJvbSBcIi4vY29uZmlnL2lvYy1jb25maWdcIjtcblxuXG5jb25zdCBwb3J0OiBudW1iZXIgfCBzdHJpbmcgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5BcHAuc2V0KFwicG9ydFwiLCBwb3J0KTtcblxuLy9zZXQgdXAgYSBjb250YWluZXIgb2YgSW52ZXNpZnlcbi8vIGxldCBjb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG5cbi8vIGNvbnRhaW5lci5iaW5kPEZvb1NlcnZpY2U+KCdGb29TZXJ2aWNlJykudG8oRm9vSW1wbGVtZW50YXRpb25TZXJ2aWNlKTtcblxubGV0IHNlcnZlciA9IG5ldyBJbnZlcnNpZnlFeHByZXNzU2VydmVyKGNvbnRhaW5lciwgQXBwKTtcblxubGV0IGFwcCA9IHNlcnZlci5idWlsZCgpO1xuYXBwLmxpc3Rlbihwb3J0LCgpID0+IHtcbiAgY29uc29sZS5sb2coYEFwcCBsaXN0ZW5pbmcgYXQgJHtwb3J0fWApO1xufSk7XG5cbnNlcnZlci5zZXRFcnJvckNvbmZpZygoYXBwKSA9PiB7XG4gIGFwcC51c2UoKGVycjogRXJyb3IsIHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGVyci5zdGFjayk7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCgnU29tZXRoaW5nIGJyb2tlIScpO1xuICB9KTtcbn0pO1xuXG4vLyBhcHAub24oXCJlcnJvclwiLCAoZXJyb3I6IE5vZGVKUy5FcnJub0V4Y2VwdGlvbikgPT4ge1xuLy8gICBzd2l0Y2ggKGVycm9yLmNvZGUpIHtcbi8vICAgICAgIGNhc2UgXCJFQUNDRVNcIjpcbi8vICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke3BvcnR9IHJlcXVpcmVzIGVsZXZhdGVkIHByaXZpbGVnZXNgKTtcbi8vICAgICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XG4vLyAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICBjYXNlIFwiRUFERFJJTlVTRVwiOlxuLy8gICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7cG9ydH0gaXMgYWxyZWFkeSBpbiB1c2VgKTtcbi8vICAgICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XG4vLyAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICAgIHRocm93IGVycm9yO1xuLy8gICB9XG4vLyB9KTtcblxuLy8gc2VydmVyLnNldENvbmZpZygoYXBwKSA9PiB7XG4vLyAgIC8vIGFkZCBib2R5IHBhcnNlclxuLy8gICBhcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XG4vLyAgICAgZXh0ZW5kZWQ6IHRydWVcbi8vICAgfSkpO1xuLy8gICBhcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbi8vIH0pO1xuIl19
