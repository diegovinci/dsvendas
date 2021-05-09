import { Seller } from "./seller";

export type Sale = {
  id: number;
  visited: number;
  deals: number;
  amounts: number;
  date: string;
  seller: Seller;
}

export type SalePage = {
  content?: Sale[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size?: number;
  number: number;
  numberOfElements?: number;
  empty?: boolean
}

export type SaleSum = {
  sellerName: string;
  sum: number;
}

export type saleSuccess = {
  sellerName: string;
  visited: number;
  deals: number;
}
