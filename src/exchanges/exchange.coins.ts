export namespace ExchangeCoins {
    export const BITCOIN = 'BTC';
    export const USDT = 'USDT';
    export const XLM = 'XLM';
    export const DOGE = 'DOGE';
    
    export type coins = typeof BITCOIN | typeof USDT | typeof XLM | typeof DOGE;

    export const literalCoins: string[] = [BITCOIN, USDT, XLM, DOGE];
}