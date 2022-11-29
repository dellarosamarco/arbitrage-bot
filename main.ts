import { ArbitrageBot } from "./src/bot/arbitrageBot";
import { BinanceService } from "./src/exchanges/binance/binance.service";
import { ExchangeCoins } from "./src/exchanges/exchange.coins";
import { ExchangeInterfaces } from "./src/exchanges/exchange.interfaces";
import { HuobiService } from "./src/exchanges/huobi/huobi.service";
import { KucoinService } from "./src/exchanges/kucoin/kucoin.service";

const kucoinService = new KucoinService();
const binanceService = new BinanceService();
const houbiService = new HuobiService();

const requests: ExchangeInterfaces.PriceRequest[] = [
    {
        base: ExchangeCoins.BITCOIN,
        target: ExchangeCoins.USDT
    },
    {
        base: ExchangeCoins.XLM,
        target: ExchangeCoins.USDT
    },
    {
        base: ExchangeCoins.DOGE,
        target: ExchangeCoins.USDT
    }
];

new ArbitrageBot(kucoinService, binanceService, houbiService, requests);

