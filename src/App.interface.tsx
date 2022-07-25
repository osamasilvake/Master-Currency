export interface CurrencyInterface{
    [key:string]: CurrencyUSDInterface;
}

export interface CurrencyUSDInterface {
    [key: string]: number;
}

export interface CurrencyInfoInterface{
    [key: string]: number ;
}