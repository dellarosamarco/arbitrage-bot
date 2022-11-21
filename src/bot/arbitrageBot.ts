import { BinanceCoins } from "../exchanges/binance/binance.coins";
import { BinanceInterfaces } from "../exchanges/binance/binance.interfaces";
import { BinanceService } from "../exchanges/binance/binance.service";
import { HuobiCoins } from "../exchanges/huobi/huobi.coins";
import { HuobiInterfaces } from "../exchanges/huobi/huobi.interfaces";
import { HuobiService } from "../exchanges/huobi/huobi.service";
import { KucoinCoins } from "../exchanges/kucoin/kucoin.coins";
import { KucoinInterfaces } from "../exchanges/kucoin/kucoin.interfaces";
import { KucoinService } from "../exchanges/kucoin/kucoin.service";

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
        const kucoinRequest: KucoinInterfaces.PriceRequest = {
            base: KucoinCoins.BITCOIN,
            target: KucoinCoins.USDT
        };
        
        const binanceRequest: BinanceInterfaces.PriceRequest = {
            base: BinanceCoins.BITCOIN,
            target: BinanceCoins.USDT
        };

        const huobiRequest: HuobiInterfaces.PriceRequest = {
            base: HuobiCoins.BITCOIN,
            target: HuobiCoins.USDT
        };
        
        this.kucoinService.getPrice(kucoinRequest).subscribe((response: KucoinInterfaces.PriceResponse) => {
            console.log("Kucoin : ", response.price);
        });
        
        this.binanceService.getPrice(binanceRequest).subscribe((response: BinanceInterfaces.PriceResponse) => {
            console.log("Binance : ", response.price);
        });

        this.houbiService.getPrice(huobiRequest).subscribe((response: HuobiInterfaces.PriceResponse) => {
            console.log("Huobi : ", response.price);
        });
    }
    
}