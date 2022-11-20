import { BinanceCoins } from "./binance.coins";

export namespace BinanceInterfaces {
    export interface PriceResponse {
        "price": number
    }

    export interface PriceRequest {
        base: BinanceCoins.coins;
        target: BinanceCoins.coins;
    }
}