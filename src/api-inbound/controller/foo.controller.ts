import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import FooService from "../../api-core/handler/foo.service";

@controller("/foo")
export class FooController implements interfaces.Controller {
 
    constructor( @inject("FooService") private fooService: FooService ) {}
 
    @httpGet("/")
    private get(req: express.Request, res: express.Response, next: express.NextFunction): string {
        return this.fooService.get();
    }

    @httpPost("/")
    private async send(@request() req: express.Request, @response() res: express.Response) {
        try {
            await this.fooService.send(req.body);
            res.sendStatus(201);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
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