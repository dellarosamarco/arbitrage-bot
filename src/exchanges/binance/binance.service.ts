import { Observable } from "rxjs";
import { BinanceInterfaces } from "./binance.interfaces";

export class BinanceService {
    getPrice(request: BinanceInterfaces.PriceRequest): Observable<BinanceInterfaces.PriceResponse>{
        return new Observable<BinanceInterfaces.PriceResponse>(observer => {
            fetch(`https://api1.binance.com/api/v3/ticker/price?symbol=${request.base}${request.target}`)
            .then(response => response.json())
            .then(data => {
                observer.next(data);
                observer.complete();
            })
            .catch(err => observer.error(err));
        });
    }
}