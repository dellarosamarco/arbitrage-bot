import { HuobiInterfaces } from "./huobi.interfaces";
import { Observable } from "rxjs";

export class HuobiService {
    getPrice(request: HuobiInterfaces.PriceRequest): Observable<HuobiInterfaces.PriceResponse>{
        return new Observable<HuobiInterfaces.PriceResponse>(observer => {
            fetch(`https://api.huobi.pro/market/detail/merged?symbol=${request.base}${request.target}`)
            .then(response => response.json())
            .then(data => {
                observer.next({ price: data.tick.ask[0] });
                observer.complete();
            })
            .catch(err => observer.error(err));
        });
    }
}