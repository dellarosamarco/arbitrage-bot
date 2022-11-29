import { ArbitrageBot } from "./src/bot/arbitrageBot";
import { BinanceService } from "./src/exchanges/binance/binance.service";
import { ExchangeInterfaces } from "./src/exchanges/exchange.interfaces";
import { HuobiService } from "./src/exchanges/huobi/huobi.service";
import { KucoinService } from "./src/exchanges/kucoin/kucoin.service";
import { buildTickersRequest } from "./src/utilities/tickersRequest.utilities";

const kucoinService = new KucoinService();
const binanceService = new BinanceService();
const houbiService = new HuobiService();

const requests: ExchangeInterfaces.PriceRequest[] = buildTickersRequest();

new ArbitrageBot(kucoinService, binanceService, houbiService, requests);

