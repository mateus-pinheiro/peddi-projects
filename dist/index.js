"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const app_1 = __importDefault(require("./app"));
const foo_iservice_1 = __importDefault(require("./api-core/port/inbound/foo.iservice"));
require("./api-inbound/controllers/foo.controller");
const port = process.env.PORT || 3000;
app_1.default.set("port", port);
//set up a container of Invesify
let container = new inversify_1.Container();
container.bind('FooService').to(foo_iservice_1.default);
let server = new inversify_express_utils_1.InversifyExpressServer(container, app_1.default);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRCQUEwQjtBQUUxQix5Q0FBc0M7QUFDdEMscUVBQWdFO0FBQ2hFLGdEQUF3QjtBQUV4Qix3RkFBNEU7QUFDNUUsb0RBQWtEO0FBRWxELE1BQU0sSUFBSSxHQUFvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFDdkQsYUFBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFdEIsZ0NBQWdDO0FBQ2hDLElBQUksU0FBUyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0FBRWhDLFNBQVMsQ0FBQyxJQUFJLENBQWEsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLHNCQUF3QixDQUFDLENBQUM7QUFFdEUsSUFBSSxNQUFNLEdBQUcsSUFBSSxnREFBc0IsQ0FBQyxTQUFTLEVBQUUsYUFBRyxDQUFDLENBQUM7QUFFeEQsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDLEdBQUcsRUFBRTtJQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzFDLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQzVCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFVLEVBQUUsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7UUFDcEUsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM3QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsc0RBQXNEO0FBQ3RELDBCQUEwQjtBQUMxQix1QkFBdUI7QUFDdkIsbUVBQW1FO0FBQ25FLDZCQUE2QjtBQUM3QixtQkFBbUI7QUFDbkIsMkJBQTJCO0FBQzNCLHdEQUF3RDtBQUN4RCw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQix5QkFBeUI7QUFDekIsTUFBTTtBQUNOLE1BQU07QUFFTiw4QkFBOEI7QUFDOUIsdUJBQXVCO0FBQ3ZCLG9DQUFvQztBQUNwQyxxQkFBcUI7QUFDckIsU0FBUztBQUNULGdDQUFnQztBQUNoQyxNQUFNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdpbnZlcnNpZnknO1xuaW1wb3J0IHtJbnZlcnNpZnlFeHByZXNzU2VydmVyIH0gZnJvbSAnaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHMnO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCBGb29TZXJ2aWNlIGZyb20gXCIuL2FwaS1jb3JlL2hhbmRsZXIvZm9vLnNlcnZpY2VcIjtcbmltcG9ydCBGb29JbXBsZW1lbnRhdGlvblNlcnZpY2UgZnJvbSBcIi4vYXBpLWNvcmUvcG9ydC9pbmJvdW5kL2Zvby5pc2VydmljZVwiO1xuaW1wb3J0IFwiLi9hcGktaW5ib3VuZC9jb250cm9sbGVycy9mb28uY29udHJvbGxlclwiO1xuXG5jb25zdCBwb3J0OiBudW1iZXIgfCBzdHJpbmcgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5BcHAuc2V0KFwicG9ydFwiLCBwb3J0KTtcblxuLy9zZXQgdXAgYSBjb250YWluZXIgb2YgSW52ZXNpZnlcbmxldCBjb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG5cbmNvbnRhaW5lci5iaW5kPEZvb1NlcnZpY2U+KCdGb29TZXJ2aWNlJykudG8oRm9vSW1wbGVtZW50YXRpb25TZXJ2aWNlKTtcblxubGV0IHNlcnZlciA9IG5ldyBJbnZlcnNpZnlFeHByZXNzU2VydmVyKGNvbnRhaW5lciwgQXBwKTtcblxubGV0IGFwcCA9IHNlcnZlci5idWlsZCgpO1xuYXBwLmxpc3Rlbihwb3J0LCgpID0+IHtcbiAgY29uc29sZS5sb2coYEFwcCBsaXN0ZW5pbmcgYXQgJHtwb3J0fWApO1xufSk7XG5cbnNlcnZlci5zZXRFcnJvckNvbmZpZygoYXBwKSA9PiB7XG4gIGFwcC51c2UoKGVycjogRXJyb3IsIHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGVyci5zdGFjayk7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCgnU29tZXRoaW5nIGJyb2tlIScpO1xuICB9KTtcbn0pO1xuXG4vLyBhcHAub24oXCJlcnJvclwiLCAoZXJyb3I6IE5vZGVKUy5FcnJub0V4Y2VwdGlvbikgPT4ge1xuLy8gICBzd2l0Y2ggKGVycm9yLmNvZGUpIHtcbi8vICAgICAgIGNhc2UgXCJFQUNDRVNcIjpcbi8vICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke3BvcnR9IHJlcXVpcmVzIGVsZXZhdGVkIHByaXZpbGVnZXNgKTtcbi8vICAgICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XG4vLyAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICBjYXNlIFwiRUFERFJJTlVTRVwiOlxuLy8gICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7cG9ydH0gaXMgYWxyZWFkeSBpbiB1c2VgKTtcbi8vICAgICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XG4vLyAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICAgIHRocm93IGVycm9yO1xuLy8gICB9XG4vLyB9KTtcblxuLy8gc2VydmVyLnNldENvbmZpZygoYXBwKSA9PiB7XG4vLyAgIC8vIGFkZCBib2R5IHBhcnNlclxuLy8gICBhcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XG4vLyAgICAgZXh0ZW5kZWQ6IHRydWVcbi8vICAgfSkpO1xuLy8gICBhcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbi8vIH0pO1xuIl19
