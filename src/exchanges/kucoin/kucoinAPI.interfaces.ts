export namespace KucoinAPI {    
    export interface PriceResponse {
        code: string;
        data: PriceResponseData;
    }

    export interface PriceResponseData {
        time: number;
        sequence: string;
        price: string;
        size: string;
        bestBid: string;
        bestBidSize: string;
        bestAsk: string;
        baseAskSize: string;
    }
}