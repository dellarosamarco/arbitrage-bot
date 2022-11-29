import { BinanceService } from "../exchanges/binance/binance.service";
import { ExchangeCoins } from "../exchanges/exchange.coins";
import { HuobiService } from "../exchanges/huobi/huobi.service";
import { KucoinService } from "../exchanges/kucoin/kucoin.service";
import { ExchangeInterfaces } from "../exchanges/exchange.interfaces";
import { forkJoin } from "rxjs";

export class ArbitrageBot {
    static instance: ArbitrageBot;

    constructor(
        private kucoinService: KucoinService, 
        private binanceService: BinanceService, 
        private houbiService: HuobiService,
        private requests: ExchangeInterfaces.PriceRequest[]
    ){
        if(ArbitrageBot.instance !== undefined){
            throw('Only one instance of Arbitrage Bot is allowed.')
        }

        ArbitrageBot.instance = this;

        this.requests.forEach((request: ExchangeInterfaces.PriceRequest) => this.getTicker(request));
    }

    getTicker(request: ExchangeInterfaces.PriceRequest){       
        forkJoin({
            binanceResponse: this.binanceService.getPrice(request),
            kucoinResponse: this.kucoinService.getPrice(request),
            huobiResponse: this.houbiService.getPrice(request)
        }).subscribe(({ binanceResponse, kucoinResponse, huobiResponse }) => {
            console.log('\n-------------------------------------------------------')
            console.log(request.base + '/' + request.target)
            console.log(binanceResponse.exchange + ': ' + binanceResponse.price);
            console.log(kucoinResponse.exchange + ': ' + kucoinResponse.price);
            console.log(huobiResponse.exchange + ': ' + huobiResponse.price);
            console.log('-------------------------------------------------------\n')
        });
    }

    test2(){
        const request: ExchangeInterfaces.PriceRequest[] = [
            {
                base: ExchangeCoins.BITCOIN,
                target: ExchangeCoins.USDT
            },
            {
                base: ExchangeCoins.XLM,
                target: ExchangeCoins.USDT
            },
        ];

        this.binanceService.getPrices(request).subscribe((response: ExchangeInterfaces.PriceResponse[]) => {
            response.forEach((_response: ExchangeInterfaces.PriceResponse) => {
                console.log(_response.exchange + ': ' + _response.base + '/' + _response.target, _response.price);
            })
        });
    }
}