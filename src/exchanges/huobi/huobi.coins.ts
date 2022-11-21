export namespace HuobiCoins {
    export const BITCOIN = 'btc';
    export const USDT = 'usdt';
    export const XLM = 'xlm';

    export type coins = typeof BITCOIN | typeof USDT | typeof XLM;
}