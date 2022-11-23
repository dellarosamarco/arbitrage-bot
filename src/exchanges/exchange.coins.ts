export namespace ExchangeCoins {
    export const BITCOIN = 'BTC';
    export const USDT = 'USDT';
    export const XLM = 'XLM';
    
    export type coins = typeof BITCOIN | typeof USDT | typeof XLM;

    export const literalCoins: string[] = [BITCOIN, USDT, XLM];
}