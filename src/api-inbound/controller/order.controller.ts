import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import OrderDTO from "../../api-core/commons/dto/order.dto";
import OrderPortInbound from "../../api-core/port/inbound/order.inbound-port";

@controller("/orders")
export class OrderController implements interfaces.Controller {
 
    constructor( @inject("OrderPortInbound") private orderPortInbound: OrderPortInbound ) {}

    @httpGet("/")
    private getAll(@request() req: express.Request, @response() res: express.Response, next: express.NextFunction) {
        return this.orderPortInbound.get();
    }
 
    @httpGet("/:id")
    private get(@requestParam("id") id : Number, @request() req: express.Request, @response() res: express.Response, next: express.NextFunction) {
        return this.orderPortInbound.getById(id);
    }



    @httpPost("/")
    private async send(@request() req: express.Request, @response() res: express.Response) {

        const order = new OrderDTO(req.body);
        console.log(order.table);


        // this.orderPortInbound.insert(order);


        // try {
        //     await this.fooService.send(req.body);
        //     res.sendStatus(201);
        // } catch (err) {
        //     res.status(400).json({ error: err.message });
        // }
    }
 
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