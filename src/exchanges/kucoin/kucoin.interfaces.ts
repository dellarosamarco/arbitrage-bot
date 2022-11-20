import { KucoinCoins } from "./kucoin.coins";

export namespace KucoinInterfaces {
    export interface PriceResponse {
        "time": number,
        "price": number,
        "bestBid": number,
        "bestAsk": number,
    }

    export interface PriceRequest {
        base: KucoinCoins.coins;
        target: KucoinCoins.coins;
    }
}