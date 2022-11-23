import { ExchangeCoins } from "../exchanges/exchange.coins"

export const symbolToBase = (symbol: string): ExchangeCoins.coins | undefined => {
    const coins = ExchangeCoins.literalCoins;
    for(var n=0;n<coins.length;n++){
        if(symbol.includes(coins[n]) && symbol.indexOf(coins[n]) === 0){
            return coins[n] as ExchangeCoins.coins;
        }
    }
}

export const symbolToTarget = (symbol: string): ExchangeCoins.coins | undefined => {
    const coins = ExchangeCoins.literalCoins;
    for(var n=0;n<coins.length;n++){
        if(symbol.includes(coins[n]) && symbol.indexOf(coins[n]) > 1){
            return coins[n] as ExchangeCoins.coins;
        }
    }
}