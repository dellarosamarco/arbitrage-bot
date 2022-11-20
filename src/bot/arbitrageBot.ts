import { BinanceCoins } from "../exchanges/binance/binance.coins";
import { BinanceInterfaces } from "../exchanges/binance/binance.interfaces";
import { BinanceService } from "../exchanges/binance/binance.service";
import { KucoinCoins } from "../exchanges/kucoin/kucoin.coins";
import { KucoinInterfaces } from "../exchanges/kucoin/kucoin.interfaces";
import { KucoinService } from "../exchanges/kucoin/kucoin.service";

export class ArbitrageBot {

    static instance: ArbitrageBot;

    constructor(private kucoinService: KucoinService, private binanceService: BinanceService){
        if(ArbitrageBot.instance !== undefined){
            throw('Only one instance of Arbitrage Bot is allowed.')
        }

        ArbitrageBot.instance = this;

        this.test();
    }

    test(){
        const kucoinRequest: KucoinInterfaces.PriceRequest = {
            base: KucoinCoins.XLM,
            target: KucoinCoins.USDT
        };
        
        const binanceRequest: BinanceInterfaces.PriceRequest = {
            base: BinanceCoins.XLM,
            target: BinanceCoins.USDT
        };
        
        this.kucoinService.getPrice(kucoinRequest).subscribe((response: KucoinInterfaces.PriceResponse) => {
            console.log("Kucoin : ", response.price);
        });
        
        this.binanceService.getPrice(binanceRequest).subscribe((response: BinanceInterfaces.PriceResponse) => {
            console.log("Binance : ", response.price);
        });
    }
    
}