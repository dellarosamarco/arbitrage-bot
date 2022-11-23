import { Observable } from "rxjs";
import { symbolToBase, symbolToTarget } from "../../utilities/symbol.utilities";
import { Exchange } from "../exchange";
import { ExchangeInterfaces } from "../exchange.interfaces";
import { BinanceAPI } from "./binanceAPI.interfaces";

export class BinanceService {
    getPrice(request: ExchangeInterfaces.PriceRequest): Observable<ExchangeInterfaces.PriceResponse>{
        return new Observable<ExchangeInterfaces.PriceResponse>(observer => {
            fetch(`https://api1.binance.com/api/v3/ticker/price?symbol=${request.base}${request.target}`)
            .then(response => response.json())
            .then((data: BinanceAPI.PriceResponse) => {
                observer.next({
                    price: parseInt(data.price),
                    base: symbolToBase(data.symbol),
                    target: symbolToTarget(data.symbol),
                    exchange: Exchange.BINANCE
                });
                observer.complete();
            })
            .catch(err => observer.error(err));
        });
    }
}