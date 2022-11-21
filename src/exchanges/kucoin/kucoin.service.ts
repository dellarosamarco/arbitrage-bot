import { Observable } from "rxjs";
import { ExchangeInterfaces } from "../exchange.interfaces";

export class KucoinService {
    getPrice(request: ExchangeInterfaces.PriceRequest): Observable<ExchangeInterfaces.PriceResponse>{
        return new Observable<ExchangeInterfaces.PriceResponse>(observer => {
            fetch(`https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=${request.base}-${request.target}`)
            .then(response => response.json())
            .then(data => {
                observer.next(data.data);
                observer.complete();
            })
            .catch(err => observer.error(err));
        });
    }
}