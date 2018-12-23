export class Comanda {
    public tokenParceiro: string | undefined;
    public token: string | undefined;
    public idusuario: string | undefined;
    public cartao: string | undefined;
    public eventoentrada: string | undefined;
    public service: string | undefined;
    public tipocartao: string | undefined;
    public mesa: string | undefined;
    public lugarmesa: string | undefined;
    public cartaofidel?: string;
    public hashemp: string | undefined;
    public mac: string | undefined;
    public salt: string | undefined;
}

export class CargaProduto {
    public versao: string | undefined;
    public service: string | undefined;
    public hashemp: string | undefined;
    public token: string | undefined;
    public mac: string | undefined;
}

export class VendaItem {
    public token: string | undefined;
    public dataVenda: string | undefined;
    public ult_mesa: string | undefined;
    public service: string | undefined;
    public hashemp: string | undefined;
    public mac: string | undefined;
    public salt: string | undefined;
}

export class OrderItem {
    public HOST: string | undefined;
    public CODEVENTO?: string | undefined;
    public ITENS: Array<Item> = new Array<Item>();
}

export class Item {
    public quantidade: Number | undefined;
    public codigo: String | undefined;
    public cod_func_autoriz: String | undefined;
    public motivo_autorizacao: String | undefined;
    public cod_func: Number | undefined;
    public marchar: Number | undefined;
    public valor: Number | undefined;
    public tipoItem: String | undefined;
    public lanceItem: String | undefined;
    public acrescimo: Number | undefined;
    public desconto: Number | undefined;
    public obs: Array<ItemObs> | undefined;
}

export class ItemObs {
    public cod_obs: Number | undefined;
    public desc_obs: String | undefined;
    public cod_modificador: Number | undefined;
}

export class Produtos {
    quantidade: number | undefined;
    codigo: string | undefined;
    valor: number | undefined;
    obs: any[] = [];
}

export class Extrato {
    public service: string | undefined;
    public token: string | undefined;
    public cartaofidel: string | undefined;
    public hashemp: string | undefined;
    public mac: string | undefined;
    public salt: string | undefined;
}

export class SistemaAuth {
    public hashemp: string | undefined;
    public mac: string | undefined;
    public salt?: string;
    public service?: string;
    public tokenParceiro?: string;
    public saltParceiro?: string;
}