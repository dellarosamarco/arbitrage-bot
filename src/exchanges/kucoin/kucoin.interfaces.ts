import { KucoinCoins } from "./kucoin.coins";

export namespace KucoinInterfaces {
    export interface PriceResponse {
        "price": number
    }

    export interface PriceRequest {
        base: KucoinCoins.coins;
        target: KucoinCoins.coins;
    }
}