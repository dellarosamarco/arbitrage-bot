export namespace Exchange {
    export const BINANCE = 'binance';
    export const KUCOIN = 'kucoin';
    export const HUOBI = 'huobi';

    export type exchange = typeof BINANCE | typeof KUCOIN | typeof HUOBI;
}