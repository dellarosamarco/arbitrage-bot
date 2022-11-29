export namespace ExchangeCoins {
    export const BITCOIN = 'BTC';
    export const ETH = 'ETH';
    export const USDT = 'USDT';
    export const XLM = 'XLM';
    export const DOGE = 'DOGE';
    export const ADA = 'ADA';
    export const BNB = 'BNB';
    export const XRP = 'XRP';
    export const MATIC = 'MATIC';
    export const DOT = 'DOT';
    export const LTC = 'LTC';
    export const DAI = 'DAI';
    
    export type coins = 
        typeof BITCOIN | 
        typeof ETH | 
        typeof USDT |
        typeof XLM | 
        typeof DOGE | 
        typeof ADA |
        typeof BNB |
        typeof XRP |
        typeof MATIC |
        typeof DOT |
        typeof LTC |
        typeof DAI
    ;

    export const literalCoins: string[] = [
        BITCOIN, 
        ETH, 
        USDT, 
        XLM, 
        DOGE, 
        ADA,
        BNB,
        XRP,
        MATIC,
        DOT,
        LTC,
        DAI
    ];
}