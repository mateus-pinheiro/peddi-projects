import "reflect-metadata";
import { Request, Response, NextFunction } from "express";
import { Container } from 'inversify';
import {InversifyExpressServer } from 'inversify-express-utils';
import App from "./app";
import FooService from "./api-core/handler/foo.service";
import FooImplementationService from "./api-core/port/inbound/foo.iservice";
import "./api-inbound/controllers/foo.controller";

const port: number | string = process.env.PORT || 3000;
App.set("port", port);

//set up a container of Invesify
let container = new Container();

container.bind<FooService>('FooService').to(FooImplementationService);

let server = new InversifyExpressServer(container, App);

let app = server.build();
app.listen(port,() => {
  console.log(`App listening at ${port}`);
});

server.setErrorConfig((app) => {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
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
