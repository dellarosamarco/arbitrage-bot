import { Coins } from "../coins";


export namespace ExchangeInterfaces {
    export interface PriceResponse {
        "price": number
    }

    export interface PriceRequest {
        base: Coins.coins;
        target: Coins.coins;
    }
}