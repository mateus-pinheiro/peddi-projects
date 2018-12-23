import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam, httpPut } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import OrderDTO from "../dto/order.dto";
import OrderPortInbound from "../../api-core/port/inbound/order.inbound-port";
import { STATUS_CODES } from "http";

@controller("/orders")
export class OrderController implements interfaces.Controller {

    constructor(@inject("OrderPortInbound") private orderPortInbound: OrderPortInbound) { }

    @httpGet("/")
    private getAll(req: express.Request, res: express.Response, next: express.NextFunction) {
        return this.orderPortInbound.get();
    }

    @httpGet("/:id")
    private get(@requestParam("id") id: Number, req: express.Request, res: express.Response, next: express.NextFunction) {
        console.log(id)
        // return this.orderPortInbound.getById(id);
    }

    @httpPost("/")
    private ask(req: express.Request, res: express.Response) {
        try {
            const order = new OrderDTO(req.body);
            //should make a conversor from dto to core model;
            
            const resp = this.orderPortInbound.save(order);
            res.status(200).json(resp);

        } catch (error) {
            res.status(400).json({ "error": error });
        }


    }

    @httpPut("/:id")
    private askAgain(@requestParam("id") id: String, req: express.Request, res: express.Response) {
        try {
            const order = new OrderDTO(req.body);
            //should make a conversor from dto to core model;
            this.orderPortInbound.update(id, order);

        } catch (error) {
            res.status(400).json({ "error": error });
        }


    }

    //this endpoint will just send the finished order to cloud api of peddi;
    @httpPost("/:id")
    private send(@requestParam("id") id: String, req: express.Request, res: express.Response) {
        console.log("Endpoint:" + this.send.toString());

        try {
            this.orderPortInbound.send(id);
        } catch (error) {
            res.status(400).json({ "error": error });
        }
        //     console.log("Chegou na camada inbound");
        //     const order = new OrderDTO(req.body);
        //     try {
        //         this.orderPortInbound.send(order);
        //         res.status(200);
        //     } catch (error) {
        //         res.status(400).json({error: error});
        //     }


        //     // this.orderPortInbound.insert(order);

        //     // try {
        //     //     await this.orderPortInbound.send(order);
        //     //     res.sendStatus(201);
        //     // } catch (err) {
        //     //     res.status(400).json({ error: err.message });
        //     // }
    }



    // @httpPost("/")
    // private save(req: express.Request, res: express.Response) {

    //     const order = new OrderDTO(req.body);
    //     try {
    //         let id = this.orderPortInbound.save(order);
    //         res.status(200).json({
    //             status: res.statusCode,
    //             data: {
    //                 id: id
    //             }
    //         })
    //     } catch (error) {

    //     }


    //     // this.orderPortInbound.insert(order);

    //     // try {
    //     //     await this.orderPortInbound.send(order);
    //     //     res.sendStatus(201);
    //     // } catch (err) {
    //     //     res.status(400).json({ error: err.message });
    //     // }
    // }

    // @httpPost("/")
    // private send(req: express.Request, res: express.Response) {
    //     console.log("Chegou na camada inbound");
    //     const order = new OrderDTO(req.body);
    //     try {
    //         this.orderPortInbound.send(order);
    //         res.status(200);
    //     } catch (error) {
    //         res.status(400).json({error: error});
    //     }


    //     // this.orderPortInbound.insert(order);

    //     // try {
    //     //     await this.orderPortInbound.send(order);
    //     //     res.sendStatus(201);
    //     // } catch (err) {
    //     //     res.status(400).json({ error: err.message });
    //     // }
    // }



    // @httpPost("/:id")
    // private update(@requestParam("id") id : Number, req: express.Request, res: express.Response) {

    //     const order = new OrderDTO(req.body);
    //     try {
    //         const updatedOrder = this.orderPortInbound.update(id, order);
    //         res.status(200).json({
    //             status: res.statusCode,
    //             data: {
    //                 updatedOrder
    //             }
    //         })
    //     } catch (error) {

    //     }


    //     // this.orderPortInbound.insert(order);

    //     // try {
    //     //     await this.orderPortInbound.send(order);
    //     //     res.sendStatus(201);
    //     // } catch (err) {
    //     //     res.status(400).json({ error: err.message });
    //     // }
    // }

    // @httpGet("/")
    // private list(@queryParam("start") start: number, @queryParam("count") count: number): string {
    //     return this.fooService.get(start, count);
    // }



    // @httpDelete("/:id")
    // private delete(@requestParam("id") id: string, @response() res: express.Response): Promise<void> {
    //     return this.fooService.delete(id)
    //         .then(() => res.sendStatus(204))
    //         .catch((err: Error) => {
    //             res.status(400).json({ error: err.message });
    //         });
    // }
}