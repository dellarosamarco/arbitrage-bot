import { Exchange } from "./exchange";
import { ExchangeCoins } from "./exchange.coins";

export namespace ExchangeInterfaces {
    export interface PriceResponse extends PriceRequest {
        "exchange": Exchange.exchange
        "price": number
    }

    export interface PriceRequest {
        base: ExchangeCoins.coins;
        target: ExchangeCoins.coins;
    }
}