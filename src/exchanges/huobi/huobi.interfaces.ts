import { HuobiCoins } from "./huobi.coins";

export namespace HuobiInterfaces {
    export interface PriceResponse {
        "price": number
    }

    export interface PriceRequest {
        base: HuobiCoins.coins;
        target: HuobiCoins.coins;
    }
}