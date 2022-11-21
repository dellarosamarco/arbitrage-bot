import { ArbitrageBot } from "./src/bot/arbitrageBot";
import { BinanceService } from "./src/exchanges/binance/binance.service";
import { HuobiService } from "./src/exchanges/huobi/huobi.service";
import { KucoinService } from "./src/exchanges/kucoin/kucoin.service";

const kucoinService = new KucoinService();
const binanceService = new BinanceService();
const houbiService = new HuobiService();

new ArbitrageBot(kucoinService, binanceService, houbiService);

