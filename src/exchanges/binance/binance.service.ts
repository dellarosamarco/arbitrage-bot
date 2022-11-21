import { Observable } from "rxjs";
import { ExchangeInterfaces } from "../exchange.interfaces";

export class BinanceService {
    getPrice(request: ExchangeInterfaces.PriceRequest): Observable<ExchangeInterfaces.PriceResponse>{
        return new Observable<ExchangeInterfaces.PriceResponse>(observer => {
            fetch(`https://api1.binance.com/api/v3/ticker/price?symbol=${request.base}${request.target}`)
            .then(response => response.json())
            .then(data => {
                observer.next({
                    ...data,
                    base: request.base,
                    target: request.target
                });
                observer.complete();
            })
            .catch(err => observer.error(err));
        });
    }
}