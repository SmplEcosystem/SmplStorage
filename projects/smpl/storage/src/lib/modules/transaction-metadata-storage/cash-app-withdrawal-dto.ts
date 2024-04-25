import {WithdrawalRequestDto} from "./withdrawal-request-dto";

export interface CashAppWithdrawalDto extends WithdrawalRequestDto{
  name: string;
  cashtag: string;
}
