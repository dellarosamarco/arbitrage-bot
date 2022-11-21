import { Observable } from "rxjs";
import { ExchangeInterfaces } from "../exchange.interfaces";

export class HuobiService {
    getPrice(request: ExchangeInterfaces.PriceRequest): Observable<ExchangeInterfaces.PriceResponse>{
        return new Observable<ExchangeInterfaces.PriceResponse>(observer => {
            fetch(`https://api.huobi.pro/market/detail/merged?symbol=${request.base.toLocaleLowerCase()}${request.target.toLocaleLowerCase()}`)
            .then(response => response.json())
            .then(data => {
                observer.next({
                    price: data.tick.ask[0],
                    base: request.base,
                    target: request.target
                });
                observer.complete();
            })
            .catch(err => observer.error(err));
        });
    }
}