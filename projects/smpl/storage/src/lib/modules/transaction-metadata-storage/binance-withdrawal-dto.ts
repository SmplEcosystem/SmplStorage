import {WithdrawalRequestDto} from "./withdrawal-request-dto";

export interface BinanceWithdrawalDto extends WithdrawalRequestDto{
  email: string;
  binanceId: string;
}
