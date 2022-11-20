import { ArbitrageBot } from "./src/bot/arbitrageBot";
import { BinanceService } from "./src/exchanges/binance/binance.service";
import { KucoinService } from "./src/exchanges/kucoin/kucoin.service";

const kucoinService = new KucoinService();
const binanceService = new BinanceService();

new ArbitrageBot(kucoinService, binanceService);

