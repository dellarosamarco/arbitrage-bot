import { BinanceService } from "../exchanges/binance/binance.service";
import { Coins } from "../coins";
import { HuobiService } from "../exchanges/huobi/huobi.service";
import { KucoinService } from "../exchanges/kucoin/kucoin.service";
import { ExchangeInterfaces } from "../exchanges/exchange.interfaces";

export class ArbitrageBot {

    static instance: ArbitrageBot;

    constructor(private kucoinService: KucoinService, private binanceService: BinanceService, private houbiService: HuobiService){
        if(ArbitrageBot.instance !== undefined){
            throw('Only one instance of Arbitrage Bot is allowed.')
        }

        ArbitrageBot.instance = this;

        this.test();
    }

    test(){
        const request: ExchangeInterfaces.PriceRequest = {
            base: Coins.BITCOIN,
            target: Coins.USDT
        };
        
        this.kucoinService.getPrice(request).subscribe((response: ExchangeInterfaces.PriceResponse) => {
            console.log("Kucoin : ", response.price);
        });
        
        this.binanceService.getPrice(request).subscribe((response: ExchangeInterfaces.PriceResponse) => {
            console.log("Binance : ", response.price);
        });

        this.houbiService.getPrice(request).subscribe((response: ExchangeInterfaces.PriceResponse) => {
            console.log("Huobi : ", response.price);
        });
    }
    
}