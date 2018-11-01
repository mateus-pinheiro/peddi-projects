import { injectable, inject } from "inversify";
import FooService from "../../handler/foo.service";

@injectable()
export default class FooImplementationService implements FooService {
    send(): void {
        throw new Error("Method not implemented.");
    }
    get(): string {
        // console.log("Deu certo mlk");
        return "LekLoucoGUlpdsadasadsafds";
        // throw new Error("Method not implemented.");
    }
   
}