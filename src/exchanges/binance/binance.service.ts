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
                    price: parseFloat(data.price),
                    base: symbolToBase(data.symbol),
                    target: symbolToTarget(data.symbol),
                    exchange: Exchange.BINANCE
                });
                observer.complete();
            })
            .catch(err => observer.error(err));
        });
    }

    getPrices(request: ExchangeInterfaces.PriceRequest[]): Observable<ExchangeInterfaces.PriceResponse[]>{
        let symbols: string = `[`;

        for(var n=0;n<request.length-1;n++){
            symbols += `"` + request[n].base + request[n].target + `",`
        }

        symbols += `"` + request[request.length-1].base + request[request.length-1].target + `"]`;

        return new Observable<ExchangeInterfaces.PriceResponse[]>(observer => {
            fetch(`https://api1.binance.com/api/v3/ticker/price?symbols=${symbols}`)
            .then(response => response.json())
            .then((data: BinanceAPI.PriceResponse[]) => {
                observer.next(
                    data.map((_data: BinanceAPI.PriceResponse) => {
                        return {
                            price: parseFloat(_data.price),
                            base: symbolToBase(_data.symbol),
                            target: symbolToTarget(_data.symbol),
                            exchange: Exchange.BINANCE
                        }
                    })
                );
                observer.complete();
            })
            .catch(err => observer.error(err));
        });
    }
}