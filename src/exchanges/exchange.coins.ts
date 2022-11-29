export namespace ExchangeCoins {
    export const BITCOIN = 'BTC';
    export const ETH = 'ETH';
    export const USDT = 'USDT';
    export const XLM = 'XLM';
    export const DOGE = 'DOGE';
    
    export type coins = typeof BITCOIN | typeof ETH | typeof USDT | typeof XLM | typeof DOGE;

    export const literalCoins: string[] = [BITCOIN, ETH, USDT, XLM, DOGE];
}