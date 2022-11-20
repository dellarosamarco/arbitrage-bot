import { KucoinInterfaces } from "./kucoin.interfaces";
import { Observable } from "rxjs";

export class KucoinService {
    getPrice(request: KucoinInterfaces.PriceRequest): Observable<KucoinInterfaces.PriceResponse>{
        return new Observable<KucoinInterfaces.PriceResponse>(observer => {
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