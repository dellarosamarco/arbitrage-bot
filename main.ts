import { KucoinCoins } from "./src/exchanges/kucoin/kucoin.coins";
import { KucoinInterfaces } from "./src/exchanges/kucoin/kucoin.interfaces";
import { KucoinService } from "./src/exchanges/kucoin/kucoin.service";

const kucoinService = new KucoinService();

const request: KucoinInterfaces.PriceRequest = {
    base: KucoinCoins.BITCOIN,
    target: KucoinCoins.USDT
};

kucoinService.getPrice(request).subscribe((response: KucoinInterfaces.PriceResponse) => {
    console.log(response.price);
});
