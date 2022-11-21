export namespace Coins {
    export const BITCOIN = 'BTC';
    export const USDT = 'USDT';
    export const XLM = 'XLM';
    
    export type coins = typeof BITCOIN | typeof USDT | typeof XLM;
}