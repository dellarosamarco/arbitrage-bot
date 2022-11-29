import { Observable } from "rxjs";
import { Exchange } from "../exchange";
import { ExchangeInterfaces } from "../exchange.interfaces";
import { KucoinAPI } from "./kucoinAPI.interfaces";

export class KucoinService {
    getPrice(request: ExchangeInterfaces.PriceRequest): Observable<ExchangeInterfaces.PriceResponse>{
        return new Observable<ExchangeInterfaces.PriceResponse>(observer => {
            fetch(`https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=${request.base}-${request.target}`)
            .then(response => response.json())
            .then((data: KucoinAPI.PriceResponse) => {
                observer.next({
                    price: parseFloat(data.data.price),
                    base: request.base,
                    target: request.target,
                    exchange: Exchange.KUCOIN
                });
                observer.complete();
            })
            .catch(err => observer.error(err));
        });
    }
}