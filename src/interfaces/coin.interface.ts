export interface ITime {
    updated: string;
    updatedISO: string;
    updateduk: string;
  }
  
  export interface IBpiCurrency {
    code: string;
    symbol: string;
    rate: string;
    description: string;
    rate_float: number;
  }
  
  export interface IBpi {
    [currencyCode: string]: IBpiCurrency;
  }
  
  export interface ICoin {
    time: ITime;
    disclaimer: string;
    chartName: string;
    bpi: IBpi;
  }
  