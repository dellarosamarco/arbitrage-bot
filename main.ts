import { BinanceCoins } from "./src/exchanges/binance/binance.coins";
import { BinanceInterfaces } from "./src/exchanges/binance/binance.interfaces";
import { BinanceService } from "./src/exchanges/binance/binance.service";
import { KucoinCoins } from "./src/exchanges/kucoin/kucoin.coins";
import { KucoinInterfaces } from "./src/exchanges/kucoin/kucoin.interfaces";
import { KucoinService } from "./src/exchanges/kucoin/kucoin.service";

const kucoinService = new KucoinService();
const binanceService = new BinanceService();

const kucoinRequest: KucoinInterfaces.PriceRequest = {
    base: KucoinCoins.XLM,
    target: KucoinCoins.USDT
};

const binanceRequest: BinanceInterfaces.PriceRequest = {
    base: BinanceCoins.XLM,
    target: BinanceCoins.USDT
};

kucoinService.getPrice(kucoinRequest).subscribe((response: KucoinInterfaces.PriceResponse) => {
    console.log("Kucoin : ", response.price);
});

binanceService.getPrice(binanceRequest).subscribe((response: BinanceInterfaces.PriceResponse) => {
    console.log("Binance : ", response.price);
});
