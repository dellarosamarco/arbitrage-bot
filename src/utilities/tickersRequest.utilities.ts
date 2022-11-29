import { ExchangeInterfaces } from "../exchanges/exchange.interfaces";
import { symbolToBase, symbolToTarget } from "./symbol.utilities";

export const buildTickersRequest = () : ExchangeInterfaces.PriceRequest[] => {
    
    const rawTickers = process.env.npm_config_tickers;
    
    if(rawTickers === undefined) throw('Missing tickers property');

    const tickers = rawTickers.split(',').map((value: string) => value.trim());

    return tickers.map((ticker: string) => {
        return {
            base: symbolToBase(ticker),
            target: symbolToTarget(ticker)
        };
    });
}